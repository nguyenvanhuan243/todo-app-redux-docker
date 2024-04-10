import React, { useState } from "react";
import { connect } from "react-redux";
import {
  completeTodos,
  removeTodos,
  updateTodos
} from "../reducers/index";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = state => {
  return { todos: state };
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch(removeTodos(id)),
    completeTodo: id => dispatch(completeTodos(id)),
    updateTodo: todoInfo => dispatch(updateTodos(todoInfo))
  }
};

const renderTodoList = (props, todoType) => {
  let filterList = props.todos
  const isCompleted = todoType === 'completed'
  if (todoType !== 'all') filterList = props.todos.filter(item => item.completed === isCompleted)
  return (
    filterList.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        removeTodo={props.removeTodo}
        updateTodo={props.updateTodo}
        completeTodo={props.completeTodo}
      />
    ))
  )
}

const TodoList = (props) => {
  const [todoType, setTodoType] = useState('active');
  return (
    <div className="displaytodos">
      <div className="buttons">
        {
          ['active', 'completed', 'all'].map(item => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTodoType(item)}
            >
              {item.toUpperCase()}
            </motion.button>
          ))
        }
      </div>
      <ul>
        <AnimatePresence>
          {renderTodoList(props, todoType)}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
