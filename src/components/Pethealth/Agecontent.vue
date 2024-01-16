<template>
    <MDBContainer>
        
                <img :src="wellbeing" alt="Wellbeing Image" style="width: 100%; object-fit: cover;">

           

       <p style="text-align: justify; font-size:24px;"> 
           <br/>  
          
            Pet owners have been asking how old our dogs are in human years for centuries (and probably longer).
            <br/><br/>

            We do this mostly because it is fun to speculate how old our pets would be if they suddenly transformed into a human, although there is a practical use, too.
            <br/><br/>
            By comparing our dogs age with a human equivalent, it helps us get a sense of their life span, their energy levels and the kind of health issues we can expect. This helps us get a sense of what is normal and what symptoms may be out of the ordinary.
            <br/><br/><br/>
            
        
            <strong style="color: purple; font-size:28px;">HOW OLD IS A DOG IN HUMAN YEARS?</strong> <br/> <br/>

            <center>
                <img :src="nutriOne" style="width:100%"/>
            </center>

            <br/>

           
            
            When determining a dog's age, several factors come into play. Size and growth are significant indicators, as puppies are generally smaller and undergo rapid growth, while older dogs may have reached their full size. The activity level is another key aspect, with young dogs being more playful and active, adults maintaining a balanced energy level, and seniors often showing a decrease in activity.

            <br/><br/>

            Examining the teeth can provide insights, as puppies have sharp baby teeth that are eventually replaced by adult teeth. Dental wear and tartar buildup become more noticeable as dogs age. Coat condition is also indicative, with puppy coats being soft and fluffy, while older dogs may have a more weathered or graying coat, and seniors might experience thinning fur.

            <br/> <br/>

            Muscle tone is a physical characteristic to observe; young dogs typically have well-defined muscles, while seniors may show a decrease in muscle mass and tone. Behavioral changes play a role too—puppies may exhibit more exploratory behavior, adults tend to have a settled demeanor, and seniors could display signs of arthritis or other age-related conditions.

            <br/><br/>
            Regular veterinary check-ups are crucial for a comprehensive health assessment. Blood tests, X-rays, and other diagnostics can help identify age-related issues and provide a more accurate analysis based on your dog's specific health and characteristics.
            
            <br/><br/> <br/>

            <center>
                <img :src="nutriTwo" style="width:60%"/>
            </center>
            <br/>
            While the table above gives you a more accurate indicator of how old your dog is in human years, you may prefer a less accurate but more straightforward method. If so, the general rule to follow is that your dog ages 15 human years in year one, 9 years in year two, and 5 years thereafter.  
        
        <br/> <br/> <br/>


            <strong style="color: purple; font-size:28px;">HOW DO YOU CALCULATE HOW OLD A DOG IS?</strong> <br/> <br/>

            Researchers base the figures in the table above on many factors, most of which are physical. <br/> <br/>

            For instance, we estimate that a 1-year-old dog is about the equivalent to a 15-year-old teenager because all of their teeth have developed, they are strong and energetic and they have reached (or are approaching) sexual maturity. <br/> <br/>

            Meanwhile, as dogs get older, their teeth start to show wear and tear and they are more likely to succumb to illnesses and ailments which we tend to associate with elderly humans, such as arthritis, cloudy eyes, loose skin and grey hair. <br/><br/>
      
    <div>
    <table class="table">
      <thead>
        <tr class="text-lg">
          <th scope="col" >Age of Dog</th>
          <th scope="col">Human Equivalent</th>
          <th scope="col">Indicator(s)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-lg">8 weeks</td>
          <td class="text-lg">3-4 years</td>
          <td class="text-lg">Baby teeth have finished growing</td>
        </tr>
        <tr>
          <td class="text-lg">7 months</td>
          <td class="text-lg">8-10 years</td>
          <td class="text-lg">All permanent teeth have grown</td>
        </tr>
        <tr>
          <td class="text-lg">1-2 years</td>
          <td class="text-lg">15-24 years</td>
          <td class="text-lg">Teeth starting to yellow and duller</td>
        </tr>
        <tr>
          <td class="text-lg">3-5 years</td>
          <td class="text-lg">28-36 years</td>
          <td class="text-lg">Tooth wear and plaque build-up is common</td>
        </tr>
        <tr>
          <td class="text-lg">5-10 years</td>
          <td class="text-lg">36-66 years</td>
          <td class="text-lg">Teeth and gums show some signs of disease</td>
        </tr>
        <tr>
          <td class="text-lg">10-15 years</td>
          <td class="text-lg">56-93 years</td>
          <td class="text-lg">Teeth well worn, lots of plaque, and some may be missing</td>
        </tr>
      </tbody>
    </table>
  </div>
<br/>
        Unfortunately, researchers still don’t know why larger breeds of dog tend to age faster than smaller breeds. Certainly, this is quite uncommon amongst other species, with larger animals tending to live relatively long lives (whales, elephants), while small animals live shorter lives (rodents, small birds).
        <br/> <br/>
        Whatever the reason, older dogs tend to age much more rapidly in their final years, while smaller dogs tend to decline more steadily.  
</p>
        <br/><br/>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from 'mdb-vue-ui-kit';
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import wellbeing from '@/assets/Home/FurCareGuide/PetWellBeing/doggie.jpg';

import nutriOne from '@/assets/Home/FurCareGuide/PetWellBeing/1-.jpg';

import nutriTwo from '@/assets/Home/FurCareGuide/PetWellBeing/dogAge.png';

import nutriThree from '@/assets/Home/FurCareGuide/PetWellBeing/3.png';

import nutriFour from '@/assets/Home/FurCareGuide/PetWellBeing/Nutrition/4.png';
import nutriFive from '@/assets/Home/FurCareGuide/PetWellBeing/Nutrition/5.png';

import mentalOne from '@/assets/Home/FurCareGuide/PetWellBeing/MentalStimulation/1.png'
import mentalTwo from '@/assets/Home/FurCareGuide/PetWellBeing/MentalStimulation/2.png'


import careOne from '@/assets/Home/FurCareGuide/PetWellBeing/Care/1.png'

export default defineComponent({
    name: "Agecontent",
    data(){
        return{
            nutriOne,
            nutriTwo,
            nutriThree,
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
.table {
  width: 80%;
  margin: 0 auto;
}

.text-lg {
  font-size: 1.3em; /* Adjust the font size as needed */
}
</style>