import React, { useState } from 'react';
import "./UserInput.css"

const UserInput = (props) => {
    const [userInput, setUserInput] = useState('')
    const [isValid, setIsValid] = useState(true)
    const inputChangeHandler = (e) => {
        if (e.target.value.trim().length > 0) {
            setIsValid(true)
        }
        else {
            setIsValid(false)
        }
        setUserInput(e.target.value)

    }
    const taskSubmitHandler = (e) => {
        e.preventDefault();
        if (userInput.trim().length === 0) {
            setIsValid(false);
            return;
        }

        const taskDetails = {
            id: Math.floor(Math.random() * 1000).toString(),
            todo: userInput
        }
        props.addTask(taskDetails);
        setUserInput('');

    }

    return (
        <form onSubmit={taskSubmitHandler} className="user__form">
            <input
                className={`${!isValid ? 'invalid' : ''}`}
                type="text" placeholder="What to do today..?"
                onChange={inputChangeHandler} value={userInput} />
            <input type="submit" value="Add" />
        </form>

    )
}

export default UserInput
