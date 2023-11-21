
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
    name: "RescuerDashboard",
    data(){
        return {
            innerWidth: window.innerWidth,
            didToggle: false,
            links: [
                {
                    name: "mypets",
                    pageName: "My Pets",
                    icon: "heart",
                    children: [
                        {
                            name: "",
                            pageName: "List",
                            icon: "chevron-right",
                        },
                        {
                            name: "rescuerpetmanagement",
                            pageName: "Manage",
                            icon: "chevron-right",
                        },
                    ]
                },
                {
                    name: "usermessages",
                    pageName: "MESSAGES",
                    icon: "envelope",
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