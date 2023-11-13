<template>
    <MDBContainer>
        <br/><br/>
        <p>
            <strong style="font-size: 1.2vw;">Tips on How to take care of adopted animals
            </strong>
            <br/><br/>
            Taking care of adopted animals, whether they are dogs, cats, rabbits, or any other pets, is a rewarding but also a responsible commitment. Here are some tips to ensure the well-being and happiness of your newly adopted pet:
            <br/><br/>
            1. Prepare Your Home:<br/>
            Pet-proof your home by removing potential hazards, such as toxic plants, chemicals, and small objects that your pet might swallow.
            Create a safe and comfortable space for your pet with bedding, food and water dishes, and appropriate toys.
            <br/><br/>
            2. Regular Veterinary Care:<br/>
            Schedule a visit to the vet shortly after adoption for a full health checkup.
            Keep up with vaccinations, flea and tick control, and deworming as recommended by your vet.
            Consider spaying or neutering your pet if it hasn't been done already.
            <br/><br/>
            3. Proper Nutrition:<br/>
            Feed your pet a balanced and appropriate diet based on their age, species, and size.
            Consult your vet for specific dietary recommendations, especially if your pet has special needs or health concerns.
            <br/><br/>
            4. Exercise and Mental Stimulation:<br/>
            Provide regular exercise and playtime to keep your pet physically and mentally active.
            Different pets have different exercise requirements, so tailor activities to your pet's breed and age.
            <br/><br/>
            5. Socialization<br/>
            Help your pet socialize with other animals and people. Positive interactions are important for their emotional well-being.
            <br/><br/>
            6. Training and Obedience:<br/>
            Invest time in training to teach basic commands and good behavior.
            Use positive reinforcement techniques, like treats and praise, to encourage learning.
            <br/><br/>
            7. Grooming and Hygiene:<br/>
            Regularly groom your pet, which may include brushing, bathing, and nail trimming.
            Keep an eye on their teeth and ears for signs of issues.
            <br/><br/>
            8. Safety and Identification:<br/>
            Ensure your pet wears a collar with an ID tag and is microchipped for easy identification.
            Keep your pet on a leash or in a secure area when outside.
            <br/><br/>
            9. Regular Check-ins:<br/>
            Pay attention to your pet's physical and emotional well-being.
            Look for signs of illness or distress and seek prompt veterinary care when needed.
            <br/><br/>
            10. Patience and Love:<br/>
            Be patient with your pet as they adjust to their new home. It may take time for them to feel comfortable.
            Show love and affection regularly to build trust and a strong bond.
            <br/><br/>
            11. Adapt to Their Needs:<br/>
            Every pet is unique, so adapt your care routine to their individual needs and preferences.
            <br/><br/>
            12. Consider Professional Help:<br/>
            If you encounter behavioral issues or have questions about pet care, don't hesitate to seek advice from a professional trainer or behaviorist.
            <br/><br/>
            13. Legal Obligations:<br/>
            Familiarize yourself with local animal welfare laws and regulations and ensure you're in compliance.
        </p>
        <center>
            <img :src="tipsOne" style="width:50%"/>
        </center>
        
        <br/><br/>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from 'mdb-vue-ui-kit';

import tipsOne from '@/assets/Home/FurCareGuide/Tips/1.png'

export default defineComponent({
    name: "TipsContent",
    data() {
        return {
            tipsOne
        }
    },
    components: {
        MDBContainer
    }
})
</script>