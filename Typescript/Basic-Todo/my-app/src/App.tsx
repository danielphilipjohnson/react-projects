import React, { useEffect, useState } from "react";
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
      <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <a
              className="text-white no-underline hover:text-white hover:no-underline"
              href="/"
            >
              <span className="text-2xl pl-2">Daniel Philip Johnson</span>
            </a>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-white no-underline"
                  href="/"
                >
                  Active
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="/"
                >
                  link
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="/"
                >
                  link
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="/"
                >
                  link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="App container shadow-lg mx-auto bg-white mt-24 md:mt-16 h-screen">
        <h1>My Todos</h1>
        <AddTodo saveTodo={handleSaveTodo} />{" "}
        {todos.map((todo: TodoInterface) => (
          <TodoItem
            key={todo._id}
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo}
            todo={todo}
          />
        ))}{" "}
      </main>
    </React.Fragment>
  );
};

export default App;
