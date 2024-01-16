<template>
    
    <img :src="logo" alt="Logo" class="header-logo" />
    
    
    
    <div style="background-color: gainsboro">
        <br/><br/><br/>
        <MDBContainer>
            <p class="text-center" style="color: rgba(149,56,158,1); font-size: 4vw; font-weight: bold;">Furmate Matcher FAQs</p>
            <br/>
            <p class="text-center" style="font-size: 1.5vw">Welcome to FurMate Matcher Frequently Asked Questions (FAQs)!
            </p>
            <br/>
        <p  style="font-size: 1.5vw; text-align: justify;">
        Welcome to FurMate Matcher Frequently Asked Questions (FAQs)! We understand that adopting a pet is an exciting journey, and you may have questions along the way. This FAQ section aims to provide answers to common queries, helping you navigate the process smoothly and ensuring a positive experience for both you and your future furry companion. <br/> <br/>

        Explore the questions and answers below to find valuable information about the adoption process, our platform features, and more. If you don't find what you're looking for, feel free to reach out to our support team for personalized assistance. <br/> <br/>

        Thank you for considering FurMate Matcher for your pet adoption journey. Let's embark on this wonderful adventure together!
        </p>

        
            
            
            <br/>
            <MDBAccordion v-model="activeItem">
                <MDBAccordionItem
                headerTitle="How often is Furmate Matcher updated?"
                collapseId="collapseOne"
                >
                Furmate Matcher is regularly updated since each shelter and rescue group is responsible for maintaining current listings of adoptable pets on the platform.
                </MDBAccordionItem>
                <MDBAccordionItem
                headerTitle="How Do I Adopt a Pet I See on Furmate Matcher?"
                collapseId="collapseTwo"
                >
                Furmate Matcher is a platform that connects you with over (no. of shelters/organization/rescue group) animal shelters and rescue groups within Metro Manila, allowing them to post their adoptable pets. It's important to note that Furmate Matcher serves as a platform for these organizations to showcase their pets, but it does not handle the adoption process directly. Each adoption group listed on Furmate Matcher has its own unique adoption policies and procedures and is solely responsible for managing pet adoptions.

                <strong>To adopt a pet you find on Furmate Matcher, follow these steps:</strong><br/>
                1.) Visit the pet's profile: Click on the pet's picture or name on the search results page to access their detailed profile.
                <br/>
                2.) Contact the shelter or rescue group: On the pet's profile page, look for the "Ask About" button. Click on it to contact the respective shelter or rescue group to inquire further about the pet you're interested in.

                </MDBAccordionItem>
                <MDBAccordionItem
                headerTitle="How Do I Meet a Pet I See on Furmate Matcher?"
                collapseId="collapseThree"
                >
                Once you find a pet you’re interested in adopting, you’ll probably want to meet him or her. Go to the Pet Profile page by clicking on the pet’s picture or name on a search results page. This takes you to the pet’s detail page. Click “Ask About” to directly contact the shelter or rescue to inquire further.
                </MDBAccordionItem>
                <MDBAccordionItem
                headerTitle="Does Contacting the Shelter or Rescue Group Reserve the Pet I’m Interested In?"
                collapseId="collapseFour"
                >
                Submitting an adoption inquiry does not guarantee that the pet you’ve inquired about will still be available. For more information regarding the status of your inquiry, or the pet you’ve applied for, please contact the shelter or rescue group that listed the pet. The shelter’s address and contact information can also be found on the pet’s profile page.
                </MDBAccordionItem>
                <MDBAccordionItem
                headerTitle="What Are The Requirements For Adopting A Pet?"
                collapseId="collapseFive"
                >
                Each adoption group that lists its pets on Furmate Matcher has its own rules and requirements for adopting pets. If you’re interested in a specific pet, please reach out to the adoption group that created the pet listing to find out what their policies are.
                </MDBAccordionItem>
                <MDBAccordionItem
                headerTitle="Will There Be an Adoption Fee?"
                collapseId="collapseSix"
                >
                Furmate Matcher doesn't determine adoption group policies, including adoption fees and requirements. If you're interested in a particular pet, please reach out to the adoption group responsible for the pet listing through the Pet Profile page or Member Home Page.
                </MDBAccordionItem>
                <MDBAccordionItem
                headerTitle="Why Do Shelters and Rescue Groups Charge Adoption Fees?"
                collapseId="collapseSeven"
                >
                Adoption fees help cover the medical care of the animal while he or she waits for a new home, as well as food and transportation costs. These fees help to provide care for the other animals in the shelter or rescue group who may have medical bills that are much higher than any possible adoption fee. The money also acts as a donation to help support the organization as a whole, allowing the group to continue its efforts to rescue and rehome pets.
                </MDBAccordionItem>
                <MDBAccordionItem
                headerTitle="Why Do Shelters and Rescue Groups Charge Adoption Fees?"
                collapseId="collapseEight"
                >
                Thank you for thinking about adoption first! Each shelter and rescue group has its own adoption process. We do not dictate adoption procedures to our Furmate Matcher members, although we do encourage them to do everything possible to facilitate finding good homes for their adoptable pets. We hope you won’t let this one experience change your mind about providing a loving home to a pet in need. There are many animal shelters and rescue groups with many more adoptable pets waiting for their forever homes! Thank you for helping an adoptable pet and we wish you the best of luck in your search to find a new member of your family. If you have specific questions or concerns about a shelter, please contact us.
                </MDBAccordionItem>
                <MDBAccordionItem
                headerTitle="How Do I Make a Complaint About a Shelter or Rescue Group?"
                collapseId="collapseNine"
                >
                All of the animal shelters and rescue groups on our site undergo an application and screening process prior to being able to post their group’s adoptable pets. They must also provide a letter of reference from their primary veterinarian. If you have concerns about a particular shelter or rescue group posting on our site, you are welcome to contact us. It’s important to us that our member shelters and rescue groups remain in good standing in the animal welfare community. Please be sure to include the full name and city of the group you are referring to.
                </MDBAccordionItem>
            </MDBAccordion>
        </MDBContainer>
        <br/><br/><br/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref  } from 'vue';
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-vue-ui-kit";

import logo from "@/assets/Home/Header/2.svg";

export default defineComponent({
    name: "FAQContent",
    data() {
        return {
            activeItem: ref('collapseOne'),
            logo,

        }
    },
    components: {
        MDBAccordion, 
        MDBAccordionItem,
        MDBContainer
    }
})
</script>

<style>
.header-logo {
  width: 100%; /* Adjust the width as needed */
  height: auto;
}

</style>