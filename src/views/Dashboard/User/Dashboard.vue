
import type { log } from 'console';
<template>
    <MDBContainer fluid class="px-0 admin-view">
        <NavOpener @SidebarToggle="ToggleSidebar()" />
        <main class="d-flex main-container"
        :style="{paddingLeft: innerWidth > 768 ? didToggle ? innerWidth < 768 ?
            '0rem' : '7rem' : '22rem' : '0rem'}">
            <DashboardNavigation :items="links" :didToggle="didToggle" :subToggle="subToggle" @sidebarToggle="ToggleSidebar" role="PLAYER" />
            <RouterView />
        </main>
    </MDBContainer>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { MDBContainer, MDBIcon } from 'mdb-vue-ui-kit';

import NavOpener from '@/components/Dashboard/Dashboardnavigationopener.vue'
import DashboardNavigation from '@/components/Dashboard/Dashboardnavigation.vue'

export default defineComponent({
    name: "UserDashboard",
    data(){
        return {
            innerWidth: window.innerWidth,
            didToggle: false,
            links: [
                {
                    name: "userhome",
                    pageName: "PET MATCHER",
                    icon: "heart",
                    children: []
                },
                {
                    name: "pets",
                    pageName: "PETS",
                    icon: "paw",
                    children: [
                        {
                            name: "viewpets",
                            pageName: "VIEW PETS",
                            icon: "chevron-right",
                        },
                        {
                            name: "updatepets",
                            pageName: "UPDATE PETS",
                            icon: "chevron-right",
                        }
                    ]
                },
                {
                    name: "userrescuers",
                    pageName: "RESCUERS",
                    icon: "hands-helping",
                    children: []
                },
                {
                    name: "usermessages",
                    pageName: "MESSAGES",
                    icon: "envelope",
                    children: []
                },
                {
                    name: "userprofile",
                    pageName: "PROFILE",
                    icon: "user-circle",
                    children: []
                }
            ],
            subToggle: false,
        }
    },
    components: {
        DashboardNavigation,
        NavOpener
    },
    methods: {
        ToggleSidebar(){
            console.log("hello")
            this.didToggle = !this.didToggle
        },
        SideSubToggle(){
            this.subToggle = !this.subToggle
            if (this.subToggle === true){
                this.didToggle = false
            }
        }
    }
})
</script>