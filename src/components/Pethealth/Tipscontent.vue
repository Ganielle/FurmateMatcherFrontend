<template>
    <MDBContainer>
        <br/><br/>
  <br/>  <br/> 
        <div style="text-align: center;">
        <strong style="font-size: 3vw; color: purple;">Emergency Preparedness for Dogs</strong>
        </div>
            <br/><br/> <br/>

            <center>
                <img :src="wellbeing" style="width:100%"/>
            </center>

       <p style="text-align: justify; font-size:35px;"> 
           <br/>  
          
           To ensure your dog can be identified, make sure it wears a collar with a tag displaying your contact details, and consider the use of a microchip for permanent identification.
            <br/><br/>
        
            <center>
                <img :src="nutriOne" style="width:100%"/>
            </center>

            <br/>

            <strong style="color: #a07dfb; font-size:50px;">Emergency Kit</strong> <br/> 
            
            Prepare an emergency kit with at least a three-day supply of food and water, include medications and medical records, pack food and water bowls, leash and harness, crate or carrier, blankets, a first aid kit, poop bags, and toys for comfort.

            <br/><br/>

           <center>
                <img :src="nutriTwo" style="width:100%"/>
            </center>

            <br/>

            <strong style="color: #a07dfb; font-size:50px;">Emergency Plan</strong> <br/> 
            Develop a family emergency plan that takes your dog into account, identify pet-friendly shelters and hotels in your area, and know where to locate your dog's medical records.

            <br/><br/>

           <center>
                <img :src="nutriThree" style="width:100%"/>
            </center>

            <br/>

            <strong style="color: #a07dfb; font-size:50px;">Safety Measures</strong> <br/>
            
            For safety do's, practice basic first aid for dogs, including stopping bleeding and performing CPR, and ensure your dog is well-socialized to reduce stress in unfamiliar situations.
            <br/><br/>
            For safety don'ts, never leave your dog unattended during an emergency, and avoid relying solely on a chain or tie-out for containment during crises.
            <br/><br/>

           <center>
                <img :src="nutriFour" style="width:100%"/>
            </center>

            <br/>

            <strong style="color: #a07dfb; font-size:50px;">Behavioral Training</strong> <br/>
            
           Train your dog to follow basic commands and to be comfortable around other people and pets.
        <br/><br/><br/><br/>



        </p>
        
        
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from 'mdb-vue-ui-kit';
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import wellbeing from '@/assets/Home/FurCareGuide/PetWellBeing/11.png';

import nutriOne from '@/assets/Home/FurCareGuide/PetWellBeing/22.png';

import nutriTwo from '@/assets/Home/FurCareGuide/PetWellBeing/33.png';

import nutriThree from '@/assets/Home/FurCareGuide/PetWellBeing/44.png';

import nutriFour from '@/assets/Home/FurCareGuide/PetWellBeing/55.png';



import careOne from '@/assets/Home/FurCareGuide/PetWellBeing/Care/1.png'

export default defineComponent({
    name: "WellBeingContent",
    data(){
        return{
            nutriOne,
            nutriTwo,
            nutriThree,
            nutriFour,
            careOne,
            wellbeing
        }
    },
    components: {
        MDBContainer,
        Carousel,
        Slide,
        Pagination,
    },
})
</script>

<style>
.carousel__pagination-button--active::after{
    background-color: white !important;
}
.carousel__pagination-button::after{
    background-color: gray;
}
.carousel__viewport{
    border-radius: 10px !important;
}
</style>