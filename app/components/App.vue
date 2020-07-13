<template>
    <Page>
        <ActionBar title=" " flat="true"/>
            <BottomNavigation 
                :selectedIndex="activeTabIndex"
                @selectedIndexChange="onTabChange"
            >
            <TabStrip>
                <TabStripItem>
                    <Label text="Today"></Label>
                </TabStripItem>
                <TabStripItem>
                    <Label text="Week"></Label>
                </TabStripItem>
                <TabStripItem>
                    <Label text="Month"></Label>
                </TabStripItem>
            </TabStrip>

            <!-- Today Tab -->
            <TabContentItem>
                <!-- <Today/> -->
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
                                        :text="item.name" 
                                        :class="{ 'list-entry-done': item.status }"
                                        textWrap="true" 
                                        @tap="onItemTap(item)"
                                    />
                                    <ResourceActionButton
                                        col="1"
                                        alignSelf="flex-end"
                                        type="..."
                                        @tap="onItemButtonTap"
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
            </TabContentItem>

            <!-- Week Tab -->
            <TabContentItem>
                <Week/>
            </TabContentItem>

            <!-- Month Tab -->
            <TabContentItem>
                <Month/>
            </TabContentItem>
        </BottomNavigation>
    </Page>
</template>

<script >

import Today from './Today';
import Week from './Week';
import Month from './Month';

import ItemsModalVue from './ItemsModal.vue';
import ResourceActionButton from './ResourceActionButton';

  export default {
    components: {
        Today,
        Week,
        Month,
        ResourceActionButton
    },
    data () {
        return {
            activeTabIndex: 0,
            name: "Michaela",
            today: [],
        }
    },
    methods: {
        addItemToToday(item) {
            this.today.unshift(item)
        },
        onTabChange(tab) {
            this.activeTabIndex = tab.value;
        },
        addItemModal() {
            this.$showModal(ItemsModalVue)
            .then(data => {
                if(data) //if data has been returned
                {
                    //check if data is in the array

                    this.addItemToToday(data)
                }
            })
        },
        onItemTap(item) {
            if(!item.status)
            {
                this.today.push(this.today.splice(this.today.indexOf(item), 1)[0])            }
            else
            {
                this.today.unshift(this.today.splice(this.today.indexOf(item), 1)[0])
            }

            item.status = !item.status
        },
        onItemButtonTap(){
            
        },
    },
  }
</script>

<style>
    ActionBar {
        /* background-color: #53ba82; */
        color: #ffffff;
    }

    .header {
        /* background-color: #35495E; */
        color: black;
        font-size: 34;
        font-weight: 600;
        padding: 0 15 15 15;
        margin: 0;
    }

    .list-entry {
        padding: 0 15;
    }

    .list-entry Label {
        font-weight: bold;
        font-size: 17;
        vertical-align: middle;
        padding: 17 0;
        margin: 0;
    }

    .list-entry-done {
        text-decoration: line-through;
    }

    .list-entry-header {
        font-weight: bold;
        font-size: 17;
        vertical-align: middle;
        margin: 0;
    }

</style>
