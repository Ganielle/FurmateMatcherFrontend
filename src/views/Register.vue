<template>
    <div class="registration">
        <MDBBtn @click="ReturnHome()" color="primary" class="home">RETURN TO HOME</MDBBtn>
        <Registercategory v-if="category == ''" @pickcategory="data => {
            category = data
        }"/>
        <RegistrationForm v-else-if="category === 'User'" />
        <Registershelterrescuer v-else-if="category === 'Shelter'" />
    </div>
    <img :src="logo" class="bottom-right-image">
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MDBContainer, MDBBtn } from "mdb-vue-ui-kit";

import RegistrationForm from '@/components/Register/Registerform.vue'
import Registercategory from '@/components/Register/Registercategory.vue';
import Registershelterrescuer from '@/components/Register/Registershelterrescuer.vue';
import logo from "@/assets/logo.png"

export default defineComponent({
    name: "RegisterUser",
    data() {
        return {
            logo,
            category: ""
        }
    },
    components: {
        MDBContainer,
        RegistrationForm,
        MDBBtn,
        Registercategory,
        Registershelterrescuer
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
.home{
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 2vh;
    margin-left: 2vh;
}
</style>