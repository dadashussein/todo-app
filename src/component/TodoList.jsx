import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };



  return (
      <ul className="rounded w-full px-5 ">
        {todos.map((todo) => (
          <li
            className="px-8 py-2 my-2 border-2 border-rose-400  rounded-lg flex justify-between"
            key={todo.id}
          >
            <input
              type="text"
              value={todo.title}
              onChange={(e) => e.preventDefault()}
              className={`${todo.completed  && "line-through text-gray-500"}`}
            />
            <div className="flex gap-6  pl-1 rounded text-lg text-red-400 ">
              <button
                className="button-complete"
                onClick={() => handleComplete(todo)}
              >
                <i className="fa fa-check-circle text-green-500 "></i>
              </button>
              <button className="button-edit " onClick={() => handleEdit(todo)}>
                <i className="fa fa-edit text-orange-300 "></i>
              </button>
              <button
                className="button-delete"
                onClick={() => handleDelete(todo)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
  );
};

export default TodoList;
