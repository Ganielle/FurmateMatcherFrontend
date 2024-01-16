<template>
    <MDBContainer>
        <br/><br/>
        <p>
            <strong style="font-size: 1.2vw;">Well-Being</strong>
            <br/><br/>
            Ensuring your pet's well-being is at the core of responsible pet ownership. This section provides comprehensive guidance on how to keep your beloved pets not just alive but thriving and happy. Pet well-being goes beyond basics like food, water, and shelter; it encompasses mental and physical health, happiness, and fulfillment. Discover information and resources on nutrition, exercise, mental stimulation, grooming, social interaction, safety measures, and regular vet care to ensure your pet enjoys the highest quality of life. This well-being section is designed to empower pet owners with the knowledge and tools needed to create an environment where their pets can flourish, living life to the fullest, both physically and emotionally.
            <br/><br/>
            <center>
                <img :src="wellbeing" style="width:50%"/>
            </center>
            <br/><br/>
            <strong>Nutrition for a Healthy Pet:</strong> Ensuring your pet's well-being starts with proper nutrition. Just like humans, pets require a balanced diet to thrive. Learn about the nutritional needs of your specific pet, whether it's a dog, cat, bird, or reptile. We'll guide you through choosing the right pet food, understanding portion control, and identifying potential food-related issues. Explore the world of pet nutrition to make informed choices that will contribute to your pet's overall health and longevity.
            <br/><br/>
            <Carousel :autoplay="2000" :wrap-around="true">
                <Slide v-for="nutrituinItem in nutrition" :key="nutrituinItem.picture">
                    <div class="carousel__item">
                        <img :src="nutrituinItem.picture" style="width:50%"/>
                    </div>
                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
            <br/><br/>
            <strong>Mental Stimulation and Enrichment:</strong> A healthy pet is not just physically fit but mentally engaged as well. Boredom can lead to behavioral problems and even affect your pet's physical health. Delve into the significance of playtime, interactive toys, and cognitive activities in maintaining your pet's well-being. Discover a variety of mental stimulation exercises tailored to different pets, from DIY puzzle toys for cats to training games for dogs. Enrich your pet's daily life, prevent boredom-related issues, and ensure their overall happiness.
            <br/><br/>
            <Carousel :autoplay="2000" :wrap-around="true">
                <Slide v-for="mentalItem in mental" :key="mentalItem">
                    <div class="carousel__item">
                        <img :src="mentalItem" style="width:50%"/>
                    </div>
                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
            <br/><br/>
            <strong>Physical Fitness and Exercise:</strong> Regular exercise is essential for a pet's physical health, mental well-being, and overall happiness. Just like in humans, exercise helps pets maintain a healthy weight and prevents various health problems. We'll guide you through developing a fitness routine tailored to your pet's needs and preferences. Whether you have an energetic dog or an independent cat, we have exercise tips and ideas to keep them active and engaged. Learn about the benefits of physical activity, discover new exercise routines, and make your pet's well-being a top priority.
            <br/><br/>
            <Carousel :autoplay="2000" :wrap-around="true">
                <Slide v-for="fitnessItem in fitness" :key="fitnessItem">
                    <div class="carousel__item">
                        <img :src="fitnessItem" style="width:50%"/>
                    </div>
                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
            <br/><br/>
            <strong>Grooming and Hygiene:</strong> Proper grooming isn't just about appearances; it's essential for your pet's comfort and health. Depending on your pet's breed and type, grooming requirements can vary significantly. Understand the grooming needs of different pets, from brushing and bathing to dental care and nail trimming. We'll provide step-by-step guides on how to groom your pet at home, as well as when it's best to seek professional grooming services. Good grooming practices contribute to your pet's hygiene, comfort, and overall well-being.
            <br/><br/>
            <Carousel :autoplay="2000" :wrap-around="true">
                <Slide v-for="groomingItem in grooming" :key="groomingItem">
                    <div class="carousel__item">
                        <img :src="groomingItem" style="width:50%"/>
                    </div>
                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
            <br/><br/>
            <strong>Social Interaction and Training:</strong> Pets, like humans, thrive on social interaction. Effective training and socialization not only ensure your pet behaves well but also contribute to their overall well-being. We'll guide you through training techniques, behavior management, and building a strong bond with your pet through positive reinforcement. Whether you have a new puppy or are looking to solve behavioral issues in an older pet, our training resources will help you create a happy and harmonious relationship with your furry friend.
            <br/><br/>
            <Carousel :autoplay="2000" :wrap-around="true">
                <Slide v-for="socialItem in social" :key="socialItem">
                    <div class="carousel__item">
                        <img :src="socialItem" style="width:50%"/>
                    </div>
                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
            <br/><br/>
            <strong>Safety and Pet-Proofing:</strong> Creating a safe environment is paramount to your pet's well-being. Just like childproofing a home for a baby, pet-proofing is essential to protect your pet from potential hazards. We'll provide tips on how to pet-proof your home, recognize common dangers, and create a secure living space for your furry friend. Learn about safety measures, such as securing toxic substances and preventing accidents, to ensure your pet's safety and well-being.
            <br/><br/>
            <strong>Regular Veterinary Care:</strong> Regular check-ups with a veterinarian are vital for detecting and preventing health issues in your pet. We'll guide you through the importance of wellness exams, vaccinations, dental care, and understanding common health concerns that may affect your pet's well-being. Learn how to schedule regular vet visits, recognize signs of illness, and be proactive in managing your pet's health.
            <br/><br/>
            <center>
                <img :src="careOne" style="width:50%"/>
            </center>
            <br/><br/>
            Remember that ensuring your pet's well-being involves attention to various aspects of their life, from nutrition to mental stimulation and safety precautions. Explore these subtopics to give your pet the happiest, healthiest, and most fulfilling life possible.
        </p>
        
        <br/><br/>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from 'mdb-vue-ui-kit';
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import wellbeing from '@/assets/Home/FurCareGuide/PetWellBeing/wellbeing.png'

import nutriOne from '@/assets/Home/FurCareGuide/PetWellBeing/Nutrition/1.png';
import nutriTwo from '@/assets/Home/FurCareGuide/PetWellBeing/Nutrition/2.png';
import nutriThree from '@/assets/Home/FurCareGuide/PetWellBeing/Nutrition/3.png';
import nutriFour from '@/assets/Home/FurCareGuide/PetWellBeing/Nutrition/4.png';
import nutriFive from '@/assets/Home/FurCareGuide/PetWellBeing/Nutrition/5.png';

import mentalOne from '@/assets/Home/FurCareGuide/PetWellBeing/MentalStimulation/1.png'
import mentalTwo from '@/assets/Home/FurCareGuide/PetWellBeing/MentalStimulation/2.png'

import fitnessOne from '@/assets/Home/FurCareGuide/PetWellBeing/Fitness/1.png'
import fitnessTwo from '@/assets/Home/FurCareGuide/PetWellBeing/Fitness/2.png'
import fitnessThree from '@/assets/Home/FurCareGuide/PetWellBeing/Fitness/3.png'
import fitnessFour from '@/assets/Home/FurCareGuide/PetWellBeing/Fitness/4.png'
import fitnessFive from '@/assets/Home/FurCareGuide/PetWellBeing/Fitness/5.png'
import fitnessSix from '@/assets/Home/FurCareGuide/PetWellBeing/Fitness/6.png'
import fitnessSeven from '@/assets/Home/FurCareGuide/PetWellBeing/Fitness/7.png'
import fitnessEight from '@/assets/Home/FurCareGuide/PetWellBeing/Fitness/8.png'
import fitnessNine from '@/assets/Home/FurCareGuide/PetWellBeing/Fitness/9.png'

import groomingOne from '@/assets/Home/FurCareGuide/PetWellBeing/Grooming/1.png'
import groomingTwo from '@/assets/Home/FurCareGuide/PetWellBeing/Grooming/2.png'
import groomingThree from '@/assets/Home/FurCareGuide/PetWellBeing/Grooming/3.png'
import groomingFour from '@/assets/Home/FurCareGuide/PetWellBeing/Grooming/4.png'
import groomingFive from '@/assets/Home/FurCareGuide/PetWellBeing/Grooming/5.png'
import groomingSix from '@/assets/Home/FurCareGuide/PetWellBeing/Grooming/6.png'

import socialOne from '@/assets/Home/FurCareGuide/PetWellBeing/Social/1.png'
import socialTwo from '@/assets/Home/FurCareGuide/PetWellBeing/Social/2.png'
import socialThree from '@/assets/Home/FurCareGuide/PetWellBeing/Social/3.png'
import socialFour from '@/assets/Home/FurCareGuide/PetWellBeing/Social/4.png'

import careOne from '@/assets/Home/FurCareGuide/PetWellBeing/Care/1.png'

export default defineComponent({
    name: "WellBeingContent",
    data(){
        return{
            nutrition: [
                {
                    picture: nutriOne
                },
                {
                    picture: nutriTwo
                },
                {
                    picture: nutriThree
                },
                {
                    picture: nutriFour
                },
                {
                    picture: nutriFive
                }
            ],
            mental: [
                mentalOne,
                mentalTwo
            ],
            fitness: [
                fitnessOne,
                fitnessTwo,
                fitnessThree,
                fitnessFour,
                fitnessFive,
                fitnessSix,
                fitnessSeven,
                fitnessEight,
                fitnessNine
            ],
            grooming: [
                groomingOne,
                groomingTwo,
                groomingThree,
                groomingFour,
                groomingFive,
                groomingSix
            ],
            social: [
                socialOne,
                socialTwo,
                socialThree,
                socialFour
            ],
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