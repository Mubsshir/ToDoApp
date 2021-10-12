import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/UI/Card';
import UserInput from './Components/Todo/UserInput';
import TodoBox from './Components/Todo/TodoBox';

const App = () => {
  const taskStorage = JSON.parse(localStorage.getItem('tasks'));
  const deleteItemHandler = (id) => {
    setUserTask(prev => {
      return prev.filter(task => task.id !== id)
    })
  }
  const [userTask, setUserTask] = useState(taskStorage || []);
  const addTaskHandler = (task) => {
    setUserTask(prev => {
      return [task, ...prev]
    })
  }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(userTask))
  })

  return (

    <div className="app">
      <Card className="user_form">
        <UserInput addTask={addTaskHandler} />
      </Card>
      <Card className="todo_list">
        <TodoBox todos={userTask} removeItem={deleteItemHandler} />
      </Card>
    </div>

  )
}

export default App
