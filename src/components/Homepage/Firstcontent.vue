<template>
    <div class="first-content">
        <MDBContainer class="text-center">
            <br/><br/><br/>
            <p style="color: rgba(149,56,158,1); font-size: 2vw;">Pets Available for Adoption Nearby</p>
            <br/>
            <MDBSpinner size="large" v-if="petsprocessing.petlistloading" />
            <MDBRow v-else-if="petsreponse.petlistresponse.length > 0" style="height: 300px;" start>
                <MDBCol v-for="data in petsreponse.petlistresponse" :key="data">
                    <MDBCard style="height: 100%;" class="pet-adopt-item" @click="() => {
                        $router.push({name: 'login'})
                    }">
                        <MDBCardImg
                            :src="
                            //@ts-ignore
                            GetImage(data.picture)"
                            top
                            alt="..."
                        />
                        <MDBCardBody>
                            <MDBCardTitle class="text-center">{{ 
                                //@ts-ignore
                                data.name }}</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <strong v-else>NO PETS AVAILABLE YET!</strong>
            <br/><br/><br/>
        </MDBContainer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBSpinner, } from "mdb-vue-ui-kit";

import logo from "@/assets/logo.png"

import { Pets } from '@/modules/home/Pets'

export default defineComponent({
    name: "FirstContent",
    data(){
        return {
            logo
        }
    },
    components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImg,
    MDBSpinner
},
    methods: {
        async GetPets(){
            await this.GetPetListHome()
        },
        GetImage(image: any){
            return new URL(`${import.meta.env.VITE_API_URL}/${image}`, import.meta.url).href
        },
    },
    mounted(){
        this.GetPets()
    },
    setup() {
        const { petsreponse, petsprocessing, GetPetListHome } = Pets()

        return { petsreponse, petsprocessing, GetPetListHome }
    }
})
</script>

<style>
.first-content{
    background-color: gainsboro;
}
.pet-adopt-item:hover{
    border: 2px solid rgba(149,56,158,1);
    margin: -2px;
    cursor: pointer;
}
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>