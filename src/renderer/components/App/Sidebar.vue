<template>
    <div class="sidebar">
        <b-list-group>
            <b-list-group-item variant="primary" active to="/cloudfront" class="p-0">
                <router-link tag="span" to="/cloudfront" :click="active">
                    <p class="p-3 m-0">CloudFront</p>
                </router-link>
            </b-list-group-item>

            <b-list-group-item button variant="primary" class="p-0" :click="active()">
                <router-link tag="span" to="/lambda">
                    <p class="p-3 m-0">Lambda</p>
                </router-link>
            </b-list-group-item>

            <router-link tag="span" to="/s3">
                <b-list-group-item button variant="primary">S3</b-list-group-item>
            </router-link>
            <router-link tag="span" to="/sqs">
                <b-list-group-item button variant="primary">SQS</b-list-group-item>
            </router-link>
            <router-link tag="span" to="/cloudwatch">
                <b-list-group-item button variant="primary">CloudWatch</b-list-group-item>
            </router-link>
        </b-list-group>

        <!-- <b-button v-b-toggle.sidebar-component variant="info" class="mb-2">
            <eva-icon name="menu-outline" animation="pulse"></eva-icon>
        </b-button>-->
        <!-- <b-sidebar
            id="sidebar-component"
            title="Sidebar"
            bg-variant="dark"
            text-variant="light"
            shadow
            sidebar-class="border-right border-primary"
            no-header
            lazy
            no-close-on-esc="true"
        >
            <template v-slot:default="{ hide }">
                <div class="px-3 py-2">
                    <b-button variant="primary" block @click="hide">Close Sidebar</b-button>

                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
                </div>
            </template>
        </b-sidebar>-->
    </div>
</template>

<script>
export default {
    name: "sidebar",
    methods: {
        active(number) {
            console.log("Sidebar button pressed->", number);
        }
    }
};
</script>