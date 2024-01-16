<template>
  <MDBNavbar expand="lg" dark container class="navbar-style fixed-top">
    <MDBNavbarBrand href="#">
      <img :src="logo" height="50" alt="" loading="lazy" style="margin-left: 100px;" />
    </MDBNavbarBrand>
    <MDBNavbarToggler @click="collapse1 = !collapse1" target="#navbarSupportedContent"></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav right class="mb-2 mb-lg-0">
        <MDBNavbarItem to="/" :active="$route.name == 'home'" style="margin-right: 20px;">
          HOME
        </MDBNavbarItem>
        <MDBNavbarItem to="/faq" :active="$route.name == 'about us'" style="margin-right: 20px;">
          ABOUT US
        </MDBNavbarItem>
        <MDBNavbarItem style="margin-right: 50px;">
          <MDBDropdown class="nav-item" v-model="dropdown1">
            <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown1 = !dropdown1">FURCARE GUIDE</MDBDropdownToggle>
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <MDBDropdownItem href="/Pethealth" :active="$route.name == 'pethealth'">DOGS & PUPPIES</MDBDropdownItem>
              <MDBDropdownItem href="/Emergencyresponse" :active="$route.name == 'Emergencyresponse'">CATS & KITTENS</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>

        <!-- <MDBNavbarItem to="/registration" :active="$route.name == 'registration'" style="margin-right: 10px;">
          SIGN UP
        </MDBNavbarItem> -->

        <MDBNavbarItem href="/login" style="margin-right: 20px;">
          LOGIN
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBDropdown, MDBDropdownMenu, MDBDropdownItem, MDBDropdownToggle } from "mdb-vue-ui-kit";

import logo from "@/assets/logo1.png"

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
    background-image: linear-gradient(90deg, rgba(128, 0, 128) 0%, rgb(128, 0, 128) 100%);
}
</style>
