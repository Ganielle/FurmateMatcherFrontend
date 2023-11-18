<template>
    <div class="registration">
        <MDBContainer class="registration-form">
            <div class="p-5 text-center bg-light">
                <h3 v-if="validationprocessing.loading">
                    Validating your account
                </h3>
                <h3 v-else-if="validationresponse.message != 'success'">
                    There's a problem validating your account! Please contact customer support for more details.
                </h3>
                <h3 v-else>
                    Your account is now activated! You can now login using your account.
                </h3>
                <MDBBtn @click="ReturnHome()" color="primary" class="home" :disabled="validationprocessing.loading == false ? false : true">
                    <MDBSpinner size="medium" v-if="validationprocessing.loading"></MDBSpinner>
                    <strong v-else>RETURN TO HOME</strong>
                </MDBBtn>
            </div>
        </MDBContainer>
    </div>
    <img :src="logo" class="bottom-right-image">
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MDBContainer, MDBBtn, MDBSpinner } from "mdb-vue-ui-kit";

import { EmailValidaiton } from '@/modules/registration/emailvalidation';
import logo from "@/assets/logo.png"

export default defineComponent({
    name: "EmailValidation",
    data() {
        return {
            logo,
        }
    },
    components: {
        MDBContainer,
        MDBBtn,
        MDBSpinner
    },
    methods: {
        ReturnHome(){
            this.$router.push({name: "home"})
        }
    },
    mounted(){
        this.Validation(this.$route.query.value)
    },
    setup(){
        const { validationresponse, validationprocessing, Validation } = EmailValidaiton()

        return { validationresponse, validationprocessing, Validation }
    }
})
</script>

<style scoped>
.registration{
    background: rgb(246,191,159);
    background: linear-gradient(315deg, rgba(246,191,159,1) 0%, rgba(149,56,158,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
}
.bottom-right-image {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200px;
    margin-bottom: 2vh;
    margin-right: 2vw;
}
.registration-form{
    margin: auto;
    width: 50vw;
}
</style>