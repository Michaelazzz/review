<template>
    <GridLayout rows="auto, auto, *, auto, *, auto">
        <Label 
            row="0" 
            class="header"
            textWrap="true"
        >Hi {{ name }}, what do you want to do today?</Label>

        <Label 
            row="1" 
            text="Not Done"
            textWrap="true"
            class="list-entry list-entry-header"
        />
        <ListView 
            row="2" 
            class="list-group" 
            for="item in todayNotDoneItems"
        >
            <v-template>
                <GridLayout 
                    columns="auto, *" 
                    class="list-entry list-entry-not-done"
                >
                    <Label 
                        col="1" 
                        v-on:tap="onNotDoneItemTap(item)"
                        :text="item.name" 
                        textWrap="true" 
                    />
                </GridLayout>
            </v-template>
        </ListView>

        <Label 
            row="3" 
            text="Done"
            textWrap="true"
            class="list-entry list-entry-header"
        />
        <ListView 
            row="4" 
            class="list-group" 
            for="item in todayDoneItems"
        >
            <v-template>
                <GridLayout 
                    columns="*" 
                    class="list-entry list-entry-done"
                >
                    <Label 
                        col="0" 
                        v-on:tap="onDoneItemTap(item)"
                        :text="item.name" 
                        textWrap="true" 
                    />
                    <ResourceActionButton
                        col="1"

                    />
                </GridLayout>
            </v-template>
        </ListView>

        <!-- button to display list of items -->
        <Button 
            row="5"
            text="Add Item" 
            @tap="addItemModal"
        />

    </GridLayout>
</template>
<script>

import { mapState, mapGetters } from 'vuex';
import BaseList from './BaseList';
import BaseModalVue from './BaseModal.vue';
import ResourceActionButton from './ResourceActionButton.vue';

export default {
    components: {
        BaseList,
        ResourceActionButton
    },
    props: {

    },
    data() {
        return {
            
            
        };
    },
    mounted() {
        
    },
    computed: {
        ...mapState([
            'name',
            'items',
            'todayNotDoneItems',
            'todayDoneItems'
        ]),
        ...mapGetters([
            'countItems',
            'getItems'
        ])
    },
    methods: {
        addItemModal() {
            this.$showModal(BaseModalVue)
        },
        onNotDoneCircleTap(item) {
            const index = this.todayNotDoneItems.indexOf(item);
            this.todayDoneItems.unshift(item);
            this.todayNotDoneItems.splice(index, 1);
        },
        onNotDoneItemTap(item) {
            const index = this.todayNotDoneItems.indexOf(item);
            const cancel = "Cancel";
            const markDone = "Mark done";
            const deleteItem = "Delete";

            action("What do you want to do with this task?", 
                cancel, 
                [
                    markDone,
                    deleteItem
                ])
            .then(result => {
                console.log(result);
                switch (result) {
                    case markDone:
                        this.todayDoneItems.unshift(item);
                        this.todayNotDoneItems.splice(index, 1);
                        break;
                    case deleteItem:
                        this.todayNotDoneItems.splice(index, 1);
                        break;
                    case cancel || undefined:
                        break;
                }
            });
        },
        onDoneCircleTap(item) {
            const index = this.todayDoneItems.indexOf(item);
            this.todayNotDoneItems.unshift(item);
            this.todayDoneItems.splice(index, 1);
        },
        onDoneItemTap(item) {
            const index = this.todayDoneItems.indexOf(item);
            const cancel = "Cancel";
            const markNotDone = "Mark not done";
            const deleteItem = "Delete";

            action("What do you want to do with this task?", 
                cancel, 
                [
                    markNotDone,
                    deleteItem
                ])
            .then(result => {
                console.log(result);
                switch (result) {
                    case markNotDone:
                        this.todayNotDoneItems.unshift(item);
                        this.todayDoneItems.splice(index, 1);
                        break;
                    case deleteItem:
                        this.todayDoneItems.splice(index, 1);
                        break;
                    case cancel || undefined:
                        break;
                }
            });
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

    .list-entry-done Label {
        text-decoration: line-through;
    }
</style>