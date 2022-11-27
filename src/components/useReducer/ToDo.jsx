import React from "react";
import { ACTIONS } from "./useReducer";

const ToDo = ({ value, dispatch }) => {
  return (
    <>
      <span style={{ color: value.complete ? "#AAA" : "#000" }}>
        {value.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: value.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: value.id } })
        }
      >
        Delete
      </button>
    </>
  );
};

export default ToDo;
