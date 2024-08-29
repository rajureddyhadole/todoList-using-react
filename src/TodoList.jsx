
import React, {useState} from "react";

function TodoList() {

	const [tasks, setTasks] = useState(["eat breakfast", "take shower", "walk the dog"]);
	const [newTask, setNewTask] = useState("");

	const handleAddTask = () => {
		if (newTask.trim() !== "") {
			setTasks(t => [...t, newTask]);
			setNewTask("");
		}
	}

	const handleRemoveTask = (index) => {
		const updatedTasks = tasks.filter((_, i) => i !== index );
		setTasks(updatedTasks);
	}

	const handleInputChange = (event) => {
		setNewTask(event.target.value);
	}

	const handleMoveUp = (index) => {
		if (index > 0) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
			setTasks(updatedTasks);
		}
	}

	const handleMoveDown = (index) => {
		if (index < tasks.length -1) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
			setTasks(updatedTasks);
		}
	}
	
	return (<div className="container">
						<h2>Todo List</h2>
						<input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
						<button className="add-button" onClick={handleAddTask}>Add</button>
						<ol>
							{tasks.map((task, index) => <li className="list-items" key={index}>
								<span className="text">{task}</span>
								<div className="buttons-container">
									<button className="delete-button" onClick={() => handleRemoveTask(index)}>Delete</button>
									<button className="up-button" onClick={() => handleMoveUp(index)}>☝️</button>
									<button className="down-button" onClick={() => handleMoveDown(index)}>👇</button>
								</div>
							</li>)}
						</ol>
					</div>);
}

export default TodoList;