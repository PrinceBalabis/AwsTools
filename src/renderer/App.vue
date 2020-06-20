<template>
    <div id="app" class="min-vh-100">
        <main>
            <b-container fluid>
                <b-row>
                    <Sidebar sticky></Sidebar>
                    <b-col class="py-3">
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
