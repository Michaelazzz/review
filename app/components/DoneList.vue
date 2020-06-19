<template>
    
</template>
<script>
export default {
    props: {
        row: {
            type: String,
            default: "*, *"
        },
        list: {
            type: Array,
            default: () => []
        },
    }
}
</script>
<style scoped>
    .list-entry-done Label {
        text-decoration: line-through;
    }
</style>