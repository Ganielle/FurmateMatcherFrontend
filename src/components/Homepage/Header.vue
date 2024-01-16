<template>
    <div class="header-home">
        <MDBContainer class="header-content">
            <p class="text-center header-font">
                THEIR HAPPINESS IS
            </p>
            <p class="text-center header-font">
                YOUR HAPPINESS
            </p>
        </MDBContainer>
    </div>
    <div class="header-line"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'

export default defineComponent({
    name: "Home",
    components: {
        MDBContainer
    }
})
</script>

<style>
.header-home{
    background-image: url('@/assets/Home/Header/headerimg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100%;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4);
}
.header-font{
    font-size: 5vw;
    color: white;
}
.header-content{
    padding-top: 10vh;
    padding-bottom: 5vh;
}
.header-line{
    background-color:rgba(149,56,158,1);
    padding: 1vh
}
</style>