<template>
    <Homenavigation />
    <HeaderHome />
    <Firstcontent />
    <Secondcontent />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBTable, MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import Firstcontent from '@/components/Homepage/Firstcontent.vue';
import Secondcontent from '@/components/Homepage/Secondcontent.vue';
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "Home",
    components: {
        Homenavigation,
        HeaderHome,
        Firstcontent,
        Secondcontent,
        FooterContent
    }
})
</script>