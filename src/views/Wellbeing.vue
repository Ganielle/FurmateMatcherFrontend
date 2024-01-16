<template>
    <Homenavigation />
    <HeaderHome />
    <WellBeingContent />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBTable, MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import WellBeingContent from '@/components/Pethealth/Wellbeingcontent.vue'
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "Wellbeing",
    components: {
        Homenavigation,

        FooterContent,
        WellBeingContent
    }
})
</script>