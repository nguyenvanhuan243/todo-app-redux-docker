import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload)
      return state
    },
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
    updateTodos: (state, action) => {
      const { id, item } = action.payload;
      return state.map(todo => {
        return todo.id === id ? { ...todo, item, } : todo;
      });
    },
    completeTodos: (state, action) => {
      return state.map(todo => {
        return todo.id === action.payload ? { ...todo, completed: true } : todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
