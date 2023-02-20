import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState({text:''});
  const [errMsg, setErrMsg] = React.useState("");
  const [nextID, setNextID] = React.useState(0);

    function getNextID() {
        let result = nextID;
        setNextID(result+1);
        return result;
    }
  
    function handleSubmit(e) {
        e.preventDefault();
        if (todo.text && todo.text.trim().length > 0) {
            setErrMsg(null);
            if (typeof todo.id === 'undefined') {
                setTodos([...todos, {id: getNextID(), text: todo.text}]);
            } else {
                todos.map(t => {
                    if (t.id === todo.id) {
                        t.text = todo.text;
                    }
                    return t;
                });
                setTodos(todos);
            }
        } else {
            setErrMsg("NOPE!");
        }
        setTodo({text: ''});
    }
  
    function deleteTodo (e, todo) {
        setTodos(todos.filter(t => t.id !== todo.id));
    }

    function toggleComplete (e, todo) {
        todos.map(t => {
            if (t.id === todo.id) {
                t.completed = !t.completed;
            }
            return t;
        });
        setTodos(todos);
    }

    function editTodo (e, todo) {
        setTodo(todo);
    }

  
return(
<div className ="App">
    <h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
        <input type ="text" align ="right" value={todo.text} onChange={e => setTodo({...todo, text: e.target.value})}/>
        <p>{errMsg}</p>
        <button type ="submit">Add Todo</button>
    </form>
    <ul>
        {todos.map(todo => (
            <li id={todo.id}>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleComplete(e, todo)}/>
                <a onClick={e => editTodo(e, todo)}>{todo.text}</a>

                <a onClick={e => deleteTodo(e, todo)}>(x)</a>
            </li>)
        )}
    </ul>
</div>
);
};
export default App;
