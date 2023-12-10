<template>
    <MDBContainer fluid>
        <br/>
        <Dashboardbreadcrumbs data="DASHBOARD / PET MATCHER" />
        <br/>
        <MDBRow>
            <MDBCol col="3" style="max-height: 80vh; overflow-y: auto;">
                <center>
                    <strong>CUSTOM FILTER</strong>
                </center>
                <br/>
                <div class="text-center bg-light">
                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="breed">Select Location</label>
                            <select class="form-select cua-input-select-2" name="breed" id="breed" v-model="located"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Location</option>
                                <option value="any">Any</option>
                                <option v-for="locatedkey in locateddata" :key="locatedkey" :value="locatedkey">{{locatedkey}}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="text-center bg-light">
                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="breed">Select Pet Type <strong style="color: red;">*</strong></label>
                            <select class="form-select cua-input-select-2" name="breed" id="breed" v-model="type"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Pet Type</option>
                                <option value="any">Any</option>
                                <option v-for="typepetkey in typepet" :key="typepetkey" :value="typepetkey">{{typepetkey}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap" v-if="type == 'Dog'">
                        <div class="flex-grow-1 mb-3">
                            <label for="breed">Select Breed <strong style="color: red;">*</strong></label>
                            <select class="form-select cua-input-select-2" name="breed" id="breed" v-model="breed"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Breed Type</option>
                                <option value="any">Any</option>
                                <option v-for="breeddogkey in breedowneddogdata" :key="breeddogkey" :value="breeddogkey">{{breeddogkey}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap" v-else-if="type == 'Cat'">
                        <div class="flex-grow-1 mb-3">
                            <label for="breed">Select Breed <strong style="color: red;">*</strong></label>
                            <select class="form-select cua-input-select-2" name="breed" id="breed" v-model="breed"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Breed Type</option>
                                <option value="any">Any</option>
                                <option v-for="breedcatkey in breedownedcatdata" :key="breedcatkey" :value="breedcatkey">{{breedcatkey}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="age">Select Age Specification</label>
                            <select class="form-select cua-input-select-2" name="age" id="age" v-model="age"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Age Specification</option>
                                <option value="any">Any</option>
                                <option v-for="ageItem in agedata" :key="ageItem" :value="ageItem">{{ageItem}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="gender">Gender</label>
                            <select class="form-select cua-input-select-2" name="gender" id="gender" v-model="gender"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Gender</option>
                                <option value="any">Any</option>
                                <option v-for="genderItem in genderdata" :key="genderItem" :value="genderItem">{{genderItem}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="personality">Personality</label>
                            <select class="form-select cua-input-select-2" name="personality" id="personality" v-model="personality"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Personality</option>
                                <option value="any">Any</option>
                                <option v-for="personalityItem in personalitydata" :key="personalityItem" :value="personalityItem">{{personalityItem}}</option>
                            </select>
                        </div>
                    </div>

                    <MDBBtn color="primary" block class="mt-4" @click="CustomFilter()" :disabled="customfilteron || petsprocessing.petlistloading">
                        <MDBSpinner v-if="petsprocessing.petlistloading"></MDBSpinner>
                        <strong v-else>SEARCH BY CUSTOM FILTER</strong>
                    </MDBBtn>
                    <MDBBtn color="warning" block class="mt-4" @click="() => {
                        customfilteron = false
                        FilterPets()
                    }" :disabled="customfilteron == false ? true : false || petsprocessing.petlistloading">
                        <MDBSpinner v-if="petsprocessing.petlistloading"></MDBSpinner>
                        <strong v-else>CANCEL CUSTOM FILTER</strong>
                    </MDBBtn>
                    <br/><br/>
                </div>
            </MDBCol>
            <MDBCol style="max-height: 80vh; overflow-y: scroll;">
                <strong style="font-size:1.5vw">PET LIST</strong>
                <br/><br/>
                <MDBRow v-if="petsreponse.petlistresponse.length > 0">
                    <MDBCol col="4" v-for="petsItem in petsreponse.petlistresponse" :key="petsItem">
                        <MDBCard class="h-100">
                            <div>
                                <MDBSpinner v-if="petsprocessing.petlikeloading && likepetclicked == petsItem._id" style="position: absolute; padding-top: 10px; padding-left: 10px; color: #e45757" />
                                <MDBIcon v-else-if="petsItem.isLiked == true" icon="heart" style="position: absolute; padding-top: 10px; padding-left: 10px; color: #e45757" size="2x"/>
                                <MDBCardImg
                                    :src="GetImage(petsItem.picture)"
                                    top
                                    @click="() => {
                                        likepetclicked = petsItem._id

                                        if (petsprocessing.petlikeloading){
                                            likepetclicked = ''
                                            return;
                                        }
                                        petsItem.isLiked = !petsItem.isLiked
                                        LikeMyPet(petsItem._id)
                                    }"
                                />
                            </div>
                            <MDBCardBody>
                            <MDBCardTitle>{{ petsItem.name }}</MDBCardTitle>
                            <MDBCardText>
                                
                                
                                <strong>Breed: {{ petsItem.breed }}</strong>
                                <br/>
                                <strong>Gender: {{ petsItem.gender }}</strong>
                            </MDBCardText>
                                <MDBBtn color="primary" @click="() => {
                                    $router.push({name: 'petviewer', params: {
                                        petid: petsItem._id
                                    }})
                                }">View </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <strong v-else>NO PETS FOUND!</strong>
            </MDBCol>
        </MDBRow>
        
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBCard, MDBCardImg, MDBCardBody,
    MDBCardTitle, MDBCardText, MDBSpinner, MDBIcon, } from "mdb-vue-ui-kit";


import Dashboardbreadcrumbs from '@/components/Dashboard/Dashboardbreadcrumbs.vue';

import { Pets } from '@/modules/dashboard/user/pet'
import { GetItemKey } from '@/modules/globalfunction'

export default defineComponent({
    name: "MatcherHome",
    data(){
        return {
            located: "",
            type: "",
            breed: "",
            age: "",
            gender: "",
            personality: "",
            customfilteron: false,
            likepetclicked: "",
            locateddata:[
                "Quezon City",
                "Manila",
                "Marikina",
                "Mandaluyong",
                "San Juan",
                "Taguig",
                "Pasig"
            ],
            typepet:[
                "Dog",
                "Cat"
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
            agedata: [
                "Adult",
                "Young",
                "Senior"
            ],
            genderdata: [
                "Male",
                "Female"
            ],
            personalitydata: [
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
            ]
        }
    },
    components: {
        MDBRow,
        MDBCol,
        MDBContainer,
        MDBBtn,
        MDBCard,
        MDBCardImg,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        Dashboardbreadcrumbs,
        MDBSpinner,
        MDBIcon
    },
    methods: {
        async FilterPets(){
            const auth: any = await GetItemKey("auth")
            const authdata = JSON.parse(auth)

            await this.GetPetList(authdata._id)
        },
        GetImage(image: any){
            return new URL(`${import.meta.env.VITE_API_URL}/${image}`, import.meta.url).href
        },
        async CustomFilter(){
            this.customfilteron = true
            if (this.type != 'any' && this.type != ''){
                if (this.breed == ''){
                    this.$swal({
                        title: "Please select a breed first!",
                        confirmButtonText: "OK"
                    })
                    this.customfilteron = false
                    return
                }
            }

            if (this.type == ''){
                this.$swal({
                    title: "Please select a pet type",
                    confirmButtonText: "OK"
                })
                this.customfilteron = false
                return
            }
            const auth: any = await GetItemKey("auth")
            const authdata = JSON.parse(auth)

            const filter = {
                located: this.located,
                type: this.type,
                breed: this.breed,
                age: this.age,
                gender: this.gender,
                personality: this.personality,
                id: authdata._id
            }

            await this.GetPetCustomFilterList(filter)
        },
        async LikeMyPet(petid: any){
            
            const auth: any = await GetItemKey("auth")
            const authdata = JSON.parse(auth)
            
            await this.PetLike(petid, authdata._id)

            if (this.petsreponse.petlikemessage != "success"){
                this.$swal({
                    title: `There's a problem liking the pet! Error Code: ${this.petsreponse.petlikeresponse}`,
                    showCancelButton: true,
                    confirmButtonText: "Yes"
                })
            }
            this.likepetclicked = ""
        }
    },
    mounted(){
        this.FilterPets()
    },
    setup(){
        const { petsreponse, petsprocessing, GetPetList, GetPetCustomFilterList, PetLike } = Pets()

        return { petsreponse, petsprocessing, GetPetList, GetPetCustomFilterList, PetLike }
    }
})
</script>

<style>
.filter{
    width: 100%
}
.card-img-top {
    width: 100%;
    height: 20vw;
    object-fit: cover;
}
</style>