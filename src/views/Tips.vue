<template>
    <Homenavigation />
    <HeaderHome />
    <TipsContent />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBTable, MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import TipsContent from '@/components/Pethealth/Tipscontent.vue'
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "EmergencyResponse",
    components: {
        Homenavigation,
        HeaderHome,
        FooterContent,
        TipsContent    
    }
})
</script>