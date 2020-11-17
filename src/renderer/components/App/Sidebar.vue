<template>
    <div id="sidebar" draggable="false">
        <b-list-group>
            <b-list-group-item
                variant="primary"
                class="p-0"
                to="/cloudfront"
                :active="isSelected('/cloudfront')"
            >
                <b-container>
                    <b-row align-v="center">
                        <b-col>CloudFront</b-col>
                    </b-row>
                </b-container>
            </b-list-group-item>

            <b-list-group-item
                variant="primary"
                class="p-0"
                to="/lambda"
                :active="isSelected('/lambda')"
            >
                <b-container>
                    <b-row align-v="center">
                        <b-col>Lambda</b-col>
                    </b-row>
                </b-container>
            </b-list-group-item>

            <b-list-group-item variant="primary" class="p-0" to="/s3" :active="isSelected('/s3')">
                <b-container>
                    <b-row align-v="center">
                        <b-col>S3</b-col>
                    </b-row>
                </b-container>
            </b-list-group-item>

            <b-list-group-item variant="primary" class="p-0" to="/sqs" :active="isSelected('/sqs')">
                <b-container>
                    <b-row align-v="center">
                        <b-col>SQS</b-col>
                    </b-row>
                </b-container>
            </b-list-group-item>

            <b-list-group-item
                variant="primary"
                class="p-0"
                to="/cloudwatch"
                :active="isSelected('/cloudwatch')"
            >
                <b-container>
                    <b-row align-v="center">
                        <b-col>CloudWatch</b-col>
                    </b-row>
                </b-container>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    name: "sidebar",
    data() {
        return {};
    },
    methods: {
        isSelected(path) {
            return path == this.$route.path;
        }
    }
};
</script>