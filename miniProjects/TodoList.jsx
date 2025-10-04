import { useState } from "react"
import "./index.css"

function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // handle input change
    function HandleInputChange(event) {
        setNewTask(event.target.value)
    }

    // add task
    function Add() {

    }

    // function delete task
    function deleteTask(index) {

    }

    // function to move task
    function moveTaskUp(index) {

    }

    // function to move task down

    function moveTaskDown(index) {

    }

    return (
        <div className="to-do-list">
            <h1>To-do List</h1>

            <div>
                <input
                    type="text"
                    placeholder="enter your task"
                    value={newTask}
                    onChange={HandleInputChange} />
            </div>
        </div>
    );
}

export default TodoList
