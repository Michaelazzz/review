<template>
    <GridLayout 
        columns="auto, *" 
        class="list-entry list-entry-not-done"
    >
        <Label 
            col="0"
            class="circle" 
            text=" " 
        />
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
        },
    },
}
</script>
<style scoped>
    .circle {
        width: 30;
        height: 30;
        padding: 0;
        color: #ffffff;
        font-size: 25;
        border-color: #ffffff;
        border-width: 2;
        border-radius: 40;
        margin: 0 20 0 10;
    }
</style>