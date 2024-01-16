<template>
    <MDBModal
        id="exampleModal"
        tabindex="-1"
        labelledby="exampleModalLabel"
        v-model="OpenModal"
    >
        <MDBModalHeader>
        <MDBModalTitle id="exampleModalLabel"> USER PROFILE </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>

        </MDBModalBody>
        <MDBModalFooter>
        <MDBBtn color="secondary" @click="$emit('closemodal')">Close</MDBBtn>
        </MDBModalFooter>
    </MDBModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBSpinner, MDBTable, MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter } from 'mdb-vue-ui-kit';
import { GetItemKey } from '@/modules/globalfunction'
import { UserProfile } from '@/modules/dashboard/user/userprofile'

export default defineComponent({
    name: "UserProfileModal",
    props: ["openmodal", "userid"],
    components: {
        MDBBtn, 
        MDBCol, 
        MDBContainer, 
        MDBIcon, 
        MDBRow,
        MDBSpinner, 
        MDBTable,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter,
        MDBBtn,
    },
    computed: {
        OpenModal(){
            return this.openmodal
        },
        UserID(){
            return this.userid
        }
    },
    mounted() {
        this.Profile(this.UserID)
    },
    setup(){
        const { userprofileresponse, userprofileprocessing, Profile } = UserProfile()

        return { userprofileresponse, userprofileprocessing, Profile }
    }
})
</script>