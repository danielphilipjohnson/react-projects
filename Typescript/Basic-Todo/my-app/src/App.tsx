import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./adapter/api";
import "./assets/main.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  console.log(todos);
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: TodoInterface[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err));
  };

  const handleSaveTodo = (
    e: React.FormEvent,
    formData: TodoInterface
  ): void => {
    e.preventDefault();
    console.log(formData);
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = (todo: TodoInterface): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <Navbar />

      <main className="App container mx-auto mt-8 md:mt-16 p-4">
        <AddTodo saveTodo={handleSaveTodo} />{" "}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 md:mb-0 mt-4 flex-between items-center py-2 px-2  ">
          {todos.map((todo: TodoInterface) => (
            <TodoItem
              key={todo._id}
              updateTodo={handleUpdateTodo}
              deleteTodo={handleDeleteTodo}
              todo={todo}
            />
          ))}
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
