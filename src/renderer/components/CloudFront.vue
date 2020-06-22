<template>
    <div id="cloudfront">
        <div class="title">CloudFront</div>
    </div>
</template>

<script>
export default {
    name: "cloudfront",
    components: {},
    async beforeCreate() {
        console.log("test method running");
        this.$store.dispatch("sampleModule/sampleAction");
    }
};
</script>