<template>
    <MDBContainer>
        <br/><br/>
        <p>
            <center>
                <img :src="veteriniarian" style="height: 50%; width: 50%;" />
            </center>
            <br/><br/>
            <br/><br/>
            <strong style="font-size: 1.2vw;">Pet Health</strong>
            <br/><br/>

            <center>
                <img :src="titlePetHealth" style="height: 50%; width: 50%;" />
            </center>
            <br/><br/>
            At Furmate Matcher, we believe that every pet deserves a loving and responsible forever home. We're committed to bringing pets and potential adopters together for joyful and lasting companionship. Central to this mission is ensuring the health and well-being of the pets we help find homes for.
            <br/>
            Pet health is a critical component of the adoption process. By providing detailed information about a pet's health and wellness, we empower you, the adopter, to make informed decisions. This information allows you to create a strong foundation for a happy and healthy life together with your new furry family member.
            <br/>
            In this section, we'll explain the key aspects of pet health that you should consider when adopting a pet through Furmate Matcher. Understanding these elements will not only help you provide the best care for your future pet but also ensure a well-matched and harmonious relationship between you and your new companion.
            <br/>
            From health records to behavior and temperament, we'll guide you through the vital information that will help you make responsible and loving choices in your adoption journey. Let's explore how these aspects come together to create a safe, happy, and fulfilling environment for both you and your future pet. Together, we can ensure that pets find their perfect forever homes, and adopters find their ideal furry friends.
            <br/><br/>
            
            <center>
                <img :src="keyConsiderations" style="height: 50%; width: 50%;" />
            </center>
            <br/><br/>
            Health Records:
            Access to a pet's health records is crucial for prospective adopters. These records include information on a pet's medical history, such as past illnesses, vaccinations, and medication history. Having this information allows adopters to better understand the pet's health status and any potential medical needs, helping them make informed decisions about adopting a particular pet.
            <br/><br/>
            <center>
                <img :src="petHealthRecord" style="height: 50%; width: 50%;" />
            </center>
            <br/><br/>
            Spaying and Neutering:
            The spaying or neutering status of a pet is an important consideration in adoption. Spaying (for females) and neutering (for males) not only promote responsible pet ownership by preventing unplanned litter but also have health benefits for the pet. Knowing whether a pet has been spayed or neutered can help adopters make decisions regarding future breeding and can also affect the pet's behavior and overall health.
            <br/><br/>
            Vaccination Status:
            Understanding a pet's vaccination status is vital for ensuring the safety and health of the pet and other animals in the household. Vaccinations protect pets from common and potentially serious diseases. Knowing the pet's current vaccination status and the recommended vaccination schedule helps adopters ensure that the pet receives the necessary protection against preventable diseases.
            <br/><br/>
            Microchipping and Identification:
            Microchipping is a method of permanent identification for pets. It involves implanting a tiny microchip under the pet's skin, which contains essential information, such as the owner's contact details. Microchipping greatly increases the chances of reuniting a lost pet with its owner, making it an important consideration for adopters who want to provide a secure and safe environment for their new pet.
            <br/><br/>
            Behavior and Temperament:
            Understanding a pet's behavior and temperament is crucial for finding the right match between the pet and the adopter's lifestyle and expectations. Each pet has a unique personality, and information on behavior traits, known issues, and any history of socialization or training can help adopters assess whether the pet's characteristics align with their preferences and living situation.
            <br/><br/>
            <center>
                <img :src="behaviourTemperament" style="height: 50%; width: 50%;" />
            </center>
            <br/><br/>
            Dietary Needs and Allergies:
            Being aware of a pet's dietary needs and allergies is important to ensure proper nutrition and prevent potential health issues. Some pets may have specific dietary requirements or allergies that must be accommodated. Adopters need this information to provide the right type of food and ensure the pet's well-being.
            <br/><br/>
            Medication and Ongoing Health Care:
            Some pets may require ongoing medical care or medication for various reasons, such as chronic conditions or special needs. Understanding any existing medical needs and prescribed medications allows adopters to assess their ability to provide the necessary care and support for the pet's health.
            <br/><br/>
            Exercise and Activity Level:
            Matching a pet's energy level with an adopter's lifestyle is crucial for long-term compatibility and the well-being of both the pet and the adopter. Information about the pet's activity level, exercise requirements, and favorite activities helps adopters determine if they can meet the pet's physical and mental stimulation needs.
            <br/><br/>
            Common Health Issues for the Breed:
            Different breeds may be prone to specific health issues. Providing adopters with information about breed-specific health concerns helps them understand the potential risks and needs associated with a particular breed. This knowledge allows adopters to make informed decisions about their ability to care for a specific breed effectively.
            <br/><br/>
            Adoption Agreement and Post-Adoption Support:
            The adoption agreement outlines the terms and conditions of the adoption, such as responsibilities, return policies, and any contractual agreements. Additionally, post-adoption support may include resources for guidance and assistance after the adoption process is completed, ensuring that the pet's ongoing health and well-being are prioritized. Clear agreements and available support resources are essential for both the pet's and adopter's welfare.
            
            <center>
                <img :src="petAdoptionAgreement" style="height: 50%; width: 50%;" />
            </center>
            <br/><br/>
        </p>
        
        <br/><br/>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from 'mdb-vue-ui-kit';

import veteriniarian from '@/assets/Home/FurCareGuide/PetHealth/veterinarian.jpg'

import behaviourTemperament from '@/assets/Home/FurCareGuide/PetHealth/BehaviorTemperament.jpg'
import keyConsiderations from '@/assets/Home/FurCareGuide/PetHealth/KeyConsiderations.jpg'
import petAdoptionAgreement from '@/assets/Home/FurCareGuide/PetHealth/PetAdoptionAgreement.jpg'
import petHealthRecord from '@/assets/Home/FurCareGuide/PetHealth/PetHealthRecord.jpg'
import titlePetHealth from '@/assets/Home/FurCareGuide/PetHealth/TitlePetHEalth.jpg'


export default defineComponent({
    name: "Pethealthcontent",
    data(){
        return{
            behaviourTemperament,
            keyConsiderations,
            petAdoptionAgreement,
            petHealthRecord,
            titlePetHealth,
            veteriniarian
        }
    },
    components: {
        MDBContainer
    }
})
</script>