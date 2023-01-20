import { useState , useEffect } from "react";
import "./App.css";
//components
import Form from "./component/Form";
import Header from "./component/Header";
import TodoList from "./component/TodoList";

const App = () => {
  const initialState=JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="max-w-sm ml-4 first">
      <Header />
      <Form
        input={input}
        todos={todos}
        setTodos={setTodos}
        setInput={setInput}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
};

export default App;
