import React, { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(name && name){
      props.addTask(name);
    
    toast.success('Task Added !', {
            position: toast.POSITION.TOP_RIGHT
        });

        setName("");
    }
    else{
     toast.warning('Add the Task !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit"  className="btn btn__primary btn__lg">
        Add
      </button>
              <ToastContainer />

    </form>
    
  );
}

export default Form;
