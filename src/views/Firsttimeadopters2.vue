<template>
    <Homenavigation />
    <HeaderHome />
    <FirstTimeAdoptersContent2 />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBTable, MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import FirstTimeAdoptersContent2 from '@/components/Pethealth/Firsttimeadopters2.vue'
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "FirstTimeAdopters2",
    components: {
        Homenavigation,

        FooterContent,
        FirstTimeAdoptersContent2    
    }
})
</script>