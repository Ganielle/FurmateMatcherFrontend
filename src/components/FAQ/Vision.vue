<template>
    <div class="text-center">
        <br/><br/><br/>
        <MDBContainer>
            <p style="color: rgba(149,56,158,1); font-size: 3vw">VISION</p>
            <p style="font-size: 1vw">Our vision is to revolutionize the pet adoption experience by leveraging AI technology to ensure <br/> that every pet finds their perfect forever home. We aim to create a platform that <br/> fosters meaningful connections between adopters and pets, leading to happier lives for both.
            Mission
            </p>
            <br/><br/><br/>
            <p style="color: rgba(149,56,158,1); font-size: 3vw">MISSION</p>
            <p style="font-size: 1vw">Our mission is to provide a seamless and personalized pet adoption journey through <br/> the power of AI-driven solutions. We are dedicated to optimizing pet-adopter matches based <br/>  on comprehensive data analysis, enhancing the well-being of pets and the satisfaction of adopters.
            </p>
            <br/><br/><br/>
        </MDBContainer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, } from "mdb-vue-ui-kit";

export default defineComponent({
    name: "Vision",
    components: {
        MDBContainer
    }
})
</script>