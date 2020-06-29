<template>
        <GridLayout
            rows="auto, *, auto"
        >
            <Label 
                row="0"
                text="My Items"
                textWrap="true"
                class="list-entry list-entry-header"
            />
            <ListView 
                row="1"
                class="list-group" 
                for="item in items"
            >
                <v-template>
                    <GridLayout  
                        class="list-entry list-entry-not-done"
                    >
                        <Label 
                            @tap="addItemToToday(item)"
                            :text="item.name" 
                            textWrap="true" 
                        />
                    </GridLayout>
                </v-template>
            </ListView>
            <Button
                row="2"
                @tap="closeModal"
                text="Close" 
            />
        </GridLayout>
</template>
<script>

import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState([
            'name',
            'items'
        ]),
        ...mapGetters([
            'countItems',
            'getItems'
        ]),
    },
    methods: {
        ...mapMutations([
            'ADD_ITEM_TO_TODAY'
        ]),
        addItemToToday(item) {
            console.log(item.name)
            this.ADD_ITEM_TO_TODAY(item)
            this.closeModal()
        },
        closeModal() {
            this.$modal.close()
        }
    },
    
}
</script>
<style scoped>

</style>