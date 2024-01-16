<template>
    <MDBContainer>
        <br/>
        <Dashboardbreadcrumbs data="PETS MANAGEMENT" />
        <br/>
        <div class="px-0 mb-3 d-flex align-items-center justify-content-center">
            <button class="tc-pager" role="button"
                :class="{'tc-page-disable': petspagination.page <= 0}"
                :disabled="petspagination.page <= 0" 
                @click="() => {
                    petspagination.page -= 1
                    ListPets()
                }">
                <MDBIcon
                    fas
                    icon="chevron-left"
                    class="text-primary"
                    style="color: white !important"
                />
            </button>
            <div class="tc-page">{{ petspagination.page + 1 }}</div>
            <button class="tc-pager" role="button"
                :class="{'tc-page-disable': petspagination.page >= petspagination.totalPages - 1}"
                :disabled=" petspagination.page >= petspagination.totalPages - 1"
                @click="() => {
                    petspagination.page += 1
                    ListPets()
                }">
                <MDBIcon
                    fas
                    icon="chevron-right"
                    class="text-primary"
                    style="color: white !important"
                />
            </button>
        </div>

        <br/>
        <MDBBtn style=" background-color: purple;" color="primary" @click="addpetmodal = true">ADD PET</MDBBtn>
        <br/>
        <br/>
        <MDBTable responsive class="align-middle mb-0 bg-white text-center">
            <thead class="table-warning">
                <tr>
                    <th scope="col">
                        PET NAME
                    </th>
                    <th scope="col">
                        PET TYPE
                    </th>
                    <th scope="col">
                        PET BREED
                    </th>
                    <th scope="col">
                        ACTIONS
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="petsprocessing.petlistloading">
                    <td colspan="4">
                        <MDBSpinner></MDBSpinner>
                    </td>
                </tr>
                <tr v-else-if="petsreponse.petlistresponse == '' || petsreponse.petlistresponse.length <= 0">
                    <td colspan="4">No Data Yet!</td>
                </tr>
                <tr v-else v-for="data in petsreponse.petlistresponse" :key="data">
                    <th scope="row" class="text-center" style="color: black">
                        {{ data.name }}
                    </th>
                    <th class="text-center" style="color: black">
                        {{ data.type }}
                    </th>
                    <th class="text-center" style="color: black">
                        {{ data.breed }}
                    </th>
                    <th class="text-center">
                        <MDBRow>
                            <MDBCol>
                                <MDBBtn block color="primary" @click="() => {
                                    petname = data.name
                                    description = data.description
                                    type = data.type
                                    gender = data.gender
                                    breed = data.breed
                                    age = data.age
                                    personality = data.personalitytraits
                                    special = data.special
                                    maintenance = data.maintenance
                                    located = data.located
                                    picture = data.picture

                                    viewpetmodal = true
                                }">DETAILS</MDBBtn>
                            </MDBCol>
                            <MDBCol>
                                <MDBBtn block color="primary" @click="() => {
                                    petname = data.name
                                    description = data.description
                                    type = data.type
                                    gender = data.gender
                                    breed = data.breed
                                    age = data.age
                                    personality = data.personalitytraits
                                    special = data.special
                                    maintenance = data.maintenance
                                    located = data.located
                                    userpetid = data._id

                                    updatemodal = true
                                }">EDIT</MDBBtn>
                            </MDBCol>
                            <MDBCol>
                                <MDBBtn block color="primary" @click="() => {
                                    this.$swal({
                                        title: `Are you sure you want to remove this pet?`,
                                        confirmButtonText: 'Yes',
                                        showCancelButton: true
                                    }).then((result) => {
                                        if (result.isConfirmed){
                                            RemovePet(data._id)
                                        }
                                    })
                                }" :disabled="petsprocessing.petremoveloading"
                                >
                                    <MDBSpinner v-if="petsprocessing.petremoveloading"></MDBSpinner>
                                    <strong v-else>DELETE</strong>
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </th>
                </tr>
            </tbody>
        </MDBTable>
    </MDBContainer>

    <MDBModal v-model="addpetmodal" staticBackdrop>
        <MDBModalHeader>
            <MDBModalTitle>ADD PET</MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <form @submit.prevent>
                <MDBInput 
                    type="text"
                    label="Pet Name"
                    v-model="petname"
                    wrapperClass="mb-4"
                    required
                />

                <MDBTextarea label="Pet Description" rows="4" v-model="description" />
                <br/>
                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                    <label for="breed">What is your Pet Type?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="type"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">What is your Pet Type?</option>
                            <option v-for="typekey in typepetdata" :key="typekey" :value="typekey">{{ typekey }}</option>
                        </select>
                    </div>
                </div>

                <div class="d-flex flex-wrap " v-if="type == 'Dog'">
                    <div class="flex-grow-1 mb-3">
                        <label for="breed">What is your Pet Breed?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="breed"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">What is your pet breed?</option>
                            <option v-for="breeddogkey in breedpetdogdata" :key="breeddogkey" :value="breeddogkey">{{ breeddogkey }}</option>
                        </select>
                    </div>
                </div>  
                <div class="d-flex flex-wrap " v-else-if="type == 'Cat'">
                    <div class="flex-grow-1 mb-3">
                        <label for="breed">What is your Pet Breed?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="breed"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">What is your pet breed?</option>
                            <option v-for="breedcatkey in breedpetcatdata" :key="breedcatkey" :value="breedcatkey">{{ breedcatkey }}</option>
                        </select>
                    </div>
                </div>



                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                    <label for="gender">What is your Pet Gender?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="gender"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">What is your pet gender?</option>
                            <option v-for="genderkey in genderpetdata" :key="genderkey" :value="genderkey">{{ genderkey }}</option>
                        </select>
                    </div>
                </div>

                

                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                        <label for="age">What is your Pet Age?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="age"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">What is your pet age?</option>
                            <option v-for="agekey in agepetdata" :key="agekey" :value="agekey">{{ agekey }}</option>
                        </select>
                    </div>
                </div>

                What is your pet personality traits? (Please select at lease one)
                <div v-for="personalitykey in personalitytraitsdata" :key="personalitykey">
                    <label class="container no-center-text">
                        <input type="checkbox"
                            :value="personalitykey"
                            :id="personalitykey"
                            v-model="personality"
                            :name="personalitykey"
                            checked>&nbsp;
                        <span class="checkmark"></span><strong>{{ personalitykey }}</strong>
                    </label>
                </div>
                <br/>
                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                        <label>Is your pet a special pet?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="special"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">Is your pet a special pet?</option>
                            <option v-for="specialkey in specialdata" :key="specialkey" :value="specialkey">{{ specialkey }}</option>
                        </select>
                    </div>
                </div>

                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                        <label>Does your pet have a maintenance?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="maintenance"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">Does your pet have a maintenance?</option>
                            <option v-for="maintenancekey in petmaintenancedata" :key="maintenancekey" :value="maintenancekey">{{ maintenancekey }}</option>
                        </select>
                    </div>
                </div>

                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                    <label>Where does your pet located?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="located"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">Where is your pet located?</option>
                            <option v-for="locatedkey in locateddata" :key="locatedkey" :value="locatedkey">{{ locatedkey }}</option>
                        </select>
                    </div>
                </div>

                <MDBFile v-model="file" />
                <br/>
                <MDBBtn color="primary" block @click="() => {
                    if (petname == '' || type == '' || gender == '' || breed == '' || age == '' || personality.length <= 0 || maintenance == '' || located == '' || file.length <= 0){
                        $swal({
                            title: 'Please complete the form first before proceeding!',
                            confirmButtonText: 'OK'
                        })

                        return;
                    }

                    SavePet()
                }" :disabled="petsprocessing.petaddloading">
                    <MDBSpinner v-if="petsprocessing.petaddloading"></MDBSpinner>
                    <strong v-else>SAVE PET DATA</strong>
                </MDBBtn>
            </form>
        </MDBModalBody>
        <MDBModalFooter>
            <MDBBtn color="warning" @click="() => {
                petname = ''
                type = ''
                gender = ''
                breed = ''
                age = ''
                personality = []
                description = ''
                maintenance = ''
                located = ''
                file = []
                addpetmodal = false
            }" :disabled="petsprocessing.petaddloading">CLOSE</MDBBtn>
        </MDBModalFooter>
    </MDBModal>

    <MDBModal v-model="viewpetmodal" staticBackdrop>
        <MDBModalHeader>
            <MDBModalTitle>VIEW PET DETAILS</MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <form @submit.prevent>
                <center>
                    <img
                        :src="GetImage(picture)"
                        class="img-thumbnail"
                        alt="..."
                        height="20"
                    />
                </center>
                <br/>
                <MDBInput 
                    type="text"
                    label="Pet Name"
                    v-model="petname"
                    wrapperClass="mb-4"
                    disabled
                />

                <MDBTextarea label="Pet Description" rows="4" v-model="description" disabled/>
                <br/>
                <MDBInput 
                    type="text"
                    label="What is your pet type?"
                    v-model="type"
                    wrapperClass="mb-4"
                    disabled
                />

                <MDBInput 
                    type="text"
                    label="What is your pet gender?"
                    v-model="gender"
                    wrapperClass="mb-4"
                    disabled
                />

                <MDBInput 
                    type="text"
                    label="What is your pet breed?"
                    v-model="breed"
                    wrapperClass="mb-4"
                    disabled
                />

                <MDBInput 
                    type="text"
                    label="What is your pet age?"
                    v-model="age"
                    wrapperClass="mb-4"
                    disabled
                />

                What is your pet personality traits? (Please at lease one)
                <div v-for="personalitykey in personalitytraitsdata" :key="personalitykey">
                    <label class="container no-center-text">
                        <input type="checkbox"
                            :value="personalitykey"
                            :id="personalitykey"
                            v-model="personality"
                            :name="personalitykey"
                            checked disabled>&nbsp;
                        <span class="checkmark" disabled></span><strong>{{ personalitykey }}</strong>
                    </label>
                </div>
                <br/>
                
                <MDBInput 
                    type="text"
                    label="Is your pet a special pet?"
                    v-model="special"
                    wrapperClass="mb-4"
                    disabled
                />

                <MDBInput 
                    type="text"
                    label="Is your pet have a maintenance?"
                    v-model="maintenance"
                    wrapperClass="mb-4"
                    disabled
                />

                <MDBInput 
                    type="text"
                    label="Where is your pet located?"
                    v-model="located"
                    wrapperClass="mb-4"
                    disabled
                />
            </form>
        </MDBModalBody>
        <MDBModalFooter>
            <MDBBtn color="warning" @click="() => {
                petname = ''
                type = ''
                gender = ''
                breed = ''
                age = ''
                personality = []
                description = ''
                maintenance = ''
                located = ''
                file = []
                viewpetmodal = false
            }" :disabled="petsprocessing.petaddloading">CLOSE</MDBBtn>
        </MDBModalFooter>
    </MDBModal>

    <MDBModal v-model="updatemodal" staticBackdrop>
        <MDBModalHeader>
            <MDBModalTitle>UPDATE PET</MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <form @submit.prevent>
                <MDBInput 
                    type="text"
                    label="Pet Name"
                    v-model="petname"
                    wrapperClass="mb-4"
                    required
                />

                <MDBTextarea label="Pet Description" rows="4" v-model="description" />
                <br/>
                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                        <label for="breed">What is your Pet Type?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="type"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">What is your pet type?</option>
                            <option v-for="typekey in typepetdata" :key="typekey" :value="typekey">{{ typekey }}</option>
                        </select>
                    </div>
                </div>

                <div class="d-flex flex-wrap " v-if="type == 'Dog'">
                    <div class="flex-grow-1 mb-3">
                        <label for="breed">What is your Pet Breed?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="breed"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">What is your pet breed?</option>
                            <option v-for="breeddogkey in breedpetdogdata" :key="breeddogkey" :value="breeddogkey">{{ breeddogkey }}</option>
                        </select>
                    </div>
                </div>  
                <div class="d-flex flex-wrap " v-else-if="type == 'Cat'">
                    <div class="flex-grow-1 mb-3">
                        <label for="breed">What is your Pet Breed?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="breed"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">What is your pet breed?</option>
                            <option v-for="breedcatkey in breedpetcatdata" :key="breedcatkey" :value="breedcatkey">{{ breedcatkey }}</option>
                        </select>
                    </div>
                </div>

                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                        <label for="gender">What is your Pet Gender?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="gender"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">What is your pet gender?</option>
                            <option v-for="genderkey in genderpetdata" :key="genderkey" :value="genderkey">{{ genderkey }}</option>
                        </select>
                    </div>
                </div>

                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                        <label for="age">What is your Pet Age?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="age"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">What is your pet age?</option>
                            <option v-for="agekey in agepetdata" :key="agekey" :value="agekey">{{ agekey }}</option>
                        </select>
                    </div>
                </div>

                What is your pet personality traits? (Please at lease one)
                <div v-for="personalitykey in personalitytraitsdata" :key="personalitykey">
                    <label class="container no-center-text">
                        <input type="checkbox"
                            :value="personalitykey"
                            :id="personalitykey"
                            v-model="personality"
                            :name="personalitykey"
                            checked>&nbsp;
                        <span class="checkmark"></span><strong>{{ personalitykey }}</strong>
                    </label>
                </div>
                <br/>
               
                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                        <label>Is your pet a special pet?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="special"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">Is your pet a special pet?</option>
                            <option v-for="specialkey in specialdata" :key="specialkey" :value="specialkey">{{ specialkey }}</option>
                        </select>
                    </div>
                </div>

                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                        <label>Does your pet have a maintenance?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="maintenance"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">Is your pet have a maintenance?</option>
                            <option v-for="maintenancekey in petmaintenancedata" :key="maintenancekey" :value="maintenancekey">{{ maintenancekey }}</option>
                        </select>
                    </div>
                </div>

                <div class="d-flex flex-wrap ">
                    <div class="flex-grow-1 mb-3">
                        <label>Where is your pet located?</label>
                        <select class="form-select cua-input-select-2" name="role" v-model="located"
                            style="background-color: white; color: black; font-size: 0.9em;">
                            <option value="">Where is your pet located?</option>
                            <option v-for="locatedkey in locateddata" :key="locatedkey" :value="locatedkey">{{ locatedkey }}</option>
                        </select>
                    </div>
                </div>

                <MDBFile v-model="file" />
                <br/>
                <MDBBtn color="primary" block @click="() => {
                    if (petname == '' || type == '' || gender == '' || breed == '' || age == '' || personality.length <= 0 || maintenance == '' || located == ''){
                        $swal({
                            title: 'Please complete the form first before proceeding!',
                            confirmButtonText: 'OK'
                        })

                        return;
                    }

                    UpdateUserPet(userpetid)
                }" :disabled="petsprocessing.petupdateloading">
                    <MDBSpinner v-if="petsprocessing.petupdateloading"></MDBSpinner>
                    <strong v-else>UPDATE PET DATA</strong>
                </MDBBtn>
            </form>
        </MDBModalBody>
        <MDBModalFooter>
            <MDBBtn color="warning" @click="() => {
                petname = ''
                type = ''
                gender = ''
                breed = ''
                age = ''
                description = ''
                personality = []
                maintenance = ''
                located = ''
                file = []
                updatemodal = false
            }" :disabled="petsprocessing.petaddloading">CLOSE</MDBBtn>
        </MDBModalFooter>
    </MDBModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBBtn, MDBCol, MDBContainer, MDBFile, MDBIcon, MDBInput, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRow, MDBSpinner, MDBTable, MDBTextarea } from 'mdb-vue-ui-kit';

import Dashboardbreadcrumbs from '@/components/Dashboard/Dashboardbreadcrumbs.vue';

import { Pets } from '@/modules/dashboard/rescuer/pet'
import { GetItemKey } from '@/modules/globalfunction'

export default defineComponent({
    name: "RescuerPetManagement",
    props: ["currentPage", "totalPage"],
    data() {
        return{
            addpetmodal: false,
            viewpetmodal: false,
            updatemodal: false,
            userpetid: "",
            petname: "",
            description: "",
            type: "",
            gender: "",
            breed: "",
            age: "",
            personality: [],
            special: "",
            maintenance: "",
            located: "",
            file: [],
            picture: "",
            typepetdata:[
                "Dog",
                "Cat"
            ],
            genderpetdata: [
                "Female",
                "Male",
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
            agepetdata: [
                "Young",
                "Adult",
                "Senior"
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
            ],
            specialdata: [
                "Yes",
                "No"
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
        }
    },
    components: {
        Dashboardbreadcrumbs,
        MDBContainer,
        MDBIcon,
        MDBTable,
        MDBBtn,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter,
        MDBInput,
        MDBFile,
        MDBSpinner,
        MDBRow,
        MDBCol,
        MDBTextarea
    },
    methods: {
        async SavePet(){
            const auth: any = await GetItemKey("auth")
            const authdata = JSON.parse(auth)
            const formData = new FormData()

            formData.append("id", authdata._id)
            formData.append("petname", this.petname)
            formData.append("description", this.description)
            formData.append("type", this.type)
            formData.append("age", this.age)
            formData.append("gender", this.gender)
            formData.append("breed", this.breed)
            formData.append("personality", JSON.stringify(this.personality))
            formData.append("special", this.special)
            formData.append("maintenance", this.maintenance)
            formData.append("located", this.located)
            formData.append("file", this.file[0])

            await this.AddPet(formData)

            if (this.petsreponse.petaddmessage == "success"){
                this.$swal({
                    title: 'Save Success!',
                    html: `The page will reload in <b></b> milliseconds.`,
                    timer: 2000,
                    timerProgressBar: true,
                    allowEscapeKey: false,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    didOpen: () => {
                    this.$swal.showLoading()
                    const b = this.$swal.getHtmlContainer().querySelector('b')
                    this.timeInterval = setInterval(() => {
                        b.textContent = this.$swal.getTimerLeft()
                    }, 100)
                    },
                    willClose: () => {
                    clearInterval(this.timerInterval)
                    }
                }).then(result => {
                    if (result.dismiss === this.$swal.DismissReason.timer) {
                        window.location.reload();
                    }
                })
            }
            else{
                this.$swal({
                    title: `There's a problem saving your data! ErrorCode: ${this.petsreponse.petlistresponse}`,
                    confirmButtonText: 'OK'
                })
            }
        },
        async ListPets(){
            const auth: any = await GetItemKey("auth")
            const authdata = JSON.parse(auth)

            await this.GetPetList(authdata._id)
        },
        async RemovePet(id: any){

            const data = {
                petid: id
            }

            await this.PetRemove(data)

            if (this.petsreponse.petremovemessage == "success"){
                this.$swal({
                title: 'Pet successfully removed!',
                html: 'The page will be refreshed in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                allowEscapeKey: false,
                showConfirmButton: false,
                allowOutsideClick: false,
                didOpen: () => {
                  this.$swal.showLoading()
                  const b = this.$swal.getHtmlContainer().querySelector('b')
                  this.timeInterval = setInterval(() => {
                    b.textContent = this.$swal.getTimerLeft()
                  }, 100)
                },
                willClose: () => {
                  clearInterval(this.timerInterval)
                }
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === this.$swal.DismissReason.timer) {
                    window.location.reload()
                }
              })
            }
            else{
                this.$swal({
                    title: `There's a problem removing your pet. Error Code: ${this.petsreponse.petremoveresponse}`,
                    confirmButtonText: "OK! Cool"
                })
            }
        },
        async UpdateUserPet(petid: any){
            const auth: any = await GetItemKey("auth")
            const authdata = JSON.parse(auth)
            const formData = new FormData()

            formData.append("petid", petid)
            formData.append("userid", authdata._id)
            formData.append("petname", this.petname)
            formData.append("description", this.description)
            formData.append("age", this.age)
            formData.append("type", this.type)
            formData.append("gender", this.gender)
            formData.append("breed", this.breed)
            formData.append("personality", JSON.stringify(this.personality))
            formData.append("special", this.special)
            formData.append("maintenance", this.maintenance)
            formData.append("located", this.located)

            if (this.file.length > 0){
                formData.append("file", this.file[0])
            }

            await this.UpdatePet(formData)

            if (this.petsreponse.petupdatemessage == "success"){
                this.$swal({
                    title: 'Save Success!',
                    html: `The page will reload in <b></b> milliseconds.`,
                    timer: 2000,
                    timerProgressBar: true,
                    allowEscapeKey: false,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    didOpen: () => {
                    this.$swal.showLoading()
                    const b = this.$swal.getHtmlContainer().querySelector('b')
                    this.timeInterval = setInterval(() => {
                        b.textContent = this.$swal.getTimerLeft()
                    }, 100)
                    },
                    willClose: () => {
                    clearInterval(this.timerInterval)
                    }
                }).then(result => {
                    if (result.dismiss === this.$swal.DismissReason.timer) {
                        window.location.reload();
                    }
                })
            }
            else{
                this.$swal({
                    title: `There's a problem saving your data! ErrorCode: ${this.petsreponse.petupdateresponse}`,
                    confirmButtonText: 'OK'
                })
            }
        },
        GetImage(image: any){
            return new URL(`${import.meta.env.VITE_API_URL}/${image}`, import.meta.url).href
        },
    },
    mounted(){
        this.ListPets()
    },
    setup(){
        const { petsreponse, petsprocessing, petspagination, AddPet, GetPetList, PetRemove, UpdatePet } = Pets()

        return { petsreponse, petsprocessing, petspagination, AddPet, GetPetList, PetRemove, UpdatePet }
    }
})
</script>

<style>
.tc-pager,
.tc-page {
  background-color: #95389e;
  color: rgb(255, 200, 106);
  padding: 0.25rem 0.8rem;
  margin: 0 0.5rem;
  font-weight: bold;
  border-radius: 0.5rem;
}
.tc-page-disable {
    background-color: #1a212b;
    opacity: 0.5;
    color: #c59238;
    padding: 0.25rem 0.8rem;
    margin: 0 0.5rem;
    font-weight: bold;
    border-radius: 0.5rem;
    cursor:context-menu;
}
</style>