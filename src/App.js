import "./App.css";
import { useState } from "react";
import AddTodo from "./Todo/AddTodo";
import TodoList from "./Todo/TodoList";
import Context from "./Context/Context";
import AlertError from "./Alert/AlertError";

function App() {
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const addTodo = (title) => {
    if (todos.length < 10) {
      setTodos(
        todos.concat([
          {
            title,
            id: Date.now(),
          },
        ])
      );
    } else {
      setShow(true);
    }
  };
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        {show && <AlertError onShow={() => setShow(false)} />}
        {todos.length > 10 && setTodos([])}
        <h1 className="text text-center pt-4 pb-2">Todo App</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} />
        ) : (
          <p className="text text-center">Список пусто</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
