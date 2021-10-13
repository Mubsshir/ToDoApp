import React, { useState } from 'react'
import './TodoTask.css'
import Card from '../UI/Card'

const TodoTask = (props) => {
    const [isComplete, setIsComplete] = useState(false)
    const onCompleteHandler = () => {
        if (!isComplete) {
            setIsComplete(true)
        }
        else {
            setIsComplete(false)
        }
    }
    return (

        <Card className="todo_item">
            <h3 className={`${isComplete ? 'complete' : ''}`}> {props.task.todo}</h3>
            <div className="task_btn">
                <div className="done" onClick={onCompleteHandler} ><i className="fas fa-check"></i></div>
                <div onClick={() => props.onRemove(props.task.id)} className="delete"><i className="fas fa-trash-alt"></i></div>
            </div>
        </Card>
    )
}

export default TodoTask
