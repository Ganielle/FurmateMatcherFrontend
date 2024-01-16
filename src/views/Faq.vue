<template>
    <Homenavigation />
    <HeaderHome />
    <Vision />
    <FAQContent />
    <FooterContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Homenavigation from '@/components/Homenavigation.vue';
import HeaderHome from '@/components/Homepage/Header.vue'
import Vision from '@/components/FAQ/Vision.vue'
import FAQContent from '@/components/FAQ/faq.vue'
import FooterContent from '@/components/Homepage/Footer.vue'

export default defineComponent({
    name: "Faq",
    components: {
        Homenavigation,
        HeaderHome,
        Vision,
        FooterContent,
        FAQContent
    }
})
</script>