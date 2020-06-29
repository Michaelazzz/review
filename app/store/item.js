export default {
	state: {
		id: null,
        name: '',
        subItems: [],
    },
    getters: {
        getItemByName: (state) => (name) => {
			return state.items.find(item => item.name === name)
		},
		getItemById: (state) => (id) => {
			return state.items.find(item => item.id === id)
		}
    },
	mutations: {
		addItem(state, item) {
			state.items.push(item)
		},
		deleteItem(state, item) {
			const index = state.items.indexOf(item)
			state.item.splice(index, 1)
		}
	},
	actions: {

	}
};