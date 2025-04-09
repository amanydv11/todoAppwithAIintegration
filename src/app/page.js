'use client';

import { useState } from 'react';
import { CheckCircle, Trash2 } from 'lucide-react';
import { CopilotPopup } from "@copilotkit/react-ui";
import { useCopilotAction } from "@copilotkit/react-core";
export default function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = (todoText) => {
    if (task.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  useCopilotAction({
    name: "addTodoItem",
    description: "Add a new todo item to the list",
    parameters: [
      {
        name: "todoText",
        type: "string",
        description: "The text of the todo item to add",
        required: true,
      },
    ],
    handler: async ({ todoText }) => {
      setTodos([...todos, todoText]);
    },
  });

  return (
    <div className="max-w-lg mx-auto mt-14 bg-white shadow-xl rounded-2xl p-8 transition-all">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">🧠 TodoAI</h1>

      <div className="flex items-center space-x-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-grow p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          onClick={()=>addTask(newTodo)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {todos.length === 0 && (
          <p className="text-center text-gray-400 italic">No tasks added yet.</p>
        )}
        {todos.map((todo,index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-xl hover:bg-gray-200 transition"
          >
            <div
              onClick={() => toggleComplete(todo.id)}
              className={`flex items-center gap-2 cursor-pointer select-none ${
                todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
              }`}
            >
              <CheckCircle
                className={`w-5 h-5 transition-all ${
                  todo.completed ? 'text-green-500' : 'text-gray-300'
                }`}
              />
              <span>{todo}</span>
            </div>
            <button
              onClick={() => deleteTask(todo.id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </li>
        ))}
      </ul>
      <CopilotPopup
        instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
      />
    </div>
  );
}
