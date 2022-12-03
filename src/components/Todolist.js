import React, {useState} from "react";
import Todo from "./Todo";
import Todoform from "./Todoform";
function Todolist(){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        // console.log(todo,...todos)
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
        // console.log(todo,...todos)
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !==id);
        setTodos(removeArr);
    }
        
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id ) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    return (
        <div>
            <h1>What is the plan for today?</h1>
            <Todoform onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>

        </div>
    )
}

export default Todolist