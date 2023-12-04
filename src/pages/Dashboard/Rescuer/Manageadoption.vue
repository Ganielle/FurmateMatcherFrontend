<template>
    <MDBContainer fluid>
        <br/>
        <Dashboardbreadcrumbs data="MY PETS / MANAGE ADOPTION" />
        <br/>
        <div class="px-0 mb-3 d-flex align-items-center justify-content-center">
            <button class="tc-pager" role="button"
                :class="{'tc-page-disable': petspagination.page <= 0}"
                :disabled="petspagination.page <= 0" 
                @click="() => {
                    petspagination.page -= 1
                }">
                <MDBIcon
                    fas
                    icon="chevron-left"
                    class="text-primary"
                    style="color: white !important"
                />
            </button>
            <div class="tc-page">{{ petspagination.page + 1 }}</div>
            <button class="tc-pager" role="button"
                :class="{'tc-page-disable': petspagination.page >= petspagination.totalPages - 1}"
                :disabled=" petspagination.page >= petspagination.totalPages - 1"
                @click="() => {
                    petspagination.page += 1
                }">
                <MDBIcon
                    fas
                    icon="chevron-right"
                    class="text-primary"
                    style="color: white !important"
                />
            </button>
        </div>
        <br/>
        <MDBTable>
            <thead class="table-warning">
                <tr>
                    <th scope="col" v-for="list in headlist" :key="list">{{ list }}</th>
                </tr>
            </thead>
        </MDBTable>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer, MDBIcon, MDBTable } from 'mdb-vue-ui-kit';
import { GetItemKey } from '@/modules/globalfunction'
import { Pets } from '@/modules/dashboard/rescuer/pet'

import Dashboardbreadcrumbs from '@/components/Dashboard/Dashboardbreadcrumbs.vue';

export default defineComponent({
    name: "ManageAdoptionRescuer",
    data(){
        return {
            headlist: [
                "ADOPTER",
                "PET",
                "REQUESTED DATE",
                "ACTION"
            ]
        }
    },
    components: {
        MDBContainer,
        MDBIcon,
        MDBTable,
        Dashboardbreadcrumbs
    },
    setup(){
        const { petsreponse, petsprocessing, petspagination } = Pets()

        return { petsreponse, petsprocessing, petspagination }
    }
})
</script>

<style>
.tc-pager,
.tc-page {
  background-color: #95389e;
  color: rgb(255, 200, 106);
  padding: 0.25rem 0.8rem;
  margin: 0 0.5rem;
  font-weight: bold;
  border-radius: 0.5rem;
}
.tc-page-disable {
    background-color: #1a212b;
    opacity: 0.5;
    color: #c59238;
    padding: 0.25rem 0.8rem;
    margin: 0 0.5rem;
    font-weight: bold;
    border-radius: 0.5rem;
    cursor:context-menu;
}
</style>