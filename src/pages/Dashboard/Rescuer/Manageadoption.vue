<template>
    <MDBContainer fluid>
        <br/>
        <Dashboardbreadcrumbs data="MY PETS / MANAGE ADOPTION" />
        <br/>
        <div class="px-0 mb-3 d-flex align-items-center justify-content-center">
            <button class="tc-pager" role="button"
                :class="{'tc-page-disable': petspagination.page <= 0}"
                :disabled="petspagination.page <= 0" 
                @click="() => {
                    petspagination.page -= 1
                    AdoptionList()
                }">
                <MDBIcon
                    fas
                    icon="chevron-left"
                    class="text-primary"
                    style="color: white !important"
                />
            </button>
            <div class="tc-page">{{ petspagination.page + 1 }}</div>
            <button class="tc-pager" role="button"
                :class="{'tc-page-disable': petspagination.page >= petspagination.totalPages - 1}"
                :disabled=" petspagination.page >= petspagination.totalPages - 1"
                @click="() => {
                    petspagination.page += 1
                    AdoptionList()
                }">
                <MDBIcon
                    fas
                    icon="chevron-right"
                    class="text-primary"
                    style="color: white !important"
                />
            </button>
        </div>
        <br/>
        <MDBTable>
            <thead class="table-warning">
                <tr>
                    <th scope="col" v-for="list in headlist" :key="list" class="text-center">{{ list }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="petsprocessing.petadoptionlistloading">
                    <td colspan="4">
                        
                    {{ petsreponse.petadoptionlistresponse }}
                        <MDBSpinner></MDBSpinner>
                    </td>
                </tr>
                <tr v-else-if="petsreponse.petadoptionlistresponse == '' || petsreponse.petadoptionlistresponse[0].data.length <= 0">
                    
                    <td colspan="4">No Data Yet!</td>
                </tr>
                <tr v-else v-for="data in petsreponse.petadoptionlistresponse" :key="data">
                    <th scope="row" class="text-center" style="color: black">
                        {{ data.data[0].adopterdetails.firstname }} {{ data.data[0].adopterdetails.lastname }}
                    </th>
                    <th class="text-center" style="color: black">
                        {{ data.data[0].petdata.name }}
                    </th>
                    <th class="text-center" style="color: black">
                        {{ data.data[0].createdAt }}
                    </th>
                    <th class="text-center" style="color: black">
                        <MDBRow>
                            <MDBCol>
                                <MDBBtn color="primary" block style="height: 100%;" @click="() => {
                                    detailsuid = data.data[0].adopterdetails.user
                                    Profile(detailsuid)
                                    viewdetails = true
                                }">VIEW DETAILS</MDBBtn>
                            </MDBCol>
                            <MDBCol>
                                <MDBBtn color="success" block style="height: 100%;" @click="() => {
                                    this.$swal({
                                        title: 'Are you sure you want to approve this adopter?',
                                        showCancelButton: true,
                                        confirmButtonText: 'Yes'
                                    }).then((result) => {
                                        if (result.isConfirmed){
                                            ApproveReject(data.data[0].adopterdetails.user, 'success', data.data[0].pet)
                                        }
                                    })
                                }">APPROVE</MDBBtn>
                            </MDBCol>
                            <MDBCol>
                                <MDBBtn color="danger" block style="height: 100%;" @click="() => {
                                    this.$swal({
                                        title: 'Are you sure you want to reject this adopter?',
                                        showCancelButton: true,
                                        confirmButtonText: 'Yes'
                                    }).then((result) => {
                                        if (result.isConfirmed){
                                            ApproveReject(data.data[0].adopterdetails.user, 'reject', data.data[0].pet)
                                        }
                                    })
                                }">REJECT</MDBBtn>
                            </MDBCol>
                            <MDBCol>
                                <MDBBtn color="warning" block style="height: 100%;" @click="() => {
                                    $swal({
                                        title: 'Are you sure you want to chat with this adopter?',
                                        showCancelButton: true,
                                        confirmButtonText: 'Yes'
                                    }).then((resultdata: any) => {
                                        if (resultdata.isConfirmed){
                                            const room = `Adoption for ${data.data[0].petdata.name} with ${data.data[0].adopteruserdetails.username} & ${uname}`
                                            CreateMessage(data.data[0].adopteruserdetails._id, room)
                                        }
                                    })
                                }">REQUEST CHAT</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </th>
                </tr>
            </tbody>
        </MDBTable>
    </MDBContainer>

    <MDBModal
        id="exampleModal"
        tabindex="-1"
        labelledby="exampleModalLabel"
        v-model="viewdetails"
    >
        <MDBModalHeader>
        <MDBModalTitle id="exampleModalLabel"> USER PROFILE </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <center v-if="userprofileprocessing.profileloading">
                <MDBSpinner></MDBSpinner>
            </center>
            <div v-else>
                <center>
                    <img
                        :src="GetImage(userprofileresponse.profileresponse.preference.userdetails.profilepic)"
                        class="img-thumbnail"
                        alt="..."
                    />
                </center>
                <br/><br/>
                <MDBInput label="First Name" v-model="userprofileresponse.profileresponse.preference.userdetails.firstname" disabled/>
                <br/>
                <MDBInput label="Last Name" v-model="userprofileresponse.profileresponse.preference.userdetails.lastname" disabled/>
                <br/>
                <MDBInput label="Contact Number" v-model="userprofileresponse.profileresponse.preference.userdetails.contactnumber" disabled/>
                <br/>
                <MDBInput label="Gender" v-model="userprofileresponse.profileresponse.preference.userdetails.gender" disabled/>
                <br/>
                <MDBInput label="Email" v-model="userprofileresponse.profileresponse.preference.userdetails.email" disabled/>
                <br/>
                <MDBInput label="Street" v-model="userprofileresponse.profileresponse.preference.userdetails.street" disabled/>
                <br/>
                <MDBInput label="City" v-model="userprofileresponse.profileresponse.preference.userdetails.municipality" disabled/>
            </div>
        </MDBModalBody>
        <MDBModalFooter>
        <MDBBtn color="secondary" @click="viewdetails=false">Close</MDBBtn>
        </MDBModalFooter>
    </MDBModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBSpinner, MDBTable, MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBInput } from 'mdb-vue-ui-kit';
import { GetItemKey } from '@/modules/globalfunction'
import { Pets } from '@/modules/dashboard/rescuer/pet'
import { UserProfile } from '@/modules/dashboard/user/userprofile'
import { Chat } from '@/modules/dashboard/user/chat'

import Dashboardbreadcrumbs from '@/components/Dashboard/Dashboardbreadcrumbs.vue';

export default defineComponent({
    name: "ManageAdoptionRescuer",
    data(){
        return {
            headlist: [
                "ADOPTER",
                "PET",
                "REQUESTED DATE",
                "ACTION"
            ],
            viewdetails: false,
            detailsuid: "",
            uname: ""
        }
    },
    components: {
    MDBContainer,
    MDBIcon,
    MDBTable,
    Dashboardbreadcrumbs,
    MDBSpinner,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput
},
    methods: {
        async AdoptionList(){
            const auth = await GetItemKey("auth")
            const authdata = JSON.parse(auth)

            await this.GetAdoptionList(authdata._id)
        },
        GetImage(data: any){
            return new URL(`${import.meta.env.VITE_API_URL}/${data}`, import.meta.url).href
        },
        async ApproveReject(userid: any, status: any, petid: any){
            const userdata = {
                userid: userid,
                status: status,
                petid: petid
            }
            await this.ApproveRejectAdopter(userdata)

            if (this.petsreponse.petapproverejectmessage == "success"){
                window.location.reload()
            }
            else{
                this.$swal({
                    title: `There's problem processing your action! Error Code: ${this.petsreponse.petapproverejectresponse}`,
                    confirmButtonText: 'OK! Cool'
                })
            }
        },
        async GetUsername(){
            const auth = await GetItemKey("auth")
            const authdata = JSON.parse(auth)

            this.uname = authdata.username
        },
        async CreateMessage(adopterid: any, roomname: any){
            const auth = await GetItemKey("auth")
            const authdata = JSON.parse(auth)
            const data = {
                rescuerid: authdata._id,
                adopterid: adopterid,
                roomname: roomname
            }

            await this.CreateChat(data)
            
            this.$router.push({name: "rescuermessages", query: {"roomid": this.chatresponse.chatcreatemessage._id}})
        },
    },
    mounted(){
        this.AdoptionList()
        this.GetUsername()
    },
    setup(){
        const { petsreponse, petsprocessing, petspagination, GetAdoptionList, ApproveRejectAdopter } = Pets()
        const { userprofileresponse, userprofileprocessing, Profile } = UserProfile()
        const { chatresponse, chatprocessing, CreateChat } = Chat()

        return { petsreponse, petsprocessing, petspagination, GetAdoptionList, ApproveRejectAdopter,
            userprofileresponse, userprofileprocessing, Profile,
            chatresponse, chatprocessing, CreateChat }
    }
})
</script>

<style>
.tc-pager,
.tc-page {
  background-color: #95389e;
  color: rgb(255, 200, 106);
  padding: 0.25rem 0.8rem;
  margin: 0 0.5rem;
  font-weight: bold;
  border-radius: 0.5rem;
}
.tc-page-disable {
    background-color: #1a212b;
    opacity: 0.5;
    color: #c59238;
    padding: 0.25rem 0.8rem;
    margin: 0 0.5rem;
    font-weight: bold;
    border-radius: 0.5rem;
    cursor:context-menu;
}
</style>