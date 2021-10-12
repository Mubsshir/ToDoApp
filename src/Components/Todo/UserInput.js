import React, { useState } from 'react';
import "./UserInput.css"

const UserInput = (props) => {
    const [userInput, setUserInput] = useState('')
    const [isValid, setIsValid] = useState()
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
                style={{
                    boxShadow: !isValid ? '0 0 1rem 0 rgba(200,50,255,.5)' : '0 0 1rem 0 rgba(0,255,0,0.5)',
                    backgroundColor: !isValid ? '' : 'white'
                }}
                type="text" placeholder="What to do today..?"
                onChange={inputChangeHandler} value={userInput} />
            <input type="submit" value="Add" />
        </form>

    )
}

export default UserInput
