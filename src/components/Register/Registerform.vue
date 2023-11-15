<template>
    <MDBContainer class="registration-form">
        <div class="p-5 bg-light">
            <form @submit.prevent>
                <strong class="text-center" style="font-size: 1.5vw;">FURMATE USER REGISTRATION FORM</strong>
                <br/><br/>
                <MDBInput
                    type="text"
                    label="Username"
                    v-model="username"
                    wrapperClass="mb-4"
                    required
                />
                <MDBInput
                    type="password"
                    label="Password"
                    v-model="password"
                    wrapperClass="mb-4"
                    required
                />
                <MDBInput
                    type="email"
                    label="Email Address"
                    v-model="email"
                    wrapperClass="mb-4"
                    required
                />
                <MDBRow>
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="First Name"
                            v-model="firstname"
                            wrapperClass="mb-4"
                            required
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Middle Name (Optional)"
                            v-model="middlename"
                            wrapperClass="mb-4"
                            required
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Last name"
                            v-model="lastname"
                            wrapperClass="mb-4"
                            required
                        />
                    </MDBCol>
                </MDBRow>
                <label for="gender">Gender</label>
                <div id="gender">
                    <MDBRadio label="Male" value="Male" v-model="gender" inline name="inlineRadioOptions" />
                    <MDBRadio label="Female" value="Female" v-model="gender" inline name="inlineRadioOptions" />
                </div>
                <br/>
                <label for="dateofbirth">Date Of Birth</label>
                <br/>
                <input type="date" name="dateofbirth" id="dateofbirth" v-mode="dob">
                <br/><br/>
                <MDBInput
                    type="text"
                    label="Building No./Street/Barangay"
                    v-model="street"
                    wrapperClass="mb-4"
                    required
                />
                <MDBRow id="HomeAddress">
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Municipality"
                            v-model="municipality"
                            wrapperClass="mb-4"
                            required
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Province"
                            v-model="province"
                            wrapperClass="mb-4"
                            required
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Country"
                            v-model="country"
                            wrapperClass="mb-4"
                            required
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Zip Code"
                            v-model="zipcode"
                            wrapperClass="mb-4"
                            required
                        />
                    </MDBCol>
                </MDBRow>
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
import { MDBContainer, MDBInput, MDBCheckbox, MDBRow, MDBCol, MDBBtn, MDBRadio, MDBSpinner } from "mdb-vue-ui-kit";

import { Registration } from '@/modules/registration/registration.ts'

export default defineComponent({
    name: "RegistrationForm",
    data(){
        return {
            username: "",
            password: "",
            email: "",
            firstname: "",
            middlename: "",
            lastname: "",
            gender: "",
            dob: "",
            street: "",
            municipality: "",
            province: "",
            country: "",
            zipcode: "",
            terms: false,
        }
    },
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
        async RegisterUser() {
            if (this.username == "" && this.password == "" && this.email == "" && this.firstname == "" && this.middlename == "" && this.lastname == "" && this.gender == "" && this.dob == "" && this.street == "" && this.municipality == "" && this.province == "" && this.country == "" && this.zipcode == ""){
                this.$swal({
                    title: "Please complete the form first before proceeding!",
                    confirmButtonText: "OK"
                })

                return;
            }

            if (this.terms == false){
                this.$swal({
                    title: "Please accept the Terms and Condition before proceeding!",
                    confirmButtonText: "OK"
                })

                return;
            }

            const data = {
                username: this.username,
                password: this.password,
                email: this.email,
                firstname: this.firstname,
                middlename: this.middlename,
                lastname: this.lastname,
                gender: this.gender,
                dob: this.dob,
                street: this.street,
                municipality: this.municipality,
                province: this.province,
                country: this.country,
                zipcode: this.zipcode
            }

            await this.Register(data)

            if (this.registerresponse.message == "success"){
                this.$swal({
                    title: "Successfully Registered! Do you want to proceed to login?",
                    showCancelButton: true,
                    confirmButtonText: "YES"
                }).then((result) => {
                    if (result.isConfirmed){
                        this.$router.push({name: "login"})
                    }
                    else{
                        this.username == ""
                        this.password == "" 
                        this.email == "" 
                        this.firstname == "" 
                        this.middlename == "" 
                        this.lastname == "" 
                        this.gender == "" 
                        this.dob == "" 
                        this.street == "" 
                        this.municipality == "" 
                        this.province == "" 
                        this.country == "" 
                        this.zipcode == ""
                    }
                })
            }
            else{
                this.$swal({
                    title: this.registerresponse.response,
                    confirmButtonText: "YES"
                })
            }
        }
    },
    setup() {
        const { registerresponse, registerprocessing, Register } = Registration()

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