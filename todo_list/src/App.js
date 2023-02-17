import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [errMsg, setErrMsg] = React.useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        if (todo.trim().length > 0) {
            setErrMsg(null);
            setTodos([...todos, {id: Math.floor(Math.random()*Math.pow(10, 100)), text: todo}]);
        } else {
            setErrMsg("NOPE!");
        }
        setTodo("");
    }
  
    function deleteTodo (e, todo) {
        setTodos(todos.filter(t => t.id != todo.id));
    }

  
  // Add the toggleComplete code here

  
  // Add the submitEdits code here

  
return(
<div className ="App">
    <h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
        <input type ="text" align ="right" value={todo} onChange={e => {setTodo(e.target.value);}}/>
        <p>{errMsg}</p>
        <button type ="submit">Add Todo</button>
    </form>
    <ul>
        {todos.map(todo => <li>{todo.text} <a onClick={e => deleteTodo(e, todo)}>(x)</a></li>)}
    </ul>
</div>
);
};
export default App;
