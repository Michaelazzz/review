import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

	state: {
		name: 'Michaela',
		items: [
			{
				id: 1,
				name: 'Workout'
			},
			{
				id: 2,
				name: 'Read nonfiction book'
			},
			{
				id: 3,
				name: 'Do something fun'
			},
			{
				id: 4,
				name: 'Mood'
			},
			
		],
		today: [
			{
				id: 6,
				name: 'Work on REVEIW',
				status: false
			},
			{
				id: 5,
				name: 'Eat chocolate',
				status: true
			},
		],
	},
	getters: {
		countItems: state => {
			return state.items.length
		},
		getItems: (state) => {
			return state.items
		},
		getNumberOfItems: (state) => {
			return state.items.length
		},
		getItemByName: (state) => (name) => {
			return state.items.find(item => item.name === name)
		},
		getItemById: (state) => (id) => {
			return state.items.find(item => item.id === id)
		},
		getItemStatus: item => {
			return item.status
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
            state.today.unshift(item);
            state.items.splice(index, 1);
		},
		ADD_ITEM_TO_ITEMS: (state, item) => {
            state.items.unshift(item);
		},
		// addItem(state, item) {
		// 	state.items.push(item)
		// },
		// deleteItem(state, item) {
		// 	const index = state.items.indexOf(item)
		// 	state.item.splice(index, 1)
		// }
	},
	actions: {

	}
});
