
import type { log } from 'console';

import type { onMounted } from 'vue';
<template>
    <MDBContainer fluid>
        <br/>
        <Dashboardbreadcrumbs data="DASHBOARD / PET MATCHER" />
        <br/>
        <MDBRow>
            <MDBCol col="3" style="max-height: 80vh; overflow-y: scroll;">
                <center>
                    <strong>CUSTOM FILTER</strong>
                </center>
                <br/>
                <div class="text-center bg-light">
                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="breed">Select Breed</label>
                            <select class="form-select cua-input-select-2" name="breed" id="breed" v-model="selectedBreeds"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Breed Type</option>
                                <option v-for="breedItem in breeds" :key="breedItem" :value="breedItem">{{breedItem}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="age">Select Age Specification</label>
                            <select class="form-select cua-input-select-2" name="age" id="age" v-model="selectedAge"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Age Specification</option>
                                <option v-for="ageItem in age" :key="ageItem" :value="ageItem">{{ageItem}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="gender">Gender</label>
                            <select class="form-select cua-input-select-2" name="gender" id="gender" v-model="selectedGender"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Gender</option>
                                <option v-for="genderItem in gender" :key="genderItem" :value="genderItem">{{genderItem}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="size">Size</label>
                            <select class="form-select cua-input-select-2" name="size" id="size" v-model="selectedSize"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Size</option>
                                <option v-for="sizeItem in size" :key="sizeItem" :value="sizeItem">{{sizeItem}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="color">Color</label>
                            <select class="form-select cua-input-select-2" name="color" id="color" v-model="selectedColor"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Color</option>
                                <option v-for="colorItem in color" :key="colorItem" :value="colorItem">{{colorItem}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="coat">Coat Length</label>
                            <select class="form-select cua-input-select-2" name="coat" id="coat" v-model="selectedCoatLength"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Coat Length</option>
                                <option v-for="coatItem in coatlength" :key="coatItem" :value="coatItem">{{coatItem}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="good">Good with</label>
                            <select class="form-select cua-input-select-2" name="good" id="good" v-model="selectedGoodWith"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Good With</option>
                                <option v-for="goodItem in goodwith" :key="goodItem" :value="goodItem">{{goodItem}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="personality">Personality</label>
                            <select class="form-select cua-input-select-2" name="personality" id="personality" v-model="selectedPersonality"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Personality</option>
                                <option v-for="personalityItem in personality" :key="personalityItem" :value="personalityItem">{{personalityItem}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap ">
                        <div class="flex-grow-1 mb-3">
                            <label for="carebehaviour">Care & Behaviour</label>
                            <select class="form-select cua-input-select-2" name="carebehaviour" id="carebehaviour" v-model="selectedCareBehaviour"
                                style="background-color: rgb(255, 255, 255); font-size: 0.9em;">
                                <option value="">Choose Care & Behaviour</option>
                                <option v-for="carebehaviourItem in carebehaviour" :key="carebehaviourItem" :value="carebehaviourItem">{{carebehaviourItem}}</option>
                            </select>
                        </div>
                    </div>

                    <MDBBtn color="primary" block class="mt-4" @click="FilterPets()">SEARCH BY FILTER</MDBBtn>
                </div>
            </MDBCol>
            <MDBCol style="max-height: 80vh; overflow-y: scroll;">
                <strong style="font-size:1.5vw">PET LIST</strong>
                <br/><br/>
                <MDBRow>
                    <MDBCol col="6" v-for="petsItem in filteredPets" :key="petsItem.Name">
                        <MDBCard  style="height: 100%">
                            <MDBCardImg
                                :src="petsItem.image"
                                top
                            />
                            <MDBCardBody>
                            <MDBCardTitle>{{ petsItem.Name }}</MDBCardTitle>
                            <MDBCardText>
                                <strong>Breed: {{ petsItem.Breed }}</strong>
                                <br/>
                                <strong>Age: {{ petsItem.AgeSpecification }}</strong>
                                <br/>
                                <strong>Gender: {{ petsItem.Gender }}</strong>
                                <br/>
                                <strong>Size: {{ petsItem.Size }}</strong>
                                <br/>
                                <strong>Color: {{ petsItem.Color }}</strong>
                                <br/>
                                <strong>Coat Length: {{ petsItem.CoatLength }}</strong>
                                <br/>
                                <strong>Good With: {{ petsItem.Goowith }}</strong>
                                <br/>
                                <strong>Personality: {{ petsItem.Personality }}</strong>
                                <br/>
                                <strong>Care & Behaviour: {{ petsItem.CareBehaviour }}</strong>
                            </MDBCardText>
                                <MDBBtn color="primary">View </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
        
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBCard, MDBCardImg, MDBCardBody,
    MDBCardTitle, MDBCardText, } from "mdb-vue-ui-kit";


import Dashboardbreadcrumbs from '@/components/Dashboard/Dashboardbreadcrumbs.vue';
import briana from '@/assets/Dashboard/User/Pets/Briana.jpg'
import browny from '@/assets/Dashboard/User/Pets/Browny.jpg'
import hachi from '@/assets/Dashboard/User/Pets/Hachi.jpg'
import joker from '@/assets/Dashboard/User/Pets/Joker.jpg'
import puti from '@/assets/Dashboard/User/Pets/Puti.jpg'

export default defineComponent({
    name: "MatcherHome",
    data(){
        return {
            selectedBreeds: "",
            selectedAge: "",
            selectedGender: "",
            selectedSize: "",
            selectedColor: "",
            selectedCoatLength: "",
            selectedGoodWith: "",
            selectedPersonality: "",
            selectedCareBehaviour: "",
            breeds: [
                "Aspin",
                "Shih Tzu",
                "Shih Tzu Mix",
                "Pomeranian",
                "Pomeranian Mix",
                "Chihuahua",
                "Chihuahua Mix",
                "Dachshund",
                "Dachshund Mix",
                "Golden Retriever",
                "Golden Retriever Mix",
                "Labrador Retriever",
                "Labrador Retriever Mix",
                "Terrier",
                "Terrier Mix",
                "Siberian Husky",
                "Siberian Husky Mix"
            ],
            age: [
                "Adult",
                "Young",
                "Senior"
            ],
            gender: [
                "Male",
                "Female"
            ],
            size: [
                "Small",
                "Medium",
                "Large",
                "Extra Large"
            ],
            color: [
                "Black",
                "Gray",
                "White",
                "Orange",
                "Cream",
                "Black & White / Tuxedo",
                "Brown / Chocolate",
                "Calico",
                "Dilute Calico",
                "Gray & White",
                "Gray / Blue / Silver",
                "Orange & White",
                "Orange / Red",
                "Tabby Brown / Chocolate",
                "Tabby Gray",
                "Tabby Orange"
            ],
            coatlength: [
                "Hairless",
                "Short",
                "Medium",
                "Long"
            ],
            goodwith: [
                "Dogs",
                "Cats",
                "Kids"
            ],
            personality: [
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
                "Cuddly",
                "Stubbord",
                "Territorial",
                "Hunter",
                "Fearful",
                "Sweet",
                "Mischievous",
                "Grumpy"
            ],
            carebehaviour: [
                "House-trained",
                "Declawed",
                "Special Needs",
                "Outdoor trained"
            ],
            pets:[
                {
                    Name: "Briana",
                    Breed: "Aspin",
                    AgeSpecification: "Adult",
                    Gender: "Female",
                    Size: "Medium",
                    Color: "Black",
                    CoatLength: "Short",
                    Goowith: "Any",
                    Personality: "Friendly",
                    CareBehaviour: "House-trained",
                    image: briana
                },
                {
                    Name: "Browny",
                    Breed: "Aspin",
                    AgeSpecification: "Adult",
                    Gender: "Male",
                    Size: "Large",
                    Color: "Brown / Chocolate",
                    CoatLength: "Short",
                    Goowith: "Any",
                    Personality: "Affectionate",
                    CareBehaviour: "House-trained",
                    image: browny
                },
                {
                    Name: "Puti",
                    Breed: "Aspin",
                    AgeSpecification: "Young",
                    Gender: "Male",
                    Size: "Medium",
                    Color: "White",
                    CoatLength: "Short",
                    Goowith: "Dogs",
                    Personality: "Calm",
                    CareBehaviour: "Outdoor trained",
                    image: puti
                },
                {
                    Name: "Joker",
                    Breed: "Aspin",
                    AgeSpecification: "Young",
                    Gender: "Male",
                    Size: "Medium",
                    Color: "Brown / Chocolate",
                    CoatLength: "Short",
                    Goowith: "Dogs",
                    Personality: "Adventurous",
                    CareBehaviour: "Outdoor trained",
                    image: joker
                },
                {
                    Name: "Hachi",
                    Breed: "Golden Retriever Mix",
                    AgeSpecification: "Adult",
                    Gender: "Female",
                    Size: "Large",
                    Color: "Golden",
                    CoatLength: "Medium",
                    Goowith: "Kids",
                    Personality: "Playful",
                    CareBehaviour: "House-trained",
                    image: hachi
                }
            ],
            filteredPets: []
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
        Dashboardbreadcrumbs
    },
    methods: {
        FilterPets(){
            this.filteredPets = this.pets.filter((pet) => {
                return (
                (this.selectedBreeds === "" || pet.Breed === this.selectedBreeds) &&
                (this.selectedAge === "" || pet.AgeSpecification === this.selectedAge) &&
                (this.selectedGender === "" || pet.Gender === this.selectedGender) &&
                (this.selectedSize === "" || pet.Size === this.selectedSize) &&
                (this.selectedColor === "" || pet.Color === this.selectedColor) &&
                (this.selectedCoatLength === "" || pet.CoatLength === this.selectedCoatLength) &&
                (this.selectedGoodWith === "" || pet.Goowith === this.selectedGoodWith) &&
                (this.selectedPersonality === "" || pet.Personality === this.selectedPersonality) &&
                (this.selectedCareBehaviour === "" || pet.CareBehaviour === this.selectedCareBehaviour)
                );
            });
        }
    },
    mounted(){
        this.FilterPets()
    }
})
</script>

<style>
.filter{
    width: 100%
}
</style>