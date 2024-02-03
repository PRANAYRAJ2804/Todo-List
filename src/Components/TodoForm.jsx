import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../utils/Button.css";
// import Button from '../utils/Button'


const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuidv4(),
      text: input
    });
    setInput('')
  };

  const Button = () => {
    return (
      <>
        <div className="plusButton" onClick={handleSubmit}>
          <svg
            className="plusIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
          >
            <g mask="url(#mask0_21_345)">
              <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
            </g>
          </svg>
        </div>
      </>
    );
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>

      {props.edit ? (
        <>
        <input
        type="text"
        placeholder="Edit your task"
        value={input}
        name="text"
        className="todo-input edit" 
        onChange={handleChange}
        autoComplete="off"
        ref= {inputRef}
      />
      <button onClick={handleSubmit} className="todo-button edit">Update</button>\
      {/* name attribute is used for reference of that input folder */}
      </>
      ): (
      <>
      <input
      type="text"
      placeholder="Add a task"
      value={input}
      name="text"
      className="todo-input" 
      onChange={handleChange}
      autoComplete="off"
      ref= {inputRef}
    />
    <Button />
    {/* <button onClick={handleSubmit} className="todo-button">Add Task</button> */}
    {/* name attribute is used for reference of that input folder */}
    </>
    )}
    </form>
  );
};

export default TodoForm;
