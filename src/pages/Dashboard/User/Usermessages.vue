<template>
    <MDBContainer fluid>
        <br/>
        <Dashboardbreadcrumbs data=" USER MESSAGE INBOX" />
        <br/>
        <MDBRow>
            <MDBCol col="4">
                <center>
                    <strong>MESSAGES</strong>
                </center>
                <div style="height: 500px; overflow-y: auto; width: 100%;">
                    <div v-for="data in chatresponse.chatlistdata" :key=data style="cursor: pointer" class="chatbox-item">
                        <div class="chatbox-item-child" :style="SelectedRoom(data._id)" style="border-radius: 2px; padding-left: 5px; padding-right: 5px; margin: 0; width: 100%;" @click="() => {
                            SelectChatHistory(data._id)
                        }">
                        <strong>Chat box for {{ data.roomname }}</strong>
                        </div> 
                        <br/>
                    </div>
                </div>  
            </MDBCol>
            <MDBCol>
                <div ref="scrollContainer" style="border-radius: 2px; background-color: rgb(214, 214, 214); padding-left: 5px; padding-right: 5px; margin: 0; width: 100%; height: 400px; overflow-y: auto;">
                    <MDBContainer fluid style="padding-top: 10px;">
                        <MDBSpinner v-if="chatprocessing.chathistoryloading"></MDBSpinner>
                        <center v-else-if="chatresponse.chathistorydata.length <= 0">
                            <strong>NO CHAT HISTORY YET!</strong>
                        </center>
                        <div v-else v-for="data in chatresponse.chathistorydata" :key="data">
                            <div :class="{'right-chat': data.sender._id == userid, 'left-chat': data.sender._id != userid}" class="px-2">
                                <strong v-if="data.sender._id == userid">You</strong>
                                <strong v-else>{{ data.sender.username }}</strong>
                                <br/><br/>
                                <p style="white-space: pre-line;">{{ data.content }}</p>
                                <br/>
                                <p style="font-size: 13px;">sent: {{ ConvertToDateTime(data.createdAt) }}</p>
                            </div>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                        </div>
                    </MDBContainer>
                </div>
                <br/>
                <MDBRow>
                    <MDBCol col="10">
                        <MDBTextarea label="Message" rows="4" v-model="message" :disabled="roomchatid == ''"/>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn color="primary" block style="height: 100%" :disabled="roomchatid == '' || message == ''" @click="UserSendChat()">SEND</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GetItemKey } from '@/modules/globalfunction'
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBCard, MDBCardImg, MDBCardBody,
    MDBCardTitle, MDBCardText, MDBSpinner, MDBIcon, MDBTextarea, } from "mdb-vue-ui-kit";
import { Chat } from '@/modules/dashboard/user/chat'

import Dashboardbreadcrumbs from '@/components/Dashboard/Dashboardbreadcrumbs.vue';

export default defineComponent({
    name: "UserMessages",
    data(){
        return {
            roomchatid: '',
            message: '',
            userid: ''
        }
    },
    components: {
        MDBRow,
        MDBCol,
        MDBContainer,
        MDBBtn,
        MDBCard,
        MDBCardImg,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        Dashboardbreadcrumbs,
        MDBSpinner,
        MDBIcon,
        MDBTextarea
    },
    computed: {
        
    },
    methods: {
        ConvertToDateTime(time: any){
            const dateTime = new Date(time);

            return `${dateTime.getMonth()}/${dateTime.getDay()}/${dateTime.getFullYear()} ${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`
        },
        SelectedRoom(id: any){
            const roomidquery = this.$route.query.roomid
            
            if (id == this.roomchatid){
                return {
                    backgroundColor: "rgb(9, 59, 221)",
                    color: "white"
                }
            }
            
            return {
                backgroundColor: "rgb(214, 214, 214)",
                color: "black"
            }
        },
        async ChatList(){
            const auth = await GetItemKey("auth")
            const authdata = JSON.parse(auth)

            await this.GetChatList(authdata._id)
        },
        async ChatHistory(){
            const roomidquery = this.$route.query.roomid

            this.chatresponse.chathistorydata = []

            if (roomidquery == "" || roomidquery == undefined){
                return;
            }

            await this.GetChatHistory(roomidquery.toString())

            if (this.chatresponse.chathistorymessage == "success"){
                this.roomchatid = roomidquery.toString()

                
                    // Use $refs to access the scroll container
                const container: any = this.$refs.scrollContainer;

                // Scroll to the bottom
                container.scrollTop = container.scrollHeight;
            }
        },
        async SelectChatHistory(id: any){
            this.$router.push({query: {roomid: id}})

            await this.GetChatHistory(id)

            if (this.chatresponse.chathistorymessage == "success"){
                this.roomchatid = id

                // Use $refs to access the scroll container
                const container: any = this.$refs.scrollContainer;

                // Scroll to the bottom
                container.scrollTop = container.scrollHeight;
            }
        },
        async UserSendChat(){
            if (this.content == ""){
                this.$swal({
                    title: "Please put message first before sending",
                    showCancelButton: true,
                    confirmButtonText: "OK! Cool"
                })

                return
            }

            const data = {
                roomid: this.roomchatid,
                userid: this.userid,
                content: this.message
            }

            await this.SendChat(data)

            if (this.chatresponse.chatsendmessage == "success"){
                window.location.reload();
            }
            else{
                this.$swal({
                    title: `There's a problem sending your message! Error Code: ${this.chatresponse.chatsenddata}`,
                    showCancelButton: true,
                    confirmButtonText: "OK! Cool"
                })
            }
        }
    },
    async mounted(){
        const auth = await GetItemKey("auth")
        const authdata = JSON.parse(auth)

        this.userid = authdata._id

        await this.ChatList()
        await this.ChatHistory()
    },
    setup(){
        const { chatresponse, chatprocessing, GetChatList, GetChatHistory, SendChat } = Chat()

        return { chatresponse, chatprocessing, GetChatList, GetChatHistory, SendChat }
    }
})
</script>

<style>
.left-chat{
    background-color: rgb(68, 68, 68);
    border-radius: 5px;
    color: white;
    width: 40%; 
    clear: both; 
    float: left;
    word-wrap:break-word;
}
.right-chat{
    background-color: rgb(3, 88, 167);
    color: white;
    border-radius: 5px;
    width: 40%; 
    clear: both; 
    float: right;
    word-wrap:break-word;
}
.chatbox-item .chatbox-item-child:hover {
    background-color: rgb(206, 206, 206) !important;
    color: black !important;
}
</style>