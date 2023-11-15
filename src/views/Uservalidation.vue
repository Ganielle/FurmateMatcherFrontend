<template>
    <div class="registration">
        <MDBContainer class="registration-form">
            <div class="p-5 text-center bg-light">
                <MDBBtn @click="ReturnHome()" color="primary" class="home">RETURN TO HOME</MDBBtn>
            </div>
        </MDBContainer>
    </div>
    <img :src="logo" class="bottom-right-image">
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MDBContainer, MDBBtn } from "mdb-vue-ui-kit";

import LoginForm from '@/components/Login/Loginform.vue'
import logo from "@/assets/logo.png"

export default defineComponent({
    name: "EmailValidation",
    data() {
        return {
            logo,
        }
    },
    components: {
        MDBContainer,
        MDBBtn
    },
    methods: {
        ReturnHome(){
            this.$router.push({name: "home"})
        }
    }
})
</script>

<style scoped>
.registration{
    background: rgb(246,191,159);
    background: linear-gradient(315deg, rgba(246,191,159,1) 0%, rgba(149,56,158,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
}
.bottom-right-image {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200px;
    margin-bottom: 2vh;
    margin-right: 2vw;
}
.registration-form{
    margin: auto;
    width: 50vw;
}
</style>