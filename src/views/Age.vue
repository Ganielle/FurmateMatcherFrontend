<template>
    <Homenavigation />
    <HeaderHome />
    <Agecontent />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBTable, MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import Agecontent from '@/components/Pethealth/Agecontent.vue'
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "Age",
    components: {
        Homenavigation,

        FooterContent,
        Agecontent
    }
})
</script>