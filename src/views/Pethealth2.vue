<template>
    <Homenavigation />
    <HeaderHome />
    <Pethealthcontent />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBTable, MDBRow, MDBCol, MDBBtn } from "mdb-vue-ui-kit";

import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import Pethealthcontent from '@/components/Pethealth/Pethealthcontent.vue'
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "Pethealth",
    components: {
        Homenavigation,

        FooterContent,
        Pethealthcontent
    }
})
</script>