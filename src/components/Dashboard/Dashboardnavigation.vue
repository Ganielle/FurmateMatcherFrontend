<template>
  <div class="sidebar-wrapper d-flex flex-column" 
      :class="SidebarWrapper" :style="{width: didToggle ? innerWidth < 786 ? '0rem' : 
          '4.5rem' : '20rem'}">
      
      <div v-if="innerWidth > 768" @click="SidebarToggle()"
          class="sidebar-toggle d-flex align-items-center justify-content-center"
          :class="{'sidebar-toggle-rotate': didToggle}">
          <MDBIcon fas icon="angle-left" size="lg" />
      </div>
    <div class="sidebar-header pt-4" style="margin: 0;">
      
      <div class="text-center sidebar-logo-container d-flex align-items-center justify-content-center">
        <img :src="logo" alt="logo" class="img-fluid w-50" />
      </div>
    </div>
    <div class="sidebar-body flex-grow-1">
      <MDBContainer>
          <div style="background-color: rgba(246,191,159,1); border-radius: 5px !important; " class="mb-2">
              <div v-for="link in items" :key="link.name">
                  <!--MAIN NAVIGATION HERE-->
                  <div @click="() => {
                      if (link.name !== toggled){
                          toggled = link.name
                      }
                      else{
                          toggled = ''
                      }

                      if (link.children.length <= 0){
                        link.name !== '' && $router.push({name: link.name})
                        SidebarToggle()
                      }
                      link.name !== ''
                      //  && input here subtoggle off
                  }" class="d-flex align-items-center py-2 sidebar-link-header cursor-pointer"
                      :class="{'sidebar-active-link': RouteName == link.name || CheckLink(link) }">
                      <div class="sidebar-icon-container">
                        <MDBIcon
                            fas
                            :icon="link.icon"
                            size="2x"
                            class="text-primary"
                            role="button"
                            style="color: white !important"
                        />
                      </div>
                      <div class="flex-grow-1 sidebar-link-header-title">
                          {{ link.pageName }}
                      </div>
                      <div v-if="link.children.length > 0" class="mx-3">
                          <!--PUT CHILD NAVIGATION HERE-->
                          <MDBIcon fas v-if="link.name === toggled" icon="chevron-up"></MDBIcon>
                          <MDBIcon fas v-else icon="chevron-down"></MDBIcon>
                      </div>
                  </div>

                  <!--SUB NAVIGATION HERE-->
                  <div v-for="child in link.children" :key="child.name" 
                    class="sidebar-sub-link" :class="{'sidebar-sub-link-active': toggled === link.name }">
                    
                    <div class="d-flex align-items-center py-1 my-1 sidebar-link-header ms-3"
                      :class="{'sidebar-active-link': RouteName === child.name}"
                      @click="() => { // put on click here
                        $router.push({name: child.name})
                        SidebarToggle()
                    }">
                      <div class="mx-3">
                          <MDBIcon :icon="child.icon"></MDBIcon>
                      </div>
                      <div class="flex-grow-1 sidebar-sublink-header-title">
                          {{ child.pageName }}
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </MDBContainer>
      
    </div>
    
    <div @click="Logout()">
      <p style="margin-left: 20px;white-space: nowrap; overflow: hidden; cursor: pointer;">
        <MDBIcon
          fas
          icon="sign-out-alt"
          size="2x"
          class="text-primary"
          style="color: white !important"
        />
          <strong style="margin-left: 20px; font-size: 2vw; color: white; cursor: pointer;">LOGOUT</strong>
        </p>
    </div>
    <div v-if="didToggle === false && innerWidth <= 768" class="custom-backdrop" @click="SidebarToggle()">
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, isProxy, toRaw } from 'vue';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBInput, MDBIcon, MDBCheckbox, MDBModal, MDBModalHeader, 
    MDBModalBody, MDBModalFooter, MDBModalTitle } from "mdb-vue-ui-kit";

import backBtn from '@/assets/Dashboard/Navigation/Backbutton.png'
import logo from "@/assets/logo.png"

export default defineComponent({
    name: 'DashboardNavigation',
    props: ["items", "didToggle", "subToggle", "role"],
    data(){
        return{
            logoutModal: false,
            toggled: "",
            backBtn,
            url: "",
            innerWidth: window.innerWidth,
            logo,
            timeInterval: 0
        }
    },
    components: {
        MDBContainer,
        MDBBtn,
        MDBRow, 
        MDBCol,
        MDBInput,
        MDBIcon,
        MDBCheckbox,
        MDBModal,
        MDBModalHeader,
        MDBModalBody,
        MDBModalFooter,
        MDBModalTitle,
    },
    computed:{
        SidebarWrapper(): any{
            return {
                'overflow-auto': this.innerWidth < 768 && this.didToggle
            }
        },
        RouteName(): any{
            return this.$route.name
        },
    },
    methods:{
        SidebarToggle(){
          this.$emit('sidebarToggle')
        },
        SubItemToggle(){
          this.$emit('sideSubToggle')
        },
        CheckLink(link: any): boolean{
          let proxyData = toRaw(link)

          if (proxyData.children.length <= 0){
            return this.$route.name === proxyData.name
          }
          else{
            for (var a = 0; a < proxyData.children.length; a++){
              if (this.$route.name === proxyData.children[a].name){
                return true
              }
            }

            return false
          }
        },
        Logout(){
          this.$swal({
            title: "Are you sure you want to logout?",
            showCancelButton: true,
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed){
              this.$swal({
                title: 'User Logging out!',
                html: 'The user will be logged out in <b></b> milliseconds.',
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
                  localStorage.removeItem("auth")
                  this.$router.push({name: "home"})
                }
              })
            }
          })
        }
    }
})
</script>

<style>
.sidebar-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* border-right: 2px solid #58677a; */
  transition: width 250ms ease-out;
  background-color: rgba(246,191,159,1) !important;
  z-index: 10;
}

.sidebar-toggle {
  background-color: rgba(149,56,158,1);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: -1rem;
  top: 2rem;
  color: rgba(246,191,159,1);
  /* border: 2px solid #0931e2; */
  cursor: pointer;
  transition: transform 250ms ease-out;
}

.sidebar-toggle-rotate {
  transform: rotate(180deg);
}

.sidebar-logo-container {
  height: 6.5rem;
}

.sidebar-header {
  background: rgba(246,191,159,1);
}

.sidebar-body {
  background: rgba(246,191,159,1);
  min-height: fit-content;
  border-top: 1px solid rgba(246,191,159,1);
  overflow-x: hidden;
  overflow-y: auto;
}

.sidebar-icon-container {
  min-width: 3rem;
  margin: 0;
  display: grid;
  place-items: center;
}

.sidebar-arena-btn {
  width: 90% !important;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #e5aa45 !important;
  font-size: 0.9rem !important;
}

.sidebar-link-header {
  color: white;
  cursor: pointer;
  border-right: 0.35rem solid transparent;
  white-space: nowrap;
  /* background-color: rgba(246,191,159,1); */
}

.sidebar-active-link {
  background-image: linear-gradient(to right, transparent, rgba(149,56,158,1)) !important;
  border-right: 0.35rem solid rgb(85, 9, 92);
  color: white !important;
}

.sidebar-active-link-2 {
  color: white !important;
}

.sidebar-link-header:hover {
  background-image: linear-gradient(to right, transparent, rgba(149,56,158,1));
  border-right: 0.35rem solid rgb(181, 2, 197);
}

.sidebar-link-header-title {
  font-size: 0.95rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding-left: 12px
}

.sidebar-sublink-header-title {
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
}

.sidebar-sub-link {
  height: 0 !important;
  overflow: hidden;
  white-space: nowrap;
  transition: height 150ms ease-in-out !important;
}

.sidebar-sub-link-active {
  height: fit-content !important;
}

.sidebar-footer {
  margin-top: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(246,191,159,1);
}

.sidebar-logout-btn {
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  letter-spacing: 1px;
}

.custom-backdrop {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.616);
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.role-text{
  width: 100%; font-size: 100%; color: #ffffff;
}
</style>
  