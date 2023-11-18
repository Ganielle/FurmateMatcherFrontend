<template>
    <MDBModal
    tabindex="-1"
    v-model="openpreference"
    >
        <MDBModalHeader>
            <MDBModalTitle id="exampleModalLabel"> Modal title </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>...</MDBModalBody>
        <MDBModalFooter>
        <MDBBtn color="secondary">Close</MDBBtn>
        <MDBBtn color="primary">Next</MDBBtn>
        </MDBModalFooter>
    </MDBModal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBModalTitle, MDBBtn } from "mdb-vue-ui-kit";

export default defineComponent({
    name: "UserPreference",
    props: ["openuserpreference"],
    data(){
        return{
            openpreference: this.openuserpreference
        }
    },
    components: {
        MDBModal,
        MDBModalHeader,
        MDBModalBody,
        MDBModalFooter,
        MDBModalTitle,
        MDBBtn
    }
})
</script>