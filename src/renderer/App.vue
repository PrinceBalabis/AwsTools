<template>
    <div id="app">
        <main role="main">
            <b-container id="container-main" fluid>
                <b-row id="row-main">
                    <Sidebar sticky></Sidebar>
                    <b-col id="col-main" class="py-3">
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
