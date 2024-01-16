<template>
    <div class="second-content">
        <MDBContainer class="text-center">
            <br/><br/><br/>
            <p style="color: ; font-size: 2vw;">PLANNING TO ADOPT A PET</p>
            <br/>
            <MDBRow style="height: 300px;" start>
                <MDBCol>
                    <MDBCard style="height: 100%;" class="faq-item" @click="() => {
                                $router.push({name: 'firsttimeadopters'})
                            }">
                        <MDBCardBody>
                            <MDBCardTitle class="text-center" style="color: rgba(149,56,158,1);">PET ADOPTION FAQS</MDBCardTitle>
                            <MDBCardText>
                                Welcoming a furry friend into your home is an exciting and rewarding experience. As a first-time fur adopter, it's essential to provide the best care and environment for........
                            </MDBCardText>
                            <MDBBtn rounded outline="info" @click="() => {
                                $router.push({name: 'firsttimeadopters'})
                            }">LEARN MORE</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style="height: 100%;" class="faq-item" @click="() => {
                                $router.push({name: 'faq'})
                            }">
                        <MDBCardBody>
                            <MDBCardTitle class="text-center" style="color: rgba(149,56,158,1);">RESCUERS FAQS</MDBCardTitle>
                            <MDBCardText>
                                Thank you for using the Furmate Matcher! We're here to assist you at every stage, from exploring
                                profiles of over (no. of pets available for adoption) adoptable pets to welcoming your.......
                            </MDBCardText>
                            <MDBBtn rounded outline="info" @click="() => {
                                $router.push({name: 'faq'})
                            }">LEARN MORE</MDBBtn>
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
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn } from "mdb-vue-ui-kit";

import logo from "@/assets/logo.png"

export default defineComponent({
    name: "SecondContent",
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
        MDBBtn
    }
})
</script>

<style>

.faq-item:hover{
    border: 2px solid rgba(149,56,158,1);
    margin: -2px;
    cursor: pointer;
}
.faq-item:hover .btn{
    background-color: rgba(149,56,158,1);
    color: white;
    border: 2px solid rgba(149,56,158,1);
}
.faq-item .btn{
    border: 2px solid rgba(149,56,158,1);
    color: rgba(149,56,158,1);
}
</style>