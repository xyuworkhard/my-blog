export default function (refName) {
    return {
        mounted() {
            this.$refs[refName].addEventListener("scroll", this.handleScroll);
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("scrollContainer");
            this.$refs[refName].removeEventListener(
                "scroll",
                this.handleScroll
            );
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
        },
        methods: {
            handleScroll() {
                this.$bus.$emit("scrollContainer", this.$refs[refName]);
            },
            handleSetMainScroll(scrollTop) {
                this.$refs[refName].scrollTop = scrollTop;
            },
        }
    }
}