import React, {useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, todos, setInput, setTodos, editTodo, setEditTodo }) => {


  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(()=>{
    if(editTodo){
        setInput(editTodo.title);
    }else{
        setInput("")
    }
  },[setInput,editTodo]);
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
// if editTodo is true then updateTodo will be called

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo ) { 
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: input,
          completed: false,
        },
      ]);
      setInput(" ");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }

      

  };

  return (
    <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 border">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
         
        </label>

        <input
          type="text"
          placeholder="Enter a  todo"
          value={input}
          required
          onChange={onInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onFormSubmit}
        >
          {editTodo ? "OK" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default Form;
