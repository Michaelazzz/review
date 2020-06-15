<template>
    <ListView 
        :row="row" 
        class="list-group" 
        for="item in list"
    >
        <v-template>
            <BaseListItem
                v-if="type === ''"
                :item=item
            />
            <DoneListItem
                v-else-if="type === 'done'"
                :item="item"
            />
            <NotDoneListItem
                v-else-if="type === 'not-done'"
                :item="item"
            />
        </v-template>
    </ListView>
</template>
<script>

import NotDoneListItem from './NotDoneListItem';
import DoneListItem from './DoneListItem';
import BaseListItem from './BaseListItem';

export default {
    components: {
        NotDoneListItem,
        DoneListItem,
        BaseListItem,
    },
    props: {
        row: {
            type: String,
            default: "*, *"
        },
        list: {
            type: Array,
            default: () => []
        },
        type: {
            type: String,
            default: "",
        }
    }
}
</script>