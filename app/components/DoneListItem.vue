<template>
    <GridLayout 
        columns="auto, *" 
        class="list-entry list-entry-done"
    >
        <Label 
            col="1" 
            :text="item.name" 
            textWrap="true" 
        />
    </GridLayout>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {},
        }
    }
}
</script>
<style scoped>
    .list-entry-done Label {
        text-decoration: line-through;
    }
</style>