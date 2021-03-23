import React from "react";

type Props = TodoProps & {
  updateTodo: (todo: TodoInterface) => void;
  deleteTodo: (_id: string) => void;
};

const TodoItem: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : "";

  return (
    <React.Fragment>
      <div className="bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4">
        <p className="text-gray-600 dark:text-white">
          <span className="font-bold text-indigo-500 text-lg">“</span>
          <h1 className={checkTodo}>{todo.description}</h1>
          <span className="font-bold text-indigo-500 text-lg">”</span>
        </p>
        <div className="flex items-center mt-4">
          <div className="flex flex-col ml-2 justify-between">
            <span className="font-semibold text-indigo-500 text-sm">
              <span className={checkTodo}> {todo.name}</span>
            </span>
            <div className="flex items-center justify-between gap-4 w-full mt-8">
              <button
                type="button"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={() => deleteTodo(todo._id)}
              >
                Delete
              </button>
              <button
                type="button"
                className={
                  todo.status
                    ? `hidden`
                    : "py-2 px-4 bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                }
                onClick={() => updateTodo(todo)}
              >
                Complete
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
