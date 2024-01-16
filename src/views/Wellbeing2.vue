<template>
    <Homenavigation />
    <HeaderHome />
    <WellBeingContent2 />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBTable, MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import WellBeingContent2 from '@/components/Pethealth/Wellbeingcontent2.vue'
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "Wellbeing2",
    components: {
        Homenavigation,

        FooterContent,
        WellBeingContent2
    }
})
</script>