import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../reducers/index";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mapStateToProps = state => {
  return {todos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: todoInfo => dispatch(addTodos(todoInfo))
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const add = () => {
    if (todo === "") {
      toast.warning("Todo text can not empty", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={event => setTodo(event.target.value)}
        className="todo-input"
        value={todo}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
      <ToastContainer />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
