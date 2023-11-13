<template>
    <Homenavigation />
    <HeaderHome />
    <TermsContent />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBTable, MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import TermsContent from '@/components/Termsandcondition/Termscontent.vue'
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "Home",
    components: {
        Homenavigation,
        HeaderHome,
        FooterContent,
        TermsContent
    }
})
</script>