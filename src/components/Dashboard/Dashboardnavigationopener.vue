<template>
    <div >
        <div class="toggle-wrapper" @click="SidebarToggle">
            <MDBIcon
                fas
                icon="bars"
                size="2x"
                class="text-primary side-menu-toggle"
                role="button"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBIcon } from "mdb-vue-ui-kit";

export default defineComponent({
    name: 'NavOpener',
    data(){
        return {
        }
    },
    components: {
        MDBIcon
    },
    methods: {
        SidebarToggle(){
            this.$emit('sidebarToggle')
        }
    }
})
</script>

<style>
.toggle-wrapper {
    position: fixed;
    margin-top: 10px;
    transform: translateX(-50px);
    width: 100px;
    z-index: 9;
}
</style>
