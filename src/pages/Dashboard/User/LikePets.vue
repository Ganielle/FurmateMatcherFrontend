<template>
    <MDBContainer fluid>
        <br/>
        <Dashboardbreadcrumbs data="PETS / LIKE PETS" />
        <br/>
        <h1>LIKED PETS LIST</h1>
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
                                :src="
                                //@ts-ignore
                                GetImage(petsItem.pet.picture)"
                                top
                            />
                        </div>
                        <MDBCardBody>
                        <MDBCardTitle>{{ 
                            //@ts-ignore
                            petsItem.pet.name }}</MDBCardTitle>
                        <MDBCardText>
                            
                            
                            <strong>Breed: {{ 
                                //@ts-ignore
                                petsItem.pet.breed }}</strong>
                            <br/>
                            <strong>Gender: {{ 
                            //@ts-ignore
                            petsItem.pet.gender }}</strong>
                        </MDBCardText>
                            <MDBBtn color="primary" @click="() => {
                                $router.push({name: 'petviewer', params: {
                                    //@ts-ignore
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
        MDBSpinner
    },
    methods: {
        async GetPetLikeList(){
            const auth: any = await GetItemKey("auth")
            const authdata = JSON.parse(auth)

            await this.PetLikeList(authdata._id)

            if (this.petsreponse.petlikelistmessage != "success"){
                //@ts-ignore
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
</style>