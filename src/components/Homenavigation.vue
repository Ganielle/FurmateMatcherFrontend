<template>
    <MDBNavbar expand="lg" dark container class="navbar-style">
    <MDBNavbarBrand href="#">
        <img :src="logo" height="70" alt="" loading="lazy" />
    </MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent" >
        <MDBNavbarNav right class="mb-2 mb-lg-0">
            <MDBNavbarItem to="/" :active="$route.name == 'home'">
                HOME
            </MDBNavbarItem>
            <MDBNavbarItem to="/faq" :active="$route.name == 'faq'">
                FAQ
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBDropdown class="nav-item" v-model="dropdown1">
                    <MDBDropdownToggle
                    tag="a"
                    class="nav-link"
                    @click="dropdown1 = !dropdown1"
                    >FURCARE GUIDE</MDBDropdownToggle>
                    <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
                        <MDBDropdownItem href="/Pethealth" :active="$route.name == 'pethealth'">PET HEALTH</MDBDropdownItem>
                        <MDBDropdownItem href="/wellbeing" :active="$route.name == 'wellbeing'">WELL-BEING</MDBDropdownItem>
                        <MDBDropdownItem href="/emergencyresponse" :active="$route.name == 'emergencyresponse'">EMERGENCY RESPONSE PREPAREDNESS</MDBDropdownItem>
                        <MDBDropdownItem href="/tips" :active="$route.name == 'tips'">TIPS ON HOW TO TAKE CARE OF ADOPTED ANIMALS</MDBDropdownItem>
                        <MDBDropdownItem href="/firsttimeadopters" :active="$route.name == 'firsttimeadopters'">FIRST TIME ADOPTERS DO'S AND DON'T</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem to="/registration" :active="$route.name == 'registration'">
                SIGN UP
            </MDBNavbarItem>
            <MDBNavbarItem href="/login">
                LOGIN
            </MDBNavbarItem>
        </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBDropdown, MDBDropdownMenu, MDBDropdownItem, MDBDropdownToggle } from "mdb-vue-ui-kit";

import logo from "@/assets/logo.png"

export default defineComponent({
    name: "HomeNavigation",
    data(){
        return {
            logo,
            collapse1: ref(false),
            dropdown1: false
        }
    },
    components: {
        MDBNavbar,
        MDBNavbarBrand,
        MDBNavbarItem,
        MDBNavbarToggler,
        MDBCollapse,
        MDBNavbarNav,
        MDBDropdownMenu, 
        MDBDropdownItem,
        MDBDropdown,
        MDBDropdownToggle
    }
})
</script>

<style>
.navbar-style{
    background-image: linear-gradient(90deg, rgba(246,191,159,1) 0%, rgba(149,56,158,1) 100%);
}
</style>