<template>
    <ListView 
            row="auto" 
            class="list-group" 
            for="item in list"
            @itemTap="onItemTap"
        >
            <v-template>
                <Label :text="item.name" textWrap="true" />
            </v-template>
        </ListView>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>