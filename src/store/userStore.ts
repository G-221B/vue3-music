import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
    state: () => {
        return {
            name: 'hickey',
            id: '1'
        };
    },
    getters: {
        nameAndId: (state) => {
            return state.name + state.id;
        }
    },
    actions: {
        changeName(name: string) {
            this.name = name;
        }
    }
});

export default useUserStore;
