<template>
    <MDBContainer>
        <br/><br/>
  <br/>  <br/> 
        <div style="text-align: center;">
        <strong style="font-size: 3vw; color: purple;">Emergency Preparedness for Cats</strong>
        </div>
            <br/><br/> <br/>

            <center>
                <img :src="wellbeing" style="width:100%"/>
            </center>

       <p style="text-align: justify; font-size:35px;"> 
           <br/>  
          
           Make sure your cat is properly identified with a collar and an ID tag containing your contact information, and consider the permanent identification method of microchipping.

            <br/><br/>
        
            <center>
                <img :src="nutriOne" style="width:100%"/>
            </center>

            <br/>

            <strong style="color: #a07dfb; font-size:50px;">Emergency Kit</strong> <br/> 
            
            Assemble an emergency kit including a three-day supply of food and water, medications, medical records, a litter box with litter, food and water dishes, a suitable carrier for transport, blankets, first aid supplies, and toys for comfort.


            <br/><br/>

           <center>
                <img :src="nutriTwo" style="width:100%"/>
            </center>

            <br/>

            <strong style="color: #a07dfb; font-size:50px;">Emergency Plan</strong> <br/> 
             Include your cat in your family's emergency plan, identify shelters and pet-friendly hotels, and keep your cat's medical records accessible.


            <br/><br/>

           <center>
                <img :src="nutriThree" style="width:100%"/>
            </center>

            <br/>

            <strong style="color: #a07dfb; font-size:50px;">Safety Measures</strong> <br/>
            
           For safety do's, practice evacuating with your cat and learn basic first aid skills, such as wound care and CPR.

            <br/><br/>
             For safety don'ts, avoid assuming your cat will willingly enter a carrier without prior training and positive reinforcement, and do not let your cat roam outdoors during or immediately after an emergency, as it may become disoriented or at risk.
            <br/><br/>

           <center>
                <img :src="nutriFour" style="width:100%"/>
            </center>

            <br/>

            <strong style="color: #a07dfb; font-size:50px;">Behavioral Training</strong> <br/>
            
           Train your cat to enter a carrier willingly, become familiar with car rides and travel, and ensure your cat is comfortable around other people and pets.

        <br/><br/><br/><br/>



        </p>
        
        
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from 'mdb-vue-ui-kit';
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import wellbeing from '@/assets/Home/FurCareGuide/PetWellBeing/9.png';

import nutriOne from '@/assets/Home/FurCareGuide/PetWellBeing/123.png';

import nutriTwo from '@/assets/Home/FurCareGuide/PetWellBeing/5.png';

import nutriThree from '@/assets/Home/FurCareGuide/PetWellBeing/7.png';

import nutriFour from '@/assets/Home/FurCareGuide/PetWellBeing/8.png';



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