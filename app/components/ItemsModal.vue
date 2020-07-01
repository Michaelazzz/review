<template>
    <GridLayout>
        <GridLayout
            rows="auto, auto, auto, auto"
            v-if="newItem"
        >
            <Label 
                row="0"
                text="Add Item"
                textWrap="true"
                class="list-entry list-entry-header"
            />
            
            <TextField 
                row="1"
                v-model="newItemName" 
                hint="Enter text..." 
                returnKeyType="done" 
                @returnPress="addItemToItems"
            />

            <Button
                row="2"
                @tap="addItemToItems"
                text="Add Item" 
            />

            <Button
                row="3"
                @tap="newItem = false"
                text="Cancel" 
            />
        </GridLayout>
        <GridLayout
            rows="auto, *, auto, auto"
            v-else
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
                @tap="newItem = true"
                text="New Item" 
            />
            <Button
                row="3"
                @tap="closeModal"
                text="Close" 
            />
        </GridLayout>
    </GridLayout>
</template>
<script>

import { mapState, mapGetters, mapMutations } from 'vuex';

export default { 
    computed: {
        ...mapState([
            'name',
            'items'
        ]),
        ...mapGetters([
            'countItems',
            'getItems',
        ]),
    },
    methods: {
        ...mapMutations([
            'ADD_ITEM_TO_TODAY',
            'ADD_ITEM_TO_ITEMS'
        ]),
        addItemToToday(item) {
            console.log(item.name)
            this.ADD_ITEM_TO_TODAY(item)
            this.closeModal()
        },
        addItemToItems() {
            if(this.itemName != ''){
                this.ADD_ITEM_TO_ITEMS({
                    name: this.newItemName,
                    status: false
                })
                this.newItemName = ''
                this.newItem = false
            }
        },
        closeModal() {
            this.$modal.close()
        },
    },
    data() {
        return {
            newItem: false,
            newItemName: '',
        }
    },
}
</script>
<style scoped>
    
</style>