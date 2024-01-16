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
                    GetHistory()
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
                    GetHistory()
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
                    <th scope="col" v-for="list in headlist" :key="list" class="text-center">{{ list }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="
                    //@ts-ignore
                    petsprocessing.pethistorylistdata">
                    <td colspan="4">
                        
                    {{ petsreponse.pethistorylistdata }}
                        <MDBSpinner></MDBSpinner>
                    </td>
                </tr>
                <tr v-else-if="petsreponse.pethistoryadddata == '' || petsreponse.pethistoryadddata.length <= 0">
                    
                    <td colspan="4">No Data Yet!</td>
                </tr>
                <tr v-else v-for="data in petsreponse.pethistoryadddata" :key="data">
                    <th scope="row" class="text-center" style="color: black">
                        {{ 
                            //@ts-ignore
                            data.pet.name }}
                    </th>
                    <th class="text-center" style="color: black">
                        {{ 
                            //@ts-ignore
                            ConvertToDateTime(data.createdAt) }}
                    </th>
                    <th class="text-center">
                        <MDBBtn block color="primary" @click="() => {
                            $router.push({name: 'petviewer', params: {
                                //@ts-ignore
                                petid: data.pet._id
                            }})
                        }">VIEW PET</MDBBtn>
                    </th>
                </tr>
            </tbody>
        </MDBTable>
    </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBSpinner, MDBTable, MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBInput } from 'mdb-vue-ui-kit';
import { GetItemKey } from '@/modules/globalfunction'
import { Pets } from '@/modules/dashboard/user/pet'

import Dashboardbreadcrumbs from '@/components/Dashboard/Dashboardbreadcrumbs.vue';

export default defineComponent({
    name: "ManageAdoptionRescuer",
    data(){
        return {
            headlist: [
                "ADOPTER",
                "DATE VIEWED",
                "ACTION"
            ]
        }
    },
    components: {
    MDBContainer,
    MDBIcon,
    MDBTable,
    Dashboardbreadcrumbs,
    MDBSpinner,
    MDBBtn,
},
    methods: {
        async GetHistory(){
            const auth = await GetItemKey("auth")
            //@ts-ignore
            const authdata = JSON.parse(auth)

            await this.GetPetHistoryList(authdata._id)
        },
        ConvertToDateTime(time: any){
            const dateTime = new Date(time);

            return `${dateTime.getMonth()}/${dateTime.getDay()}/${dateTime.getFullYear()} ${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`
        }
    },
    mounted(){
        this.GetHistory()
    },
    setup(){
        const {petsreponse, petsprocessing, petspagination, GetPetHistoryList} = Pets()

        return {petsreponse, petsprocessing, petspagination, GetPetHistoryList}
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