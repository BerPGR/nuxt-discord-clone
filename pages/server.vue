<template>
    <div>{{ this.group }}</div>
</template>

<script>
export default {
    data() {
        return {
            group: {},
        }
    },

    mounted() {
        this.group = this.$route.params.gp
    }
}
</script>

<style>

</style>