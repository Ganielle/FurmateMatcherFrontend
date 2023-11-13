<template>
    <MDBContainer>
        <br/><br/>
        <p>
            <strong style="font-size: 1.2vw;">Emergency Response Preparedness</strong>
            <br/><br/>
            Ensuring the safety and comfort of your beloved pets, especially their fur, during emergencies is paramount. Here at FurmateMatcher, we understand the necessity of being prepared for unforeseen situations. Here are essential tips to help you protect your pet's fur and overall well-being during emergencies:
            <br/><br/><br/>
            <MDBRow>
                <MDBCol>
                    <img :src="imgOne" style="width: 100%; height: 100%;" />
                </MDBCol>
                <MDBCol style="font-size: 1vw;">
                    1. Fur Care Essentials in Your Emergency Kit
                    <br/>
                    Prepare an emergency kit that includes essential fur care items:
                    • Brush or Comb: Maintain your pet's fur hygiene and reduce stress by keeping their fur tangle-free.
                    • Towels and Wipes: Have supplies for quick cleanups, especially if your pet gets wet or dirty during the emergency.
                    • Grooming Products: Carry necessary shampoos or conditioners suitable for your pet's fur type.
                    • Flea and Tick Control: Include treatments to protect your pet's fur from parasites.
                    <br/><br/>
                    2. Fur-Specific Safety Guidelines
                    <br/>
                    Understand how to protect your pet's fur during emergencies:
                    • Weather Considerations: Shield your pet's fur from extreme weather conditions. Provide adequate shelter, blankets, or clothing as needed.
                    • Waterproofing: If possible, use pet-safe waterproofing products to keep their fur dry during wet conditions.
                    • Fire Safety: Have a plan to protect your pet from smoke or flames, which can harm their fur. Consider flame-retardant pet blankets.
                    <br/><br/>
                    3. Emergency Grooming and Fur First Aid
                    <br/>
                    Learn basic emergency grooming and fur first aid techniques:
                    • Mats and Tangles: Know how to gently detangle fur mats to prevent discomfort and skin issues.
                    Cuts or Wounds: Learn how to clean and tend to fur-related injuries to avoid infection.
                    • Heatstroke Prevention: Recognize signs of overheating and act promptly to cool your pet and protect their fur from heat damage.
                    <br/><br/>
                    4. Regular Fur Checkups and Maintenance
                    <br/>
                    Prioritize regular fur checkups to identify potential issues:
                    • Skin Conditions: Monitor your pet's skin for any abnormalities, such as redness, irritation, or dryness, and seek veterinary assistance if needed.
                    • Fur Health: Check for signs of a healthy coat, including shine, even texture, and absence of bald patches or excessive shedding.
                </MDBCol>
            </MDBRow>
            <br/><br/>
            
            <br/><br/>
            <strong style="font-size: 1.2vw;">Emergency response preparedness for pets is essential when facing national disasters or emergencies.
            </strong>
            <br/><br/>
            <MDBRow>
                <MDBCol style="font-size: 1vw;">
                    1. Evacuation Plan:<br/>
                    - Develop a clear evacuation plan that includes your pets. Assign responsibilities to family members for pet care.
                    <br/>
                    - Practice evacuation drills with your pets, so they become familiar with the process.
                    <br/><br/>
                    2. Medical Records:<br/>
                    - Keep copies of your pets' medical records, including vaccinations, in waterproof bags or digital format.
                    <br/><br/>
                    3. Comfort Items:<br/>
                    - Pack comfort items like blankets, toys, and a familiar bed to reduce stress for your pets.
                    <br/><br/>
                    4. Stay Informed:<br/>
                    - Pay attention to local news and emergency alerts to stay informed about evacuation orders and shelter locations.
                    <br/><br/>
                    5. Secure Your Home:
                    - In the event that you cannot evacuate with your pets, ensure they are secure in a safe area of your home with enough food and water.
                </MDBCol>
                <MDBCol>
                    <img :src="imgTwo" style="width: 100%; height: 100%;" />
                </MDBCol>
            </MDBRow>
            <br/><br/>
            <MDBRow>
                <MDBCol>
                    <img :src="imgThree" style="width: 100%; height: 100%;" />
                </MDBCol>
                <MDBCol style="font-size: 1vw;">
                    1. Buddy System:<br/>
                    - Arrange a buddy system with a neighbor or friend to help each other's pets in case one of you is away during an emergency.
                    <br/><br/>
                    2. Training:<br/>
                    - Consider basic training for your pets, so they respond to commands and are easier to manage during stressful situations.
                    <br/><br/>
                    3.Maintain Routine:<br/>
                    - During an emergency, try to maintain your pets' feeding and walking routines as much as possible.
                    <br/><br/>
                    4. Be Prepared for Different Types of Disasters<br/>
                    - Tailor your emergency preparedness plan to the types of disasters common in your area, such as hurricanes, wildfires, floods, or earthquakes.
                    <br/><br/>
                    <strong>Here are some important steps to ensure the safety and well-being of your pets during such situations:</strong>
                    <br/><br/>
                    1. Create a Pet Emergency Kit:
                    <br/>
                    - Prepare a kit specifically for your pets. Include essential items like food, water, medications, leashes, collars, and identification tags.
                    <br/>
                    - Ensure you have at least a week's supply of food and water for your pets.
                    <br/>
                    - Pack a first-aid kit for your pets, including any necessary medications and medical records.
                    <br/><br/>
                    2. Proper Identification:
                    <br/>
                    - Make sure your pets are wearing collars with up-to-date identification tags that include your contact information.
                    <br/>
                    - Consider microchipping your pets, as it provides a more permanent form of identification.
                    <br/><br/>
                    3. Emergency Contact List:
                    <br/>
                    - Keep a list of emergency contacts, including your veterinarian's contact information, nearby animal shelters, and pet-friendly hotels.
                    <br/><br/>
                    4. Pet Carriers and Leashes:
                    <br/>
                    - Have carriers or crates for each pet, which can be used for transport and temporary shelter.
                    <br/>
                    - Ensure you have sturdy leashes for dogs.
                    <br/><br/>
                    5. Safe Shelter:<br/>
                    - Know the pet-friendly shelters or hotels in your area. Research ahead of time and keep a list.
                    <br/><br/>
                    6. Special Needs Pets:<br/>
                    - If you have a pet with special needs, ensure you have extra supplies and equipment, such as mobility aids or oxygen tanks.
            <br/><br/>
                </MDBCol>
            </MDBRow>
        </p>
        <br/><br/>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';

import imgOne from '@/assets/Home/FurCareGuide/EmergencyResponse/1.png'
import imgTwo from '@/assets/Home/FurCareGuide/EmergencyResponse/2.png'
import imgThree from '@/assets/Home/FurCareGuide/EmergencyResponse/3.png'

export default defineComponent({
    name: "EmergencyContent",
    data(){
        return{
            imgOne,
            imgTwo,
            imgThree
        }
    },
    components: {
        MDBContainer,
        MDBRow,
        MDBCol
    }
})
</script>