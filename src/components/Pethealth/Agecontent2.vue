<template>
    <MDBContainer>

     <img :src="wellbeing" alt="" style="width: 80%; height: 50%; margin: 100px auto 0; display: block;" />

           

       <p style="text-align: justify; font-size:24px;"> 
           <br/>  
          
            Like all pet lovers, cat owners love to consider how old their cat is in human years. While not an exact science, it is a bit of fun to imagine how old our pets would be if they could suddenly transform into a human being. Yet, understanding how old your cat is “in human years” has a practical effect, too. By equivocating cats’ ages with humans, we are better able to understand at what stage of life our pets are experiencing. This allows owners and vets to appreciate cats’ energy and hormone levels, to explain their behaviours and needs, while also helping us to anticipate likely injuries and illnesses.  
            <br/><br/>

           
            
        
            <strong style="color: purple; font-size:28px;">HOW LONG DO CATS LIVE?</strong> <br/> <br/>

            <center>
                <img :src="nutriOne" style="width:70%"/>
            </center>

            <br/>

            Cats typically live around 15 years, although this is only an average; feline lifespans vary greatly depending on each cat’s genes, lifestyle and what cat food they eat or diet they follow. Breed is significant, too. For instance, Maine Coons and Bengals tend to live for 10-15 years, while British Shorthairs and Ragdolls average closer to 20 years. Naturally, each cat is different, and some will live long beyond the breed’s average life expectancy.  

            <br/><br/>

      <strong style="color: purple; font-size:28px;">HOW DO YOU DETERMINE A CAT'S AGE?</strong> <br/> <br/>

            As different breeds age at different rates, there isn’t a simple formula to estimate a cat’s equivalent age. Like dogs, who don’t actually age 7 human years for every dog year, cats age much more rapidly during their first 2 years of life than at any other point. However, while cats cannot tell us how they feel at different stages of life, vets can use comparative indicators to estimate their age in human years. The key indicators which can apply to most cats include:
             <br/> <br/>

          <div>
            <ul>
              <li>
                <strong>Condition of teeth:</strong> Cats get their first set of teeth between 2 and 4 weeks old, and a full adult set means the cat is at least 6 months old. Conversely, cats with yellow teeth and tartar are more likely to be middle-aged, while cats with missing teeth are most often senior cats.
              </li>
              <li>
                <strong>Texture of coat:</strong> The older the cat, the more coarse and thick is the fur. Like humans, they will also start to lose their colour and turn grey.
              </li>
              <li>
                <strong>Brightness of eyes:</strong> Young cats have smooth irises and bright, clear eyes. The older they get, the cloudier they become and are more likely to have discharge.
              </li>
              <li>
                <strong>Muscle tone:</strong> Like humans, cats lose tone and shape in their muscle and skin as they age. This loss of tone is due to older cats being less able to digest their food as well as they could when they were younger, and usually happens between 10 and 14 years old (i.e. when they are senior cats).
              </li>
            </ul>
          </div>
<br/><br/>
            <strong style="color: purple; font-size:28px;">HOW OLD IS MY CAT IN HUMAN YEARS?</strong> <br/> <br/>
   
            As a rough guide, most cats are considered sexually mature (and so are adolescent) at 6 to 10 months. By the time they are 2-years-old, cats are fully grown and in peak physical conditions, and so are considered to be approximately 24 or 25 in equivalent human years. The table below gives an average indicator of cats’ equivalent human ages throughout their lifetime, although this varies among different breeds.  
        
        <br/> <br/> <br/>
        
            <center>
                <img :src="nutriTwo" style="width:60%"/>
            </center>

          <br/> <br/> <br/>

            <strong style="color: purple; font-size:28px;">INDOOR AND OUTDOOR CATS</strong> <br/> <br/>

            Indoor cats often live a much more sheltered and slow-pace life, and are less likely to cause themselves injury through wear-and-tear, accidents or by getting into fights with other animals. Consequently, outdoor cats may age much faster than their indoor counterparts. It is thought that, indoor cats age 4 human years for every year they live, while outdoor cats age 8 years. This quickly leads to a big discrepancy between life expectancy and physical age gaps. A 5-year-old indoor cat may be the equivalent of a 36-year-old human, while an outdoor cat could be physically closer to a 48-year-old person. With this reasoning, by the time the cats are 10, the indoor cat is the human equivalent of 56, while the outdoor cat is 88. Just as human athletes tend to suffer more worn out joints in their old age after years of high impact, so do outdoor cats suffer physically after living more active lifestyles. Again, these are just indicators and every cat is different. Genes and diet play just as much of a role in cats’ life expectancy as breed and lifestyle, so it is important to feed your cat a healthy diet so they grow up strong, fit and happy. <br/><br/>

      </p>
        <br/><br/>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from 'mdb-vue-ui-kit';
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import wellbeing from '@/assets/Home/FurCareGuide/PetWellBeing/cattie.svg';

import nutriOne from '@/assets/Home/FurCareGuide/PetWellBeing/01.jpg';

import nutriTwo from '@/assets/Home/FurCareGuide/PetWellBeing/catAge.png';

import nutriThree from '@/assets/Home/FurCareGuide/PetWellBeing/3.png';

import nutriFour from '@/assets/Home/FurCareGuide/PetWellBeing/Nutrition/4.png';
import nutriFive from '@/assets/Home/FurCareGuide/PetWellBeing/Nutrition/5.png';

import mentalOne from '@/assets/Home/FurCareGuide/PetWellBeing/MentalStimulation/1.png'
import mentalTwo from '@/assets/Home/FurCareGuide/PetWellBeing/MentalStimulation/2.png'


import careOne from '@/assets/Home/FurCareGuide/PetWellBeing/Care/1.png'

export default defineComponent({
    name: "Agecontent2",
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