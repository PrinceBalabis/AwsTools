<script>
export default {
    methods: {
        // Fetch a label
        printLabel(labelId) {
            return this.$store.getters["labels/label"](labelId);
        }
    },
    computed: {}
};
</script>
