import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		name: 'Michaela',
		items: [
			{
				id: 1,
				name: "Workout"
			},
			{
				id: 2,
				name: "Read nonfiction book"
			},
			{
				id: 3,
				name: "Do something fun"
			},
			{
				id: 4,
				name: "Mood"
			},
			{
				id: 5,
				name: "Eat chocolate"
			},
			{
				id: 6,
				name: "Work on REVEIW"
			},
		],
		todayNotDoneItems: [],
		todayDoneItems: [],
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
		}
	},
	mutations: {
		ADD_ITEM_TO_TODAY: (state, item) => {
			const index = state.items.indexOf(item);
            state.todayNotDoneItems.unshift(item);
            state.items.splice(index, 1);
		}
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
