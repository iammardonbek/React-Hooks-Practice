import React, { useReducer, useState } from "react";
import ToDo from "./ToDo";
export const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};
const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};
const Reducer = () => {
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];
      case ACTIONS.TOGGLE_TODO:
        return todos.map((value) => {
          if (value.id === action.payload.id) {
            return { ...value, complete: !value.complete };
          }
          return todos;
        });
      case ACTIONS.DELETE_TODO:
        return todos.filter((value) => value.id !== action.payload.id);
      default:
        return todos;
    }
  }

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
    console.log(todos);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
      </form>
      {todos.map((value, index) => (
        <ToDo key={index} value={value} dispatch={dispatch} />
      ))}
    </>
  );
};

export default Reducer;
