<template>
    <GridLayout 
        columns="auto, *" 
        class="list-entry"
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