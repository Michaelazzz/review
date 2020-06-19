<template>
    <GridLayout rows="auto, *, *">
        <Label 
            row="0" 
            text="Today"
            class="header"
        ></Label>

        <ListView 
            row="1" 
            class="list-group" 
            for="item in todayNotDoneItems"
        >
            <v-template>
                <GridLayout 
                    columns="auto, *" 
                    class="list-entry list-entry-not-done"
                >
                    <Label 
                        col="0"
                        v-on:tap="onNotDoneCircleTap(item)"
                        class="circle" 
                        text=" " 
                    />
                    <Label 
                        col="1" 
                        v-on:tap="onNotDoneItemTap(item)"
                        :text="item.name" 
                        textWrap="true" 
                    />
                </GridLayout>
            </v-template>
        </ListView>

        <ListView 
            row="2" 
            class="list-group" 
            for="item in todayDoneItems"
        >
            <v-template>
                <GridLayout 
                    columns="*" 
                    class="list-entry list-entry-done"
                >
                    <Label 
                        col="1" 
                        v-on:tap="onDoneItemTap(item)"
                        :text="item.name" 
                        textWrap="true" 
                    />
                </GridLayout>
            </v-template>
        </ListView>

        <!-- button to display list of items -->
    </GridLayout>
</template>
<script>

import BaseList from './BaseList';

export default {
    components: {
        BaseList,
    },
    props: {

    },
    data() {
        return {
            items: [
                {
                    name: "Workout"
                },
                {
                    name: "Read nonfiction book"
                },
                {
                    name: "Do something fun"
                }
            ],
            todayNotDoneItems: [
                {
                    name: "Workout"
                },
                {
                    name: "Read nonfiction book"
                },
                {
                    name: "Do something fun"
                }
            ],
            todayDoneItems: [
                {
                    name: "Mood"
                }
            ],
        };
    },
    methods: {
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
    }
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