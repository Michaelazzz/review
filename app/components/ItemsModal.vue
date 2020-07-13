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
                class="modal-header"
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
            rows="auto, 300, auto, auto"
            v-else
        >
            <Label 
                row="0"
                text="My Items"
                textWrap="true"
                class="modal-header"
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
                            @tap="emitAndClose(item)"
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

import * as http from "http";

export default { 
    props: {

    },
    data() {
        return {
            items: [],
            newItem: false,
            newItemName: '',
        }
    },
    mounted() {
        this.fetchItems();
    },
    methods: {
        fetchItems() {
            http.getJSON("https://run.mocky.io/v3/21d8468a-d833-4300-b492-f7ea3fd18e10")
            .then(response => {
                this.items = response.data
            }, error => {
                console.log(error)
            });
        },
        addItem(item) {
            console.log(JSON.stringify(item))
            http.request({
                url: "https://run.mocky.io/v3/f34ce496-d288-4d80-83e4-aa573e926403",
                method: "POST",
                content: JSON.stringify(item)
            }).then(response => {
                console.log("item added")
                // console.log(response.content.toJSON().data)
            }, error => {
                console.log(error)
            });
        },
        emitAndClose(item) {
            this.$modal.close(item)
        },
        addItemToItems() {
            if(this.itemName != ''){
                
                this.addItem({
                    name: this.newItemName
                })

                this.newItemName = ''
                this.newItem = false

                this.fetchItems()
            }
        },
        closeModal() {
            this.$modal.close()
        },
    },
    
}
</script>
<style scoped>
    .modal-header {
        font-weight: bold;
        font-size: 17;
        vertical-align: middle;
        padding: 15 0 10 15;
        margin: 0;
    }
</style>