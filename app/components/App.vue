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
    }
  }
</script>

<style scoped>
    ActionBar {
        /* background-color: #53ba82; */
        color: #ffffff;
    }
</style>
