<template>
    <div>
        <img :src="about" alt="" style="width: 100%; height: 50%; margin: 0 auto; display: block;" />
        <br/>
    </div>

      <div class="about-us">
    <div class="container">
        <h2 class="text-center mb-5" style="font-size: 2.5em; color: purple; +[   ]">About FurMate Matcher</h2>



      <div class="row">
        <div class="col-md-4">
          <img
            src="@/assets/7.jpg"
            alt="FurMate Matcher Logo"
            class="img-fluid"
          />
        </div>
        <div class="col-md-8">
          <p style="text-align:justify; font-size: 1.3em;" >
            Welcome to FurMate Matcher, your online destination for finding the perfect furry companion. Our vision is to revolutionize the pet adoption experience by leveraging AI technology to ensure that every pet finds their perfect forever home. We aim to create a platform that fosters meaningful connections between adopters and pets, leading to happier lives for both. 
          </p>
          <p  style="text-align:justify; font-size: 1.3em;" >
            Our mission is to simplify the process of pet adoption by using advanced matching algorithms
            to pair pets with compatible owners. We believe that understanding the unique qualities of
            each pet is crucial for building strong and happy relationships.
          </p>
          
        </div>
      </div>
    </div>
  </div>



    
    <br/> <br/> <br/><br/> 
    <img :src="logo" alt="Logo"  style="width: 60%; height: auto; margin: 0 auto; display: block;" />

    <div>

    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, } from "mdb-vue-ui-kit";

import logo from "@/assets/Home/Header/guide for adopters.svg";
import about from "@/assets/Home/Header/4.png";

export default defineComponent({
    name: "Vision",
        data() {
        return {
            logo,
            about,

        }
    },
    
    components: {
        MDBContainer,
        
    }
})
</script>



<style scoped>
.about-us {
  padding: 50px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.img-fluid {
  max-width: 110%;
  height: auto;
}

.header-logo {
  width: 100%; /* Adjust the width as needed */
  height:  auto;
}
</style>