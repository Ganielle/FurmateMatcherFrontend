<template>
    <MDBContainer fluid>
        <br/>
        <Dashboardbreadcrumbs data="DASHBOARD / PET VIEWER" />
        <br/>
        <h2>PET DETAILS</h2>
        <br/>
        <MDBSpinner v-if="petsprocessing.petdetailsloading"></MDBSpinner>
        <div v-else>
            <MDBRow>
                <MDBCol col="3">
                    <img
                        :src="
                        //@ts-ignore
                        GetImage(petsreponse.petdetailsresponse[0].picture)"
                        class="img-thumbnail"
                        alt="..."
                        style="width: 100%"
                    />
                    <br/><br/>
                    <strong>Rescuer: </strong><p>{{ petsreponse.petdetailsresponse[0].userDetails[0].username }}</p>
                    <strong>Adopter: </strong>
                    <p v-if="petsreponse.petdetailsresponse[0].adopterDetails == undefined || petsreponse.petdetailsresponse[0].adopterDetails.length <= 0">none</p>
                    <p v-else>{{ 
                    //@ts-ignore
                    petsreponse.petdetailsresponse[0].adopterDetails[0].firstname }} {{ 
                    //@ts-ignore
                    petsreponse.petdetailsresponse[0].adopterDetails[0].lastname }}</p>
                    <MDBBtn color="primary" block :disabled="chatprocessing.chatcreateloading" @click="() => {
                        //@ts-ignore
                        $swal({
                            title: 'Are you sure you want to chat with this rescuer?',
                            showCancelButton: true,
                            confirmButtonText: 'Yes'
                        }).then((data: any) => {
                            if (data.isConfirmed){
                                //@ts-ignore
                                const room = `Adoption for ${petsreponse.petdetailsresponse[0].name} with ${username} & ${petsreponse.petdetailsresponse[0].userDetails[0].username}`
                                //@ts-ignore
                                CreateMessage(petsreponse.petdetailsresponse[0].owner, room)
                            }
                        })
                    }">
                        <MDBSpinner v-if="chatprocessing.chatcreateloading"></MDBSpinner>
                        <strong>CHAT WITH MY RESCUER</strong>
                    </MDBBtn>
                    <MDBBtn color="success" block @click="() => {
                        //@ts-ignore
                        $swal({
                            title: `Are you sure you want to request an adoption to the rescuer?`,
                            showCancelButton: true,
                            confirmButtonText: 'Yes'
                            //@ts-ignore
                        }).then(data => {
                            if (data.isConfirmed){
                                //@ts-ignore
                                UserAdoptionRequest(petsreponse.petdetailsresponse[0]._id)
                            }
                        })
                    }" :disabled="
                    //@ts-ignore
                    petsreponse.petdetailsresponse[0].hasPendingRequests || petsreponse.petdetailsresponse[0].hasSuccessRequests || petsreponse.petdetailsresponse[0].adopterDetails.length > 0">
                        <strong v-if="
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].hasPendingRequests == true" >ADOPTION REQUESTED</strong>
                        <strong v-else-if="
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].hasSuccessRequests == true">YOU ALREADY ADOPT THIS PET</strong>
                        <strong v-else-if="petsreponse.petdetailsresponse[0].adopterDetails != undefined && petsreponse.petdetailsresponse[0].adopterDetails.length > 0">
                            <div v-if="
                                //@ts-ignore
                                petsreponse.petdetailsresponse[0].adopterDetails[0].user == uid">
                                YOU ALREADY ADOPT THIS PET
                            </div>
                            <div v-else>
                                SOMEONE ALREADY ADOPT THIS PET
                            </div>
                        </strong>
                        <strong v-else>ADOPT ME!</strong>
                    </MDBBtn>
                </MDBCol>
                <MDBCol>
                    <div style="height: 550px; overflow-y: auto;">
                        <h1>Hi, my name is {{ 
                            //@ts-ignore
                            petsreponse.petdetailsresponse[0].name }}</h1>
                        <br/>
                        <strong style="white-space: pre-line;">{{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].description }}</strong>
                        <br/><br/>
                        <h3>{{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].name }}'s Informations <MDBIcon fas icon="info-circle" size="sm" /> </h3>
                        <br/>
                        <strong>&#9679; {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].name }} is located at {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].located }} <br/>
                        &#9679; {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].name }} is an {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].breed }} {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].type }} <br/>
                        &#9679; {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].name }} is {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].special == "No" ? 'not' : '' }} a special {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].type }} <br/>
                        &#9679; {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].name }} {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].special == "No" ? "doesn't" : 'do' }} require a maintenance <br/>
                        &#9679; {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].name }} is a {{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].gender }} {{
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].type }}
                        </strong> 
                        <br/><br/>
                        <h3>{{ 
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].name }}'s Personality Traits <MDBIcon fas icon="heartbeat" size="sm" /> </h3>
                        <br/>
                        <strong v-for="
                        //@ts-ignore
                        data in petsreponse.petdetailsresponse[0].personalitytraits" :key="data">
                            &#9679; {{ data }} <br/>
                        </strong>
                    </div>
                    
                </MDBCol>
            </MDBRow>
            <br/><br/>
            <h2>RESCUER DETAILS</h2>
            <br/>
            <MDBRow>
                <MDBCol col="3">
                    <img
                        :src="user"
                        class="img-thumbnail"
                        alt="..."
                        style="width: 100%"
                    />
                </MDBCol>
                <MDBCol>
                    <h1>Hello, My name is {{ petsreponse.petdetailsresponse[0].userDetails[0].username }}</h1>
                    <br/>
                    <MDBInput
                        type="text"
                        label="Street"
                        v-model="
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].ownerDetails[0].street"
                        wrapperClass="mb-4"
                        disabled
                    />
                    <MDBInput
                        type="text"
                        label="Municipality"
                        v-model="
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].ownerDetails[0].municipality"
                        wrapperClass="mb-4"
                        disabled
                    />
                    <MDBInput
                        type="text"
                        label="Municipality"
                        v-model="
                        //@ts-ignore
                        petsreponse.petdetailsresponse[0].ownerDetails[0].province"
                        wrapperClass="mb-4"
                        disabled
                    />
                    <MDBTextarea label="Vision" rows="4" v-model="
                    //@ts-ignore
                    petsreponse.petdetailsresponse[0].ownerDetails[0].vision" disabled/>
                    <br/>
                    <MDBTextarea label="Mission" rows="4" v-model="
                    //@ts-ignore
                    petsreponse.petdetailsresponse[0].ownerDetails[0].mission" disabled/>
                </MDBCol>
            </MDBRow>
        </div>
        <br/>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBCard, MDBCardImg, MDBCardBody,
    MDBCardTitle, MDBCardText, MDBSpinner, MDBIcon, MDBInput, MDBTextarea, } from "mdb-vue-ui-kit";
import { GetItemKey } from '@/modules/globalfunction'
import { Pets } from '@/modules/dashboard/user/pet'
import { Chat } from '@/modules/dashboard/user/chat'

import user from '@/assets/Dashboard/User/Profile/user.png'
import Dashboardbreadcrumbs from '@/components/Dashboard/Dashboardbreadcrumbs.vue';

export default defineComponent({
    name: "UserPetDetails",
    props: ["petid"],
    data(){
        return {
            user,
            username: "",
            uid: ""
        }
    },
    components: {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtn,
    Dashboardbreadcrumbs,
    MDBSpinner,
    MDBIcon,
    MDBInput,
    MDBTextarea
},
    methods: {
        async GetPetDetails(){
            const auth = await GetItemKey("auth")
            //@ts-ignore
            const authdata = JSON.parse(auth)

            await this.PetDetailsView(this.petid, authdata._id)
        },
        GetImage(data: any){
            return new URL(`${import.meta.env.VITE_API_URL}/${data}`, import.meta.url).href
        },
        async CreateMessage(rescuerid: any, roomname: any){
            const auth = await GetItemKey("auth")
            //@ts-ignore
            const authdata = JSON.parse(auth)
            const data = {
                rescuerid: rescuerid,
                adopterid: authdata._id,
                roomname: roomname
            }

            await this.CreateChat(data)
            
            //@ts-ignore
            this.$router.push({name: "usermessages", query: {"roomid": this.chatresponse.chatcreatemessage._id}})
        },
        async GetUsername(){
            const auth = await GetItemKey("auth")
            //@ts-ignore
            const authdata = JSON.parse(auth)

            this.username = authdata.username
            this.uid = authdata._id
        },
        async UserAdoptionRequest(petid: any){
            const auth = await GetItemKey("auth")
            //@ts-ignore
            const authdata = JSON.parse(auth)

            const data = {
                petid: petid,
                userid: authdata._id
            }

            await this.AdoptionRequest(data)

            if (this.petsreponse.petadoptionrequestmessage == "success"){
                window.location.reload()
            }
            else{
                //@ts-ignore
                $swal({
                    title: `There's a problem requesting for adoption! Error Code: ${this.petsreponse.petadoptionrequestdata}`,
                    showCancelButton: true,
                    confirmButtonText: 'Yes'
                })
            }
        }
    },
    mounted(){
        this.GetPetDetails();
        this.GetUsername();
    },
    setup(){
        const { petsreponse, petsprocessing, PetDetailsView, AdoptionRequest } = Pets()
        const { chatresponse, chatprocessing, CreateChat } = Chat()

        return { petsreponse, petsprocessing, PetDetailsView, AdoptionRequest,
            chatresponse, chatprocessing, CreateChat }
    }
})
</script>