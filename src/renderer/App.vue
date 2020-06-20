<template>
    <div id="app" class="h-100">
        <main>
            <b-container fluid class="px-0">
                <b-row>
                    <b-col cols="2" class="pr-1">
                        <Sidebar></Sidebar>
                    </b-col>
                    <b-col cols="10" class="py-3">
                        <router-view></router-view>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </div>
</template>

<script>
import Sidebar from "./components/App/Sidebar";

export default {
    name: "awstools",
    components: { Sidebar }
};
</script>

<style lang="scss">
@import "styles/main.scss";
</style>
