<template>
    <div style="width: 100%; height: 50px; background-color: #95389e; border-radius: 5px;">
        <div style="padding-top: 12px; padding-left: 10px; color: white">
            <strong>{{ data }}</strong>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from "mdb-vue-ui-kit";

export default defineComponent({
    name: "DashboardBreadcrumbs",
    props: ["data"],
    components: {
        MDBContainer
    }
})
</script>