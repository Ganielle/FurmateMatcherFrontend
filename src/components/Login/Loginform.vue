<template>
    <MDBContainer class="registration-form">
        <div class="p-5 text-center bg-light">
            <form @submit.prevent>
                <strong style="font-size: 1.5vw;">FURMATE MATCHER LOGIN</strong>
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
                <MDBCheckbox
                    label="Keep me Login"
                    v-model="keepLogin"
                    wrapperClass="d-flex mb-4"
                />
                <MDBRow>
                    <MDBCol>
                        <a href="/registration">
                            <MDBBtn class="existing" color="info" block :disabled="loginprocessing.loading"><MDBSpinner v-if="loginprocessing.loading" /><p v-else>Don't have an account yet?</p> </MDBBtn>
                        </a>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn type="submit" class="signin" color="primary" block :disabled="loginprocessing.loading" @click="LoginUser()"> <MDBSpinner v-if="loginprocessing.loading" />
                        <p v-else>Login</p></MDBBtn>
                    </MDBCol>
                </MDBRow>
            </form>
        </div>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MDBContainer, MDBInput, MDBCheckbox, MDBRow, MDBCol, MDBBtn, MDBSpinner  } from "mdb-vue-ui-kit";

import { Login } from '@/modules/login/login.ts'

export default defineComponent({
    name: "LoginForm",
    data(){
        return {
            username: "",
            password: "",
            keepLogin: false
        }
    },
    components: {
        MDBContainer,
        MDBInput,
        MDBCheckbox,
        MDBRow,
        MDBCol,
        MDBBtn,
        MDBSpinner
    },
    methods: {
        async LoginUser(){
            if (this.username == "" && this.password == ""){
                this.$swal({
                    title: "Please complete the form first before proceeding!",
                    confirmButtonText: "OK"
                })

                return;
            }

            const data = {
                username: this.username,
                password: this.password
            }

            await this.UserLogin(data)

            if (this.loginresponse.message == "success"){
                localStorage.setItem("auth", JSON.stringify(this.loginresponse.response))

                this.$swal({
                    title: 'User Logging in',
                    html: `${this.loginresponse.response.username} will be logging in <b></b> milliseconds.`,
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
                        this.$router.push({name: "userhome"})
                    }
                })
            }
            else{
                this.$swal({
                    title: this.loginresponse.response,
                    confirmButtonText: "YES"
                })
            }
        }
    },
    setup(){
        const { loginresponse, loginprocessing, UserLogin } = Login()

        return { loginresponse, loginprocessing, UserLogin }
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
</style>