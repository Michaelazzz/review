import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

	state: {
		name: 'Michaela',
		items: [
			{
				id: 1,
				name: 'Workout',
			},
			{
				id: 2,
				name: 'Read nonfiction book',
			},
			{
				id: 3,
				name: 'Do something fun',
			},
			{
				id: 4,
				name: 'Mood',
			},
			{
				id: 6,
				name: 'Work on REVEIW',
			},
			{
				id: 5,
				name: 'Eat chocolate',
			},
			
		],
		today: [
			
		],
	},
	getters: {
		countItems: state => {
			return state.items.length
		},
		inItems: name => {
			if(state.items.indexOf(item)){
				return true
			}
			return false
		}
	},
	mutations: {
		ADD_ITEM_TO_TODAY: (state, item) => {
			const index = state.items.indexOf(item);
			state.items[index].status = false;
			state.today.unshift(item);
            state.items.splice(index, 1);
		},
		ADD_ITEM_TO_ITEMS: (state, item) => {
            state.items.unshift(item);
		},
		REMOVE_ITEM_FROM_TODAY: (state, item) => {
			const index = state.today.indexOf(item)
			state.today.splice(index, 1)
		},
		REMOVE_ITEM_FROM_ITEMS: (state, item) => {
			const index = state.items.indexOf(item)
			state.items.splice(index, 1)
		},
	},
	actions: {

	}
});
