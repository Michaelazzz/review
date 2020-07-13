<template>
    <Button>
        <span
            v-if="type == '...'"
        >...</span>
        <span
            v-else-if="type == 'X'"
        >X</span>
    </Button>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: '...'
        }
    }
}
</script>
<style scoped>
    
</style>