import React from "react";
import Todo from './Todo';

const TodoList = (props) => {

    const {todos, toggleComplete} = props;

    return (
        <div className= 'todo'>
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} toggleComplete={toggleComplete} />
          ))}
        </div>
      );

};

export default TodoList;