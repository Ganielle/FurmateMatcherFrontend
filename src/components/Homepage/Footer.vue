<template>
    <div class="footer-content">
        <MDBContainer class="text-center">
            <br/><br/><br/>
            <img :src="logo" height="60" />
            <br/><br/>
            <p style="color: white;">@2023 FurmateMatcher.com  All trademarks are owned by the developer and used for thesis purpose only</p>
            <br/>
            <p><a href="" class="footer-items" style="color: white;">Shelter & Rescue Registration</a> | <a href="/termsandcondition" style="color: white;" class="footer-items">Terms of Service</a> | <a href="" style="color: white;" class="footer-items">Privacy Policy</a> | <a href="/faq" style="color: white;" class="footer-items">FAQ</a></p>
            <br/>
        </MDBContainer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, } from "mdb-vue-ui-kit";

import logo from "@/assets/logo.png"

export default defineComponent({
    name: "FooterContent",
    data(){
        return {
            logo
        }
    },
    components: {
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBCard, 
        MDBCardBody, 
        MDBCardTitle, 
        MDBCardText, 
        MDBCardImg,
    }
})
</script>

<style>
.footer-content{
    background-color: rgb(169, 105, 175);
}
.footer-items:hover{
    color: rgb(195, 22, 211) !important;
}
</style>