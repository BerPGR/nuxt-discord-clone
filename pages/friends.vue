<template>
    <div>
        <p>{{ this.group }}</p>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            group: {}

        }
    },

    mounted() {
        this.group = this.$route.params.group
    }
}
</script>

<style>

</style>