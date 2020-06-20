<template>
    <div class="sidebar">
        <b-list-group>
            <b-list-group-item
                variant="primary"
                to="/cloudfront"
                class="p-0"
                :active="isSelected(0)"
                v-on:click="setSelected(0)"
            >
                <router-link tag="span" to="/cloudfront">
                    <p class="p-3 m-0">CloudFront</p>
                </router-link>
            </b-list-group-item>

            <b-list-group-item
                variant="primary"
                to="/lambda"
                class="p-0"
                :active="isSelected(1)"
                v-on:click="setSelected(1)"
            >
                <router-link tag="span" to="/lambda">
                    <p class="p-3 m-0">Lambda</p>
                </router-link>
            </b-list-group-item>

            <b-list-group-item
                variant="primary"
                to="/s3"
                class="p-0"
                :active="isSelected(2)"
                v-on:click="setSelected(2)"
            >
                <router-link tag="span" to="/s3">
                    <p class="p-3 m-0">S3</p>
                </router-link>
            </b-list-group-item>

            <b-list-group-item
                variant="primary"
                to="/sqs"
                class="p-0"
                :active="isSelected(3)"
                v-on:click="setSelected(3)"
            >
                <router-link tag="span" to="/sqs">
                    <p class="p-3 m-0">SQS</p>
                </router-link>
            </b-list-group-item>

            <b-list-group-item
                variant="primary"
                to="/cloudwatch"
                class="p-0"
                :active="isSelected(4)"
                v-on:click="setSelected(4)"
            >
                <router-link tag="span" to="/cloudwatch">
                    <p class="p-3 m-0">CloudWatch</p>
                </router-link>
            </b-list-group-item>
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
    data() {
        return {
            selected: null
        };
    },
    methods: {
        isSelected(i) {
            return i == this.selected;
        },
        setSelected(i) {
            this.selected = i;
        }
    }
};
</script>