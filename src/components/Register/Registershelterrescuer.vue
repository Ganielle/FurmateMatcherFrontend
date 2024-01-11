<template>
    <MDBContainer class="registration-form">
        <div class="p-5 bg-light">
            <form @submit.prevent>
                <strong class="text-center" style="font-size: 1.5vw;">FURMATE {{ user }} REGISTRATION FORM</strong>
                <br/><br/>
                <MDBInput
                    type="text"
                    label="Username"
                    v-model="username"
                    wrapperClass="mb-4"
                    labelClass="forminput"
                    required
                />
                <MDBInput
                    type="password"
                    label="Password"
                    v-model="password"
                    wrapperClass="mb-4"
                    labelClass="forminput"
                    required
                />
                <MDBInput
                    type="email"
                    label="Email Address"
                    v-model="email"
                    wrapperClass="mb-4"
                    labelClass="forminput"
                    required
                />
                <MDBInput
                    type="text"
                    label="Building No./Street/Barangay"
                    v-model="street"
                    wrapperClass="mb-4"
                    labelClass="forminput"
                    required
                />
                <MDBRow id="HomeAddress">
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Municipality"
                            v-model="municipality"
                            wrapperClass="mb-4"
                            labelClass="forminput"
                            required
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Province"
                            v-model="province"
                            wrapperClass="mb-4"
                            labelClass="forminput"
                            required
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Country"
                            v-model="country"
                            wrapperClass="mb-4"
                            labelClass="forminput"
                            required
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Zip Code"
                            v-model="zipcode"
                            wrapperClass="mb-4"
                            labelClass="forminput"
                            required
                        />
                    </MDBCol>
                </MDBRow>
                <MDBTextarea label="Vision" rows="4" v-model="vision" labelClass="forminput"/>
                <br/>
                <MDBTextarea label="Mission" rows="4" v-model="mission" aria-label="forminput"/>
                <br/>
                <MDBCheckbox
                    label="By click this you're accepting the <a href='/termsandcondition'>Terms and Conditions</a>"
                    v-model="terms"
                    wrapperClass="d-flex mb-4"
                />
                <MDBRow>
                    <MDBCol>
                        <a href="/login" :disabled="registerprocessing.loading"><MDBBtn class="existing" color="info" block :disabled="registerprocessing.loading"> <MDBSpinner v-if="registerprocessing.loading" />
                        <p v-else>Have an existing account?</p> </MDBBtn></a>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn type="submit" class="signin" color="primary" @click="RegisterUser()" block :disabled="registerprocessing.loading">
                            <MDBSpinner v-if="registerprocessing.loading" />
                            <p v-else>Sign up </p>
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </form>
        </div>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MDBContainer, MDBInput, MDBCheckbox, MDBRow, MDBCol, MDBBtn, MDBRadio, MDBSpinner, MDBTextarea } from "mdb-vue-ui-kit";

import { Registration } from '@/modules/registration/registration'
import { RegistrationRescuer } from '@/modules/registration/registrationrescuer'

export default defineComponent({
    name: "RegistrationResucershelterform",
    props: ["role", "user"],
    data(){
        return {
            username: "",
            password: "",
            email: "",
            street: "",
            municipality: "",
            province: "",
            country: "",
            zipcode: "",
            terms: false,
            vision: "",
            mission: ""
        }
    },
    components: {
        MDBContainer,
        MDBInput,
        MDBCheckbox,
        MDBRow,
        MDBCol,
        MDBBtn,
        MDBSpinner,
        MDBTextarea
    },
    methods: {
        async RegisterUser() {
            if (this.username == "" && this.password == "" && this.email == "" && this.street == "" && this.municipality == "" && this.province == "" && this.country == "" && this.zipcode == ""){
                //@ts-ignore
                this.$swal({
                    title: "Please complete the form first before proceeding!",
                    confirmButtonText: "OK"
                })

                return;
            }

            if (this.terms == false){
                //@ts-ignore
                this.$swal({
                    title: "Please accept the Terms and Condition before proceeding!",
                    confirmButtonText: "OK"
                })

                return;
            }

            const data = {
                email: this.email,
                roleId: this.role,
                username: this.username,
                password: this.password,
                street: this.street,
                municipality: this.municipality,
                province: this.province,
                country: this.country,
                zipcode: this.zipcode,
                vision: this.vision,
                mission: this.mission
            }

            await this.Register(data)

            if (this.registerresponse.message == "success"){
                //@ts-ignore
                this.$swal({
                    title: "Successfully Registered! Do you want to proceed to login?",
                    showCancelButton: true,
                    confirmButtonText: "YES"
                    //@ts-ignore
                }).then((result) => {
                    if (result.isConfirmed){
                        this.$router.push({name: "login"})
                    }
                    else{
                        this.username == ""
                        this.password == "" 
                        this.email == "" 
                        this.street == "" 
                        this.municipality == "" 
                        this.province == "" 
                        this.country == "" 
                        this.zipcode == ""
                    }
                })
            }
            else{
                //@ts-ignore
                this.$swal({
                    title: this.registerresponse.response,
                    confirmButtonText: "YES"
                })
            }
        }
    },
    setup() {
        const { registerresponse, registerprocessing, Register } = RegistrationRescuer()

        return { registerresponse, registerprocessing, Register }
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
label.form-label::after{
    content: " *" !important;
    color: red
}
</style>