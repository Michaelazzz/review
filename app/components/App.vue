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
                <Today/>
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

  export default {
    components: {
        Today,
        Week,
        Month,
    },
    data () {
        return {
            activeTabIndex: 0
        }
    },
    methods: {
        onTabChange(tab) {
            this.activeTabIndex = tab.value;
        }
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

    .list-entry-header {
        font-weight: bold;
        font-size: 17;
        vertical-align: middle;
        margin: 0;
    }

</style>
