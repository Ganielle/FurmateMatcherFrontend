<template>
    <MDBContainer>
        <br/><br/>
        <p>
            <strong style="font-size: 1.2vw;">First time adopters do’s and don’t </strong>
            <br/><br/>
            Welcoming a furry friend into your home is an exciting and rewarding experience. As a first-time fur adopter, it's essential to provide the best care and environment for your new companion. Here are some valuable do's and don'ts to guide you on this incredible journey:
            <br/><br/>
            Do's:
            <br/><br/>
            1. Research and Prepare:
            • Do Your Research: Learn about the specific needs, characteristics, and care requirements of the pet you're considering adopting.
            <br/>
            • Prepare Your Home: Create a safe and comfortable environment for your new pet with appropriate bedding, food, water, and toys.

            <br/><br/>
            2. Adopt Responsibly:<br/>
            • Adopt from Shelters or Rescues: Adopt from reputable shelters, rescue organizations, or adoption events to give a homeless pet a loving home.<br/>
            • Consider Adoption, Not Buying: Choose adoption to provide a chance for pets in need rather than purchasing from breeders or pet stores.

            <br/><br/>
            3. Establish Routine Healthcare:<br/>
            • Schedule Veterinary Check-ups: Arrange a visit to a trusted veterinarian for a thorough health examination and vaccinations.<br/>
            • Discuss Spaying or Neutering: Consult your vet about the importance and timing of spaying or neutering to ensure a healthy and controlled pet population.

            <br/><br/>
            4. Provide Proper Nutrition and Hydration:<br/>
            • Choose Appropriate Food: Select the right type of pet food that aligns with your pet's age, size, breed, and health requirements.
            <br/>
            - Maintain Fresh Water Supply: Ensure your pet always has access to fresh, clean water to stay hydrated.

            <br/><br/>
            5. Socialize and Train:<br/>
            • Introduction to People and Pets: Gradually expose your pet to various people, other pets, and environments to promote positive socialization.<br/>
            • Basic Training: Begin basic training with commands like sit, stay, and leash walking to instill good behavior.

            <br/><br/>
            Don'ts:

            <br/><br/>
            1. Impulse Adoption:<br/>
            • Don't Adopt on a Whim: Avoid making sudden decisions to adopt a pet without thorough consideration of the responsibilities and commitments involved.

            <br/><br/>
            2. Neglect Veterinary Care:<br/>
            • Don't Skip Vet Visits: Neglecting regular veterinary check-ups and vaccinations can compromise your pet's health and wellbeing.

            <br/><br/>
            3. Overlook Exercise and Mental Stimulation:<br/>
            • Don't Ignore Exercise Needs: Pets need regular exercise and mental stimulation to stay healthy and happy; neglecting this can lead to behavioral problems.

            <br/><br/>
            4. Neglect Grooming:<br/>
            • Don't Forget Grooming: Regular grooming, including brushing, nail trimming, and ear cleaning, is essential for your pet's comfort and health.

            <br/><br/>
            5. Discipline with Cruelty:<br/>
            • Don't Use Physical Punishment: Avoid using physical force or harsh discipline; instead, use positive reinforcement techniques for training and behavior correction.

            <br/><br/>
            Join us at FurmateMatcher on this exciting adventure of pet adoption, where we believe every pet deserves a loving home, and every home deserves the love of a pet. Let's embark on this journey together, ensuring a brighter, happier future for both you and your newfound companion.

        </p>
        <br/><br/>
        <center>
            <img :src="adoptersOne" style="height: 50%; width: 50%;" />
        </center>
        <br/><br/>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from 'mdb-vue-ui-kit';

import adoptersOne from '@/assets/Home/FurCareGuide/FirstTimeAdopters/1.png'

export default defineComponent({
    name: "FirstTimeAdoptersContent",
    data(){
        return {
            adoptersOne
        }
    },
    components: {
        MDBContainer
    }
})
</script>