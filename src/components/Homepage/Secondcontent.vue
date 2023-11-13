<template>
    <div class="second-content">
        <MDBContainer class="text-center">
            <br/><br/><br/>
            <p style="color: ; font-size: 2vw;">PLANNING TO ADOPT A PET</p>
            <br/>
            <MDBRow style="height: 300px;" start>
                <MDBCol>
                    <MDBCard style="height: 100%;" class="faq-item">
                        <MDBCardBody>
                            <MDBCardTitle class="text-center" style="color: rgba(149,56,158,1);">CHECKLIST FOR NEW ADOPTERS</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </MDBCardText>
                            <MDBBtn rounded outline="info">LEARN MORE</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style="height: 100%;" class="faq-item">
                        <MDBCardBody>
                            <MDBCardTitle class="text-center" style="color: rgba(149,56,158,1);">PET ADOPTION FAQS</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </MDBCardText>
                            <MDBBtn rounded outline="info">LEARN MORE</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard style="height: 100%;" class="faq-item">
                        <MDBCardBody>
                            <MDBCardTitle class="text-center" style="color: rgba(149,56,158,1);">RESCUERS FAQS</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </MDBCardText>
                            <MDBBtn rounded outline="info">LEARN MORE</MDBBtn>
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