<template>
    <div class="first-content">
        <MDBContainer class="text-center">
            <br/><br/><br/>
            <p style="color: rgba(149,56,158,1); font-size: 2vw;">Pets Available for Adoption Nearby</p>
            <br/>
            <MDBRow style="height: 300px;" start>
                <MDBCol>
                    <MDBCard style="height: 100%;" class="pet-adopt-item">
                        <MDBCardImg
                            :src="logo"
                            top
                            alt="..."
                        />
                        <MDBCardBody>
                            <MDBCardTitle class="text-center">PET NAME</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style="height: 100%;" class="pet-adopt-item">
                        <MDBCardImg
                            :src="logo"
                            top
                            alt="..."
                        />
                        <MDBCardBody>
                            <MDBCardTitle class="text-center">PET NAME</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style="height: 100%;" class="pet-adopt-item">
                        <MDBCardImg
                            :src="logo"
                            top
                            alt="..."
                        />
                        <MDBCardBody>
                            <MDBCardTitle class="text-center">PET NAME</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style="height: 100%;" class="pet-adopt-item">
                        <MDBCardImg
                            :src="logo"
                            top
                            alt="..."
                        />
                        <MDBCardBody>
                            <MDBCardTitle class="text-center">PET NAME</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style="height: 100%;" class="pet-adopt-item">
                        <MDBCardImg
                            :src="logo"
                            top
                            alt="..."
                        />
                        <MDBCardBody>
                            <MDBCardTitle class="text-center">PET NAME</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style="height: 100%;" class="pet-adopt-item">
                        <MDBCardImg
                            :src="logo"
                            top
                            alt="..."
                        />
                        <MDBCardBody>
                            <MDBCardTitle class="text-center">PET NAME</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <br/><br/><br/>
        </MDBContainer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, } from "mdb-vue-ui-kit";

import logo from "@/assets/logo.png"

export default defineComponent({
    name: "FirstContent",
    data(){
        return {
            logo
        }
    },
    components: {
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBCard, 
        MDBCardBody, 
        MDBCardTitle, 
        MDBCardText, 
        MDBCardImg,
    }
})
</script>

<style>
.first-content{
    background-color: gainsboro;
}
.pet-adopt-item:hover{
    border: 2px solid rgba(149,56,158,1);
    margin: -2px;
    cursor: pointer;
}
</style>