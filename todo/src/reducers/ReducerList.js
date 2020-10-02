
export const initialState = [
    {
        item: 'Avoid Catching Feels For COVID-19',
        completed: false,
        id: Date.now()
    }
];

export const ReducerList = (state, action) => {
    switch (action.type) {
        case "ADD-TODO":
            const newTodo = {
                item: action.addon,
                completed: false,
                id: Date.now()
            }
            return [...state, newTodo]
        case "COMPLETED":
            return state.map(e => e.id === action.id ? { ...e, completed: !e.completed } : e);
        case "REMOVE":
            return state.filter(e => !e.completed);



        default:
            throw state;
    }
}; 