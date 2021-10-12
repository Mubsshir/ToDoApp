import React from 'react';
import TodoTask from './TodoTask';
import './TodoBox.css'

const TodoBox = (props) => {
    let todoItems;

    if ((props.todos.length) === 0) {
        todoItems = (<h4> "You didn't add any Task"</h4>)
    }
    else {
        todoItems = props.todos.map(task => <TodoTask onRemove={props.removeItem} key={task.id} task={task} />)
    }


    return (
        <div className="todo_box">
            {todoItems}
        </div>
    )
}

export default TodoBox
