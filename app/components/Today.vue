<template>
    <GridLayout 
        rows="auto, *, auto"
    >
        <Label 
            row="0" 
            class="header"
            textWrap="true"
        >Hi {{ name }}, what do you want to do today?</Label>

        <ScrollView
            row="1"
        >
            <ListView  
                for="item in today"
            >
                <v-template>
                    <GridLayout
                        class="list-entry"
                        columns="*, 75"
                    >
                        <Label 
                            col="0"
                            v-on:tap="onItemTap(item)"
                            :text="item.name" 
                            :class="{ 'list-entry-done': item.status }"
                            textWrap="true" 
                        />
                        <ResourceActionButton
                            col="1"
                            alignSelf="flex-end"
                            type="..."
                            v-on:tap="onItemButtonTap(item)"
                        />
                    </GridLayout>
                </v-template>
                
            </ListView>
            
        </ScrollView>
        <!-- button to display list of items -->
        <Button 
            row="2"
            text="Add Item" 
            @tap="addItemModal"
        />

    </GridLayout>
</template>
<script>

import { mapState, mapGetters } from 'vuex';
import ResourceActionButton from './ResourceActionButton';
import ItemsModalVue from './ItemsModal.vue';

export default {
    components: {
        ResourceActionButton
    },
    props: {

    },
    data() {
        return {
            items: null,
        }
    },
    
    computed: {
        ...mapState([
            'name',
            'items',
            'today',
        ]),
        ...mapGetters([
            'countItems',
            'getItems',
        ]),
        getItems(){
            return this.$store.getters.items
        }
    },
    methods: {
        addItemModal() {
            this.$showModal(ItemsModalVue)
        },
        onItemTap(item) {
            console.log(item.status)
            if(item.status){
                //if item has not done
                
            }
            else{
                //if it is done
            }
        },
        onItemButtonTap(){
            this.$showModal(ItemModalVue)
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
        border-color: #808080;
        border-width: 2;
        border-radius: 40;
        margin: 0 20 0 0;
    }

    .list-entry-done {
        text-decoration: line-through;
    }
</style>