<template>
    <Homenavigation />
    <HeaderHome />
    <FirstTimeAdoptersContent />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBTable, MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import FirstTimeAdoptersContent from '@/components/Pethealth/Firsttimeadopters.vue'
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "FirstTimeAdopters",
    components: {
        Homenavigation,
        HeaderHome,
        FooterContent,
        FirstTimeAdoptersContent    
    }
})
</script>