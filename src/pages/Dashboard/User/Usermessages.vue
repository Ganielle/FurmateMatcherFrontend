<template>
    <MDBContainer fluid>
        <br/>
        <Dashboardbreadcrumbs data="MESSAGES" />
        <br/>
        <MDBRow>
            <MDBCol col="4">
                <center>
                    <strong>MESSAGES</strong>
                </center>
                <div style="height: 500px; overflow-y: auto; width: 100%;">
                    <div v-for="data in chatresponse.chatlistdata" :key=data style="cursor: pointer" class="chatbox-item">
                        <div class="chatbox-item-child" style="border-radius: 2px; background-color: rgb(214, 214, 214); padding-left: 5px; padding-right: 5px; margin: 0; width: 100%;" @click="() => {
                            
                        }">
                        <strong>Chat box for {{ data.roomname }}</strong>
                        </div> 
                        <br/>
                    </div>
                </div>  
            </MDBCol>
            <MDBCol>
                <div style="border-radius: 2px; background-color: rgb(214, 214, 214); padding-left: 5px; padding-right: 5px; margin: 0; width: 100%; height: 400px; overflow-y: auto;">
                    <MDBContainer fluid style="padding-top: 10px;">
                        <div class="left-chat px-2">
                            <strong>Yukie M. Daniel:</strong>
                            <br/><br/>
                            <p>Hello papa, I Love You!</p>
                            <p>sent: 12:42 AM 12/04/2023</p>
                        </div>
                        <br/><br/>
                        <br/><br/>
                        <br/><br/>
                        <div class="right-chat px-2">
                            <strong>Jan Bien Gabrielle A. Daniel:</strong>
                            <br/><br/>
                            <p>I Love you too anak!</p>
                            <p>sent: 12:42 AM 12/04/2023</p>
                        </div>
                        <br/><br/>
                        <br/><br/>
                        <br/><br/>
                        <div class="left-chat px-2">
                            <strong>Yukie M. Daniel:</strong>
                            <br/><br/>
                            <p>Hello papa, I Love You!</p>
                            <p>sent: 12:42 AM 12/04/2023</p>
                        </div>
                        <br/><br/>
                        <br/><br/>
                        <br/><br/>
                        <div class="left-chat px-2">
                            <strong>Yukie M. Daniel:</strong>
                            <br/><br/>
                            <p>Hello papa, I Love You!</p>
                            <p>sent: 12:42 AM 12/04/2023</p>
                        </div>
                        <br/><br/>
                        <br/><br/>
                        <br/><br/>
                    </MDBContainer>
                </div>
                <br/>
                <MDBRow>
                    <MDBCol col="10">
                        <MDBTextarea label="Message" rows="4" v-model="textareaValue" />
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn color="primary" block style="height: 100%">SEND</MDBBtn>
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
    methods: {
        async ChatList(){
            const auth = await GetItemKey("auth")
            const authdata = JSON.parse(auth)

            await this.GetChatList(authdata._id)
        }
    },
    mounted(){
        this.ChatList()
    },
    setup(){
        const { chatresponse, chatprocessing, GetChatList } = Chat()

        return { chatresponse, chatprocessing, GetChatList }
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
}
</style>