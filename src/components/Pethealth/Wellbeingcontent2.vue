<template>
    <MDBContainer>
        <br/><br/>
  <br/>  <br/> 
        <div style="text-align: center;">
        <strong style="font-size: 3vw; color: purple;">Cat Well-Being</strong>
        </div>
            <br/><br/> <br/><br/>

            <center>
                <img :src="wellbeing" style="width:100%"/>
            </center>

       <p style="text-align: justify; font-size:35px;"> 
           <br/>  
          
            Just like dogs, cats also need a holistic approach to well-being that encompasses their nutrition, exercise, and mental health. Here's how you can ensure your feline friend thrives:


            <br/><br/>
        
            <center>
                <img :src="nutriOne" style="width:100%"/>
            </center>

            <br/>

            <strong style="color: #a07dfb; font-size:50px;">Nutrition for Feline Wellness</strong> <br/> <br/>
            
            Cats require a diet that's rich in animal-based protein and low in carbohydrates. Provide high-quality cat food and ensure they have access to fresh water. Cats can be finicky eaters, so find a brand and flavor that suits them best.


            <br/><br/>

          It's important to note that individual cats may have specific dietary needs or preferences, and consulting with a veterinarian for personalized advice is recommended. However, here are eight cat food options available in the Philippines, along with brief reasons why they are recommended:
            <br/><br/>
    <ul>
      <li><strong>Royal Canin Feline Health Nutrition:</strong> This brand offers a range of cat food formulas tailored to different life stages and specific health needs. It is known for its quality ingredients and comprehensive nutritional profiles, catering to various feline requirements.</li>
      <li><strong>Hill's Science Diet:</strong> Hill's Science Diet provides a variety of cat food options, including formulations for specific health concerns. It is often recommended for its balanced nutrition and support for overall well-being.</li>
      <li><strong>Purina Pro Plan Cat Food:</strong> Purina Pro Plan offers specialized formulas targeting specific health issues, as well as life stage-appropriate options. It is recognized for providing a blend of essential nutrients and high-quality ingredients.</li>
      <li><strong>Meow Mix:</strong> Meow Mix is a popular and affordable cat food brand that offers a variety of flavors. It is often chosen for its palatability and the variety it provides for picky eaters.</li>
      <li><strong>Whiskas Cat Food:</strong> Whiskas is known for its affordability and a range of flavors that cats find appealing. It often contains a mix of proteins and essential nutrients to support feline health.</li>
      <li><strong>Kit Cat:</strong> Kit Cat offers a selection of cat food with different protein sources. It is known for its grain-free options and inclusion of functional ingredients such as omega-3 and omega-6 fatty acids for coat health.</li>
      <li><strong>Farmina N&D Grain-Free Cat Food:</strong> Farmina provides grain-free options for cats with sensitivities. It is often recommended for its use of high-quality ingredients and focus on natural nutrition.</li>
      <li><strong>Nutrience Grain-Free Cat Food:</strong> Nutrience offers grain-free options with a focus on providing balanced nutrition. It is often chosen for its protein-rich formulations and absence of common allergens.</li>
    </ul>
         <br/>
When selecting cat food, it's essential to consider factors such as your cat's age, health condition, and dietary preferences. Reading ingredient lists and consulting with your veterinarian can help ensure that the chosen cat food meets your feline friend's specific nutritional needs.

<br/><br/><br/>
           <center>
                <img :src="nutriTwo" style="width:100%"/>
            </center>

            <br/>

            <strong style="color: #a07dfb; font-size:50px;">Play & Exercise</strong> <br/> <br/>
            
            Cats are natural hunters and need physical activity to stay healthy. Interactive toys, feather wands, and laser pointers are great tools to engage your cat's hunting instincts. They love to pounce, chase, and climb, so provide opportunities for these activities.

            <br/><br/>

    <ul>
      <li><strong>Feather Wands:</strong> Feather wands engage a cat's natural hunting instincts. The feather mimics the movement of prey, encouraging your cat to pounce, bat, and jump, providing both physical exercise and mental stimulation.</li>
      <li><strong>Catnip Toys:</strong> Catnip toys are infused with catnip, a plant that induces a temporary sense of euphoria in many cats. These toys encourage playfulness, rolling, and batting, offering a stimulating and enjoyable experience for your feline friend.</li>
      <li><strong>Interactive Laser Pointers:</strong> Cats love to chase moving lights, making laser pointers an excellent interactive toy. Safely direct the laser around the room, and watch as your cat darts and pounces, providing an entertaining way to burn off excess energy.</li>
      <li><strong>Treat Dispenser Toys:</strong> These toys challenge your cat mentally and physically. By rolling, batting, or manipulating the toy, your cat can release treats. This not only provides a rewarding experience but also turns mealtime into an engaging activity.</li>
      <li><strong>Cat Tunnels:</strong> Tunnels provide a space for exploration and hide-and-seek games. Cats enjoy running through tunnels, pouncing on hidden toys, and using them as a cozy retreat. Tunnels offer both physical exercise and a sense of security.</li>
      <li><strong>Sisal or Cardboard Scratching Posts:</strong> Scratching is a natural behavior for cats that helps them stretch their muscles, mark territory, and keep their claws healthy. Providing a scratching post made of sisal or cardboard offers an appropriate outlet for this instinctive behavior, saving your furniture from scratches.</li>
    </ul>

           <br/><br/>


           <center>
                <img :src="nutriThree" style="width:100%"/>
            </center>

            <br/>

            <strong style="color: #a07dfb; font-size:50px;">Routine Veterinary Care</strong> <br/> <br/>
            
           Ensuring your cat's optimal health involves more than just providing food and shelter; regular visits to the veterinarian play a pivotal role in maintaining their well-being. These routine check-ups are indispensable for several reasons, encompassing vaccinations, dental health, and the overall physical and mental wellness of your feline companion.

            <br/><br/>
            Vaccinations administered during these veterinary visits are fundamental in protecting your cat against various diseases. These preventive measures not only safeguard your pet's health but also contribute to the broader community of animals by minimizing the risk of contagious illnesses.

            <br/><br/>
           Moreover, these veterinary check-ups provide an opportunity for an overall health assessment. Cats, by nature, are adept at masking signs of illness or discomfort. Regular professional examinations become essential in detecting subtle indicators that may elude even the most attentive pet owner. Early diagnosis of health issues allows for timely intervention and treatment, potentially preventing the progression of more severe conditions.


            <br/><br/>
           In essence, the significance of regular veterinary visits extends beyond vaccinations and dental care; it is a comprehensive approach to proactively managing your cat's health. By investing in these routine check-ups, you not only contribute to your cat's longevity and well-being but also foster a strong and trusting relationship with your veterinarian, who becomes an invaluable partner in your pet's healthcare journey.

            <br/><br/>
            <br/><br/>
           
        </p>
        
        <br/><br/>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from 'mdb-vue-ui-kit';
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import wellbeing from '@/assets/Home/FurCareGuide/PetWellBeing/a.png';

import nutriOne from '@/assets/Home/FurCareGuide/PetWellBeing/b.png';

import nutriTwo from '@/assets/Home/FurCareGuide/PetWellBeing/c.png';

import nutriThree from '@/assets/Home/FurCareGuide/PetWellBeing/e.png';



import careOne from '@/assets/Home/FurCareGuide/PetWellBeing/Care/1.png'

export default defineComponent({
    name: "WellBeingContent2",
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
</style>