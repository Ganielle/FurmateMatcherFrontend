<template>
    <MDBContainer fluid>
        <br/>
        <Dashboardbreadcrumbs data="PETS / LIKE PETS" />
        <br/>
        <center>
        <strong style="color:purple; font-size: 40px; ">LIKED PETS LIST</strong>
        </center>
        <br/><br/>
        <div style="height: 500px; overflow-y: auto;">
            <center v-if="petsprocessing.petlikelistloading">
                <MDBSpinner size="xl"></MDBSpinner>
            </center>
            <center v-else-if="petsreponse.petlikelistresponse == '' || petsreponse.petlikelistresponse == undefined">
                <strong >NO DATA YET!</strong>
            </center>
            <MDBRow v-else>
                <MDBCol col="4" v-for="petsItem in petsreponse.petlikelistresponse" :key="petsItem">
                    <MDBCard class="h-100">
                        <div>
                            <MDBCardImg
                                :src="GetImage(petsItem.pet.picture)"
                                top
                            />
                        </div>
                        <MDBCardBody>
                        <MDBCardTitle>{{ petsItem.pet.name }}</MDBCardTitle>
                        <MDBCardText>
                            
                            
                            <strong>Breed: {{ petsItem.pet.breed }}</strong>
                            <br/>
                            <strong>Gender: {{ petsItem.pet.gender }}</strong>
                        </MDBCardText>
                            <MDBBtn class="custom-button" color="primary" @click="() => {
                                $router.push({name: 'petviewer', params: {
                                        petid: petsItem.pet._id
                                    }})
                            }">View </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBCard, MDBCardImg, MDBCardBody,
    MDBCardTitle, MDBCardText, MDBSpinner, MDBIcon, } from "mdb-vue-ui-kit";


import Dashboardbreadcrumbs from '@/components/Dashboard/Dashboardbreadcrumbs.vue';

import { Pets } from '@/modules/dashboard/user/pet'
import { GetItemKey } from '@/modules/globalfunction'

export default defineComponent({
    name: "LikePetsUser",
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
        MDBIcon
    },
    methods: {
        async GetPetLikeList(){
            const auth: any = await GetItemKey("auth")
            const authdata = JSON.parse(auth)

            await this.PetLikeList(authdata._id)

            if (this.petsreponse.petlikelistmessage != "success"){
                this.$swal({
                    title: `There's a problem getting your liked pets list! Error Code: ${this.petsreponse.petlikelistmessage}`,
                    showCancelButton: true,
                    confirmButtonText: "Yes"
                })

                return;
            }
        },
        GetImage(image: any){
            return new URL(`${import.meta.env.VITE_API_URL}/${image}`, import.meta.url).href
        },
    },
    mounted(){
        this.GetPetLikeList()
    },
    setup() {
        const { petsreponse, petsprocessing, PetLikeList } = Pets()

        return { petsreponse, petsprocessing, PetLikeList }
    }
})
</script>

<style>
.card-img-top {
    width: 100%;
    height: 20vw;
    object-fit: cover;
}

.custom-button {
    background-color: purple !important;
    color: white !important;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.custom-button:hover {
    background-color: rgb(127, 0, 255) !important;
    color: white !important;
}

</style>