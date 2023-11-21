<template>
    <MDBContainer class="registration-form">
        <div class="p-5 bg-light">
            <h2 class="text-center">FURMATE MATCHER CATEGORY REGISTRATION</h2>
            <br/>
           <MDBBtn color="primary" block @click="$emit('pickcategory', 'User')">Adopter Registration</MDBBtn>
           <!-- <MDBBtn color="primary" block @click="$emit('pickcategory', 'Shelter')">Shelter Registration</MDBBtn>
           <MDBBtn color="primary" block @click="$emit('pickcategory', 'Organization')">Organization Registration</MDBBtn> -->
           <MDBBtn color="primary" block @click="$emit('pickcategory', 'Rescuer')">Rescuer Registration</MDBBtn>
        </div>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MDBContainer, MDBInput, MDBCheckbox, MDBRow, MDBCol, MDBBtn, MDBRadio, MDBSpinner } from "mdb-vue-ui-kit";

export default defineComponent({
    name: "RegistrationCategory",
    components: {
        MDBContainer,
        MDBInput,
        MDBCheckbox,
        MDBRow,
        MDBCol,
        MDBBtn,
        MDBRadio,
        MDBSpinner 
    },
    methods: {
        
    },
    setup() {
        
    }
})
</script>

<style>
.registration-form{
    margin: auto;
    width: 50vw;
}
.registration-form .existing {
    color: rgb(26, 26, 26);
    background-color: rgba(246,191,159,1)
}
.registration-form .signin {
    background-color: rgba(149,56,158,1)
}
</style>