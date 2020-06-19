<template>
    <ListView 
        :row="row" 
        class="list-group" 
        for="item in list"
    >
        <v-template>
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
        },
    }
}
</script>