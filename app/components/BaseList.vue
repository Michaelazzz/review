<template>
    <ListView 
        :row="row" 
        class="list-group" 
        for="item in list"
    >
        <v-template>
            <Label :text="item.name" textWrap="true" />
        </v-template>
    </ListView>
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
        }
    }
}
</script>