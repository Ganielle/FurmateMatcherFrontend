<template>
  <div>
    <img :src="about" alt="" style="width: 85%; margin: 10px auto 0; display: block;" />
   
     <router-link to="/login">
        <button class="adopt-button">ADOPT NOW!</button>
      </router-link>

    <div >
      <MDBContainer class="header-content">
      
        <h2 style="color: purple; text-align: center;">
          Bringing home a pet is a life-changing experience that only spreads joy and cheer! Take a step forward and help pets start over their lives again, with love that they truly deserve. While every pet deserves a home, we truly believe every household deserves a pet!

          <br /> 
        </h2>

      </MDBContainer>
 

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBSpinner, } from "mdb-vue-ui-kit";

import logo from "@/assets/logo.png"
import about from "@/assets/Home/Header/headerr-.svg";

import { Pets } from '@/modules/home/Pets'

export default defineComponent({
  name: "Home",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBSpinner
  },
  data() {
    return {
      logo,
      about
    }
  },
  methods: {
    async GetPets() {
      await this.GetPetListHome()
    },
    GetImage(image: any) {
      return new URL(`${import.meta.env.VITE_API_URL}/${image}`, import.meta.url).href
    },
  },
  mounted() {
    this.GetPets()
  },
  setup() {
    const { petsreponse, petsprocessing, GetPetListHome } = Pets()

    return { petsreponse, petsprocessing, GetPetListHome }
  }
})
</script>

<style>

.header-font {
  font-size: 4vw;
  color: purple;
  font-weight: bold;
  text-align: center; /* Align text to the center */
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  height: 100vh; /* Adjust the height as needed */
}


.header-line {
  background-color: black;
  padding: 0.5vh;
}

.adopt-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: 2px solid purple;
  color: purple;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.adopt-button:hover {
  background-color: purple;
  color: white;
}


</style>
