<template>
    <MDBContainer fluid>
        <br/>
        <Dashboardbreadcrumbs data="DASHBOARD / USER PROFILE" />
        <br/>
        <center>
            <h2>USER PROFILE</h2>
        </center>
        <MDBRow>
            <MDBCol col="3">
                <img
                    :src="user"
                    class="img-thumbnail"
                    alt="..."
                    style="width: 100%"
                />
                <br/><br/>
                <MDBFile v-model="file" label="Change Profile Picture" />
                <br/>
                <MDBBtn block color="primary" :disabled="file.length <= 0">SAVE CHANGES</MDBBtn>
                <br/><br/>
            </MDBCol>
            <MDBCol>
                <MDBInput
                    type="text"
                    label="Full Name"
                    v-model="fullname"
                    wrapperClass="mb-4"
                    disabled
                />
                <MDBInput
                    type="text"
                    label="Birthday"
                    v-model="fullname"
                    wrapperClass="mb-4"
                    disabled
                />
                <MDBInput
                    type="text"
                    label="Email"
                    v-model="fullname"
                    wrapperClass="mb-4"
                    disabled
                />
                <MDBInput
                    type="text"
                    label="Contact Number"
                    v-model="fullname"
                    wrapperClass="mb-4"
                    disabled
                />
                <MDBInput
                    type="text"
                    label="Gender"
                    v-model="fullname"
                    wrapperClass="mb-4"
                    disabled
                />
                <MDBInput
                    type="text"
                    label="Address (Municipality)"
                    v-model="fullname"
                    wrapperClass="mb-4"
                    disabled
                />
            </MDBCol>
        </MDBRow>

        <br/>

        <MDBRow>
            <MDBCol>
                <strong class="text-center">USER PREFERENCES</strong>
                <br/><br/>
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
                        <label class="container no-center-text"><strong>{{ cat }}</strong>
                            <input type="checkbox"
                                :value="cat"
                                :id="cat"
                                v-model="breedowned"
                                :name="cat"
                                checked>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <strong>DOG:</strong>
                    <div v-for="dog in breedowneddogdata" :key="dog">
                        <label class="container no-center-text"><strong>{{ dog }}</strong>
                            <input type="checkbox"
                                :value="dog"
                                :id="dog"
                                v-model="breedowned"
                                :name="dog"
                                checked>
                            <span class="checkmark"></span>
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
                </form>
            </MDBCol>
            <MDBCol>
                <strong class="text-center">PET PREFERENCES</strong>
                <br/><br/>
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
                    <strong>CAT:</strong>
                    <div v-for="cat in breedpetcatdata" :key="cat">
                        <label class="container no-center-text"><strong>{{ cat }}</strong>
                            <input type="checkbox"
                                :value="cat"
                                :id="cat"
                                v-model="breedpet"
                                :name="cat"
                                checked>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <strong>DOG:</strong>
                    <div v-for="dog in breedpetdogdata" :key="dog">
                        <label class="container no-center-text"><strong>{{ dog }}</strong>
                            <input type="checkbox"
                                :value="dog"
                                :id="dog"
                                v-model="breedpet"
                                :name="dog"
                                checked>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <br/>
                    What kind of pet personality traits do you prefer?
                    <br/>
                    <div v-for="personality in personalitytraitsdata" :key="personality">
                        <label class="container no-center-text"><strong>{{ personality }}</strong>
                            <input type="checkbox"
                                :value="personality"
                                :id="personality"
                                v-model="personalitytraits"
                                :name="personality"
                                checked>
                            <span class="checkmark"></span>
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
                </form>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBRow, MDBCol, MDBContainer, MDBInput, MDBFile, MDBBtn } from "mdb-vue-ui-kit";

import Dashboardbreadcrumbs from '@/components/Dashboard/Dashboardbreadcrumbs.vue';

import user from '@/assets/Dashboard/User/Profile/user.png'

export default defineComponent({
    name: "UserProfile",
    data(){
        return {
            user,
            fullname: "",
            dob: "",
            email: "",
            gender: "",
            contact: "",
            address: "",
            file: [],
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
        MDBRow,
        MDBCol,
        MDBContainer,
        MDBFile,
        MDBInput,
        MDBBtn,
        Dashboardbreadcrumbs
    }
})
</script>