import React, { useReducer, useState } from 'react';
import { ReducerList, initialState } from "./../reducers/ReducerList";
import Todo from "./Todo";


const TodoForm = () => {

    const [state, dispatch] = useReducer(ReducerList, initialState);
    const [todo, setTodo] = useState("");

    const handleChange = e => {
        setTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD-TODO", addon: todo });
    }

    const handleClear = e => {
        e.preventDefault();
        dispatch({ type: "REMOVE", addon: todo })
    }

    console.log("Checking State", state);

    return (
        <div className="form">
            <form>
                <label htmlFor="todo">Add Todo: </label>
                <input
                    id="todo"
                    name="todo"
                    type="text"
                    value={todo}
                    onChange={handleChange}
                ></input>
                <button onClick={handleSubmit}>Add</button>
                <button onClick={handleClear}>Clear</button>
            </form>
            <div className='todo-list'>
            <Todo id={state.id} todo={todo} dispatch={dispatch} state={state} />
            </div>
        </div>
    );
}

export default TodoForm;