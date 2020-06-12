<template>
    <GridLayout rows="auto, auto, *">
        <Label 
            row="0" 
            text="Today"
        ></Label>
        <ListView 
            row="2" 
            class="list-group" 
            for="item in todayItems"
            @itemTap="onItemTap"
        >
            <v-template>
                <Label :text="item.name" textWrap="true" />
            </v-template>
        </ListView>
        <ListView 
            row="2" 
            class="list-group" 
            for="item in todayDoneItems"
            @itemTap="onItemTap"
        >
            <v-template>
                <Label :text="item.name" textWrap="true" />
            </v-template>
        </ListView>
    </GridLayout>
</template>
<script>
export default {
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
            todayItems: [
                {
                    name: "Workout"
                },
            ],
            todayDoneItems: [],
        };
    },
    methods: {
        onTodoItemTap(item) {
            const index = this.todos.indexOf(item);
            const cancel = "Cancel";
            const markCompleted = "Mark completed";
            const deleteForToday = "Delete for today";

            action("What do you want to do with this task?", 
                cancel, 
                [
                    markCompleted,
                    deleteForToday,
                ])
            .then(result => {
                console.log(result);
                switch (result) {
                    case markCompleted:
                        this.todayDoneItems.unshift(item);
                        this.todayItems.splice(index, 1);
                        break;
                    case deleteForToday:
                        this.todayItems.splice(index, 1);
                        break;
                    case cancel || undefined:
                        break;
                }
            });
        },
        // onTodoCircleTap(item) {
        //     const index = this.todos.indexOf(item);
        //     this.dones.unshift(item);
        //     this.todos.splice(index, 1);
        //     this.activeTabIndex = 1;
        // },
        // onCompletedItemTap(item) {
        //     const index = this.dones.indexOf(item);
        //     const cancel = "Cancel";
        //     const markActive = "Mark active";
        //     const deleteForToday = "Delete for today";

        //     action("What do you want to do with this task?", 
        //         cancel, 
        //         [
        //             markActive,
        //             deleteForToday
        //         ])
        //     .then(result => {
        //         console.log(result);
        //         switch (result) {
        //             case "Mark Incomplete":
        //                 this.todos.unshift(item);
        //                 this.dones.splice(index, 1);
        //                 this.activeTabIndex = 0;
        //                 break;
        //             case "Delete for the day":
        //                 this.dones.splice(index, 1);
        //                 break;
        //             case "Cancel" || undefined:
        //                 break;
        //         }
        //     });
        // },
        // onCompletedCircleTap(item) {
        //     const index = this.dones.indexOf(item);
        //     this.todos.unshift(item);
        //     this.dones.splice(index, 1);
        //     this.activeTabIndex = 0;
        // },
    }
}
</script>