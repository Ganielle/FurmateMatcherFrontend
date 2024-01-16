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
                <MDBInput
                    type="text"
                    label="Contact Number"
                    v-model="contactnumber"
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
                <input type="date" name="dateofbirth" id="dateofbirth" v-model="dob">
                <br/><br/>
                <MDBInput
                    type="text"
                    label="Building No./Street/Barangay"
                    v-model="street"
                    wrapperClass="mb-4"
                    required
                />
                <MDBInput
                    type="text"
                    label="City"
                    v-model="municipality"
                    wrapperClass="mb-4"
                    required
                />
                <MDBCheckbox
                    label="By click this you're accepting the <a href='/termsandcondition'>Terms and Conditions</a>"
                    v-model="terms"
                    wrapperClass="d-flex mb-4"
                />
                <MDBRow>
                    <MDBCol>
                        <a href="/login" :disabled="registerprocessing.loading"><MDBBtn class="existing" color="info" block :disabled="registerprocessing.loading"> <MDBSpinner v-if="registerprocessing.loading" />
                        <strong v-else>Have an existing account?</strong> </MDBBtn></a>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn type="submit" class="signin" color="primary" @click="OpenUserPreference()" block :disabled="registerprocessing.loading">
                            <MDBSpinner v-if="registerprocessing.loading" />
                            <strong v-else>Sign up </strong>
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </form>
        </div>

        <MDBModal
            tabindex="-1"
            v-model="userpreference"
            staticBackdrop
        >
            <MDBModalHeader>
                <MDBModalTitle id="exampleModalLabel"> User Preference </MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
                <form @submit.prevent>
                    
                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <select class="form-select cua-input-select-2" name="role" v-model="location"
                                style="background-color: white; color: black; font-size: 0.9em;">
                                <option value="">Location</option>
                                <option v-for="locationkey in locationdata" :key="locationkey" :value="locationkey">{{ locationkey }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <select class="form-select cua-input-select-2" name="role" v-model="typeofhome"
                                style="background-color: white; color: black; font-size: 0.9em;">
                                <option value="">Choose Type of Home</option>
                                <option v-for="typehome in typeofhomedata" :key="typehome" :value="typehome">{{ typehome }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <select class="form-select cua-input-select-2" name="role" v-model="aloneothers"
                                style="background-color: white; color: black; font-size: 0.9em;">
                                <option value="">Do you live alone or with others?</option>
                                <option v-for="alone in aloneothersdata" :key="alone" :value="alone">{{ alone }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <select class="form-select cua-input-select-2" name="role" v-model="ownershipstatus"
                                style="background-color: white; color: black; font-size: 0.9em;">
                                <option value="">What is your current pet ownership status?</option>
                                <option v-for="ownership in ownershipstatusdata" :key="ownership" :value="ownership">{{ ownership }}</option>
                            </select>
                        </div>
                    </div>
                    What type(s) and breed of pets have you previously/currently owned? (Select all that apply)
                    <br/>
                    <strong>CAT:</strong>
                    <div v-for="cat in breedownedcatdata" :key="cat">
                        <label class="container no-center-text">
                            <span class="checkmark"></span>
                            <input type="checkbox"
                                :value="cat"
                                :id="cat"
                                v-model="breedowned"
                                :name="cat"
                                checked>&nbsp;
                                <strong>{{ cat }}</strong>
                        </label>
                    </div>
                    <strong>DOG:</strong>
                    <div v-for="dog in breedowneddogdata" :key="dog">
                        
                        <label class="container no-center-text">
                            <span class="checkmark"></span>
                            <input type="checkbox"
                                :value="dog"
                                :id="dog"
                                v-model="breedowned"
                                :name="dog"
                                checked>&nbsp;
                                <strong>{{ dog }}</strong>
                        </label>
                    </div>
                    <br/>
                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <select class="form-select cua-input-select-2" name="role" v-model="petshave"
                                style="background-color: white; color: black; font-size: 0.9em;">
                                <option value="">How many pets do you have currently?</option>
                                <option v-for="pets in petsowneddata" :key="pets" :value="pets">{{ pets }}</option>
                            </select>
                        </div>
                    </div>

                    <MDBBtn block color="primary" @click="() => {
                        if (location == '' || typeofhome == '' || aloneothers == '' || ownershipstatus == '' ||
                        breedowned.length <= 0 || petshave == ''){
                            //@ts-ignore
                            $swal({
                                title: 'Please complete the form first before proceeding!',
                                confirmButtonText: 'OK'
                            })

                            return;
                        }
                        userpreference = false
                        petpreference = true
                    }">NEXT</MDBBtn>
                </form>
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" @click="() => userpreference = false">Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>

        <MDBModal
            tabindex="-1"
            v-model="petpreference"
            staticBackdrop
        >
            <MDBModalHeader>
                <MDBModalTitle id="exampleModalLabel"> Pet Preference </MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
                <form @submit.prevent>
                    
                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <select class="form-select cua-input-select-2" name="role" v-model="located"
                                style="background-color: white; color: black; font-size: 0.9em;">
                                <option value="">Where are you located? (Metro Manila Municipality only)</option>
                                <option v-for="locatedkey in locateddata" :key="locatedkey" :value="locatedkey">{{ locatedkey }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <select class="form-select cua-input-select-2" name="role" v-model="typepet"
                                style="background-color: white; color: black; font-size: 0.9em;">
                                <option value="">What type of pet are you looking for?</option>
                                <option v-for="typepetkey in typepetdata" :key="typepetkey" :value="typepetkey">{{ typepetkey }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <select class="form-select cua-input-select-2" name="role" v-model="genderpet"
                                style="background-color: white; color: black; font-size: 0.9em;">
                                <option value="">What gender of pet are you looking for?</option>
                                <option v-for="genderpetkey in genderpetdata" :key="genderpetkey" :value="genderpetkey">{{ genderpetkey }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <select class="form-select cua-input-select-2" name="role" v-model="agepet"
                                style="background-color: white; color: black; font-size: 0.9em;">
                                <option value="">What is your ideal age for a pet?</option>
                                <option v-for="agepetkey in agepetdata" :key="agepetkey" :value="agepetkey">{{ agepetkey }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <select class="form-select cua-input-select-2" name="role" v-model="specialdogs"
                                style="background-color: white; color: black; font-size: 0.9em;">
                                <option value="">Are you willing to adopt a pet with special needs?</option>
                                <option v-for="specialdogskey in specialdogsdata" :key="specialdogskey" :value="specialdogskey">{{ specialdogskey }}</option>
                            </select>
                        </div>
                    </div>
                    What breed of pet are you looking for?
                    <br/>
                    <div v-if="typepet == 'Cat'">
                        <strong>CAT:</strong>
                        <div v-for="cat in breedpetcatdata" :key="cat">
                            <label class="container no-center-text">
                                <input type="checkbox"
                                    :value="cat"
                                    :id="cat"
                                    v-model="breedpet"
                                    :name="cat"
                                    checked>
                                <span class="checkmark"></span>&nbsp;
                                <strong>{{ cat }}</strong>
                            </label>
                        </div>
                    </div>
                    <div v-if="typepet == 'Dog'">
                        <strong>DOG:</strong>
                        <div v-for="dog in breedpetdogdata" :key="dog">
                            <label class="container no-center-text">
                                <input type="checkbox"
                                    :value="dog"
                                    :id="dog"
                                    v-model="breedpet"
                                    :name="dog"
                                    checked>
                                <span class="checkmark"></span>&nbsp;
                                <strong>{{ dog }}</strong>
                            </label>
                        </div>
                    </div>
                    <strong v-else>PLEASE SELECT A TYPE OF PET FIRST! <br/></strong>
                    <br/>
                    What kind of pet personality traits do you prefer?
                    <br/>
                    <div v-for="personality in personalitytraitsdata" :key="personality">
                        <label class="container no-center-text">
                            <input type="checkbox"
                                :value="personality"
                                :id="personality"
                                v-model="personalitytraits"
                                :name="personality"
                                checked>
                            <span class="checkmark"></span>&nbsp;
                            <strong>{{ personality }}</strong>
                        </label>
                    </div>
                    <br/>
                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <select class="form-select cua-input-select-2" name="role" v-model="petmaintenance"
                                style="background-color: white; color: black; font-size: 0.9em;">
                                <option value="">Are you comfortable with the responsibility of maintaining a pet's medical records and administering any required medications?</option>
                                <option v-for="maintenance in petmaintenancedata" :key="maintenance" :value="maintenance">{{ maintenance }}</option>
                            </select>
                        </div>
                    </div>
                    <MDBRow>
                        <MDBCol>
                            <MDBBtn color="primary" block @click="() => {
                                userpreference = true
                                petpreference = false
                            }" :disabled="registerprocessing.loading">
                                <MDBSpinner v-if="registerprocessing.loading" />
                                <strong v-else>BACK</strong>
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn block color="primary" @click="() => {
                                if (located == '' || typepet == '' || genderpet == '' || agepet == '' || specialdogs == '' || breedpet.length <= 0 || personalitytraits.length <= 0 || petmaintenance == ''){
                                    //@ts-ignore
                                    $swal({
                                        title: 'Please complete the form first before proceeding!',
                                        confirmButtonText: 'OK'
                                    })

                                    return;
                                }
                                RegisterUser()
                            }" :disabled="registerprocessing.loading">
                                <MDBSpinner v-if="registerprocessing.loading" />
                                <strong v-else>FINISH SIGN UP</strong>
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" @click="() => petpreference = false" :disabled="registerprocessing.loading"><MDBSpinner v-if="registerprocessing.loading" />
                                <strong v-else>CLOSE</strong></MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MDBContainer, MDBInput, MDBCheckbox, MDBRow, MDBCol, MDBBtn, MDBRadio, MDBSpinner,
    MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBModalTitle } from "mdb-vue-ui-kit";

import { Registration } from '@/modules/registration/registration'

export default defineComponent({
    name: "RegistrationForm",
    data(){
        return {
            username: "",
            password: "",
            email: "",
            contactnumber: "",
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
            location: "",
            typeofhome: "",
            aloneothers: "",
            ownershipstatus: "",
            breedowned: [],
            petshave: "",
            located: "",
            typepet: "",
            genderpet: "",
            agepet: "",
            specialdogs: "",
            breedpet: [],
            personalitytraits: [],
            petmaintenance: "",
            userpreference: false,
            petpreference: false,
            locationdata: [
                "Caloocan",
                "Malabon",
                "Navotas",
                "Valenzuela",
                "Quezon City",
                "Marikina",
                "Pasig",
                "Taguig",
                "Makati",
                "Manila",
                "Mandaluyong",
                "San Juan",
                "Pasay",
                "Parañaque",
                "Las Piñas",
                "Muntinlupa"
            ],
            typeofhomedata: [
                "Apartment",
                "Bungalow",
                "Condominium (Condo)",
                "Mansion",
                "Multi-Family Home",
                "Single-Family Home",
                "Tiny House",
                "Town House"
            ],
            aloneothersdata: [
                "Yes, I live alone",
                "No, I live with other people"
            ],
            ownershipstatusdata: [
                "First-time",
                "Previous",
                "Current"
            ],
            breedownedcatdata: [
                "Puspin",
                "Siamese",
                "Persian",
                "Maine Coon",
                "Ragdoll",
                "British Shorthair",
                "Scottish Fold",
                "Bengal",
                "Russian Blue",
                "Burmese"
            ],
            breedowneddogdata: [
                "Aspin",
                "Shih Tzu",
                "Pomeranian",
                "Dachshund",
                "Golden Retriever",
                "Labrador Retriever",
                "Chihuahua",
                "Siberian Husky",
                "Belgian Malinois"
            ],
            petsowneddata:[
                "0",
                "1-3",
                "4-7",
                "7-10",
                "More than 10"
            ],
            locateddata:[
                "Quezon City",
                "Manila",
                "Marikina",
                "Mandaluyong",
                "San Juan",
                "Taguig",
                "Pasig"
            ],
            typepetdata:[
                "Dog",
                "Cat"
            ],
            genderpetdata: [
                "Female",
                "Male",
            ],
            agepetdata: [
                "Young",
                "Adult",
                "Senior"
            ],
            specialdogsdata: [
                "Yes",
                "No"
            ],
            breedpetcatdata: [
                "Puspin",
                "Siamese",
                "Persian",
                "Maine Coon",
                "Ragdoll",
                "British Shorthair",
                "Scottish Fold",
                "Bengal",
                "Russian Blue",
                "Burmese"
            ],
            breedpetdogdata: [
                "Aspin",
                "Shih Tzu",
                "Pomeranian",
                "Dachshund",
                "Golden Retriever",
                "Labrador Retriever",
                "Chihuahua",
                "Siberian Husky",
                "Belgian Malinois"
            ],
            personalitytraitsdata: [
                "Friendly",
                "Playful",
                "Loyal",
                "Independent",
                "Energetic",
                "Calm",
                "Affectionate",
                "Intelligent",
                "Protective",
                "Adventurous",
                "Shy",
                "Social",
                "Aggressive",
                "Curious",
                "Cuddly"
            ],
            petmaintenancedata:[
                "Yes",
                "No"
            ]
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
        MDBSpinner,
        MDBModal,
        MDBModalHeader,
        MDBModalBody,
        MDBModalFooter,
        MDBModalTitle
    },
    methods: {
        OpenUserPreference(){
            if (this.username == "" || this.password == "" || this.email == "" || this.firstname == "" || this.lastname == "" || this.gender == "" || this.dob == "" || this.street == "" || this.municipality == ""){
                //@ts-ignore
                this.$swal({
                    title: "Please complete the form first before proceeding!",
                    confirmButtonText: "OK"
                })
                

                return;
            }

            this.userpreference = true
        },
        async RegisterUser() {
            if (this.username == "" || this.password == "" || this.email == "" || this.firstname == "" || this.lastname == "" || this.gender == "" || this.dob == "" || this.street == "" || this.municipality == ""){
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
                username: this.username,
                password: this.password,
                email: this.email,
                contactnumber: this.contactnumber,
                firstname: this.firstname,
                middlename: this.middlename,
                lastname: this.lastname,
                gender: this.gender,
                dob: this.dob,
                street: this.street,
                municipality: this.municipality,
                province: this.province,
                country: this.country,
                zipcode: this.zipcode,
                location: this.location,
                typeofhome: this.typeofhome,
                aloneothers: this.aloneothers,
                ownershipstatus: this.ownershipstatus,
                breedowned: this.breedowned,
                petshave: this.petshave,
                located: this.located,
                typepet: this.typepet,
                genderpet: this.genderpet,
                agepet: this.agepet,
                specialdogs: this.specialdogs,
                breedpet: this.breedpet,
                personalitytraits: this.personalitytraits,
                petmaintenance: this.petmaintenance
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
                //@ts-ignore
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