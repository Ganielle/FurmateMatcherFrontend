<template>
    <Homenavigation />
    <HeaderHome />
    <TipsContent2 />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBTable, MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import TipsContent2 from '@/components/Pethealth/Tipscontent2.vue'
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "EmergencyResponse2",
    components: {
        Homenavigation,

        FooterContent,
        TipsContent2 
    }
})
</script>