interface Options<T, G> {
    state: () => T;
    getters?: {
        [K in keyof G]: (state: T) => G[K];
    };
}

function defineStore<T, G>(options: Options<T, G>): void {
    console.log('hickey', options);
}

defineStore({
    state: () => {
        return {
            name: 'hickey',
            age: 18
        };
    },
    getters: {
        getName(state) {
            return state.name;
        },
        getAge(state) {
            console.log(state.age);
            if (state.age > 18) {
                return 1;
            } else {
                return '1';
            }
        }
    }
});

function add(num: number, num2: number): number {
    return num + num2;
}

console.log(add(1, 2));
