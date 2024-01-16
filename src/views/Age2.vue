<template>
    <Homenavigation />
    <HeaderHome />
    <Agecontent2 />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBTable, MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import Agecontent2 from '@/components/Pethealth/Agecontent2.vue'
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "Age2",
    components: {
        Homenavigation,

        FooterContent,
        Agecontent2
    }
})
</script>