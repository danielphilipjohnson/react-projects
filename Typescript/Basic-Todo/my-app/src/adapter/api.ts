import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";


export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    )
    return todos
  } catch (error) {
    throw new Error(error)
  }
}

export const addTodo = async (
  formData: TodoInterface
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<TodoInterface, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    }

    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-todo",
      todo
    )
    return saveTodo;
  } catch (error) {
    throw new Error(error);
  }
}

export const updateTodo = async (
  todo: TodoInterface
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<TodoInterface, "status"> = {
      status: true
    }
    const updatedYodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-todo/${todo._id}`,
      todoUpdate
    )
    return updatedYodo;

  } catch (error) {
    throw new Error(error);
  }
}


export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(`${baseUrl}/delete-todo/${_id}`)
    return deletedTodo;
  } catch (error) {
    throw new Error(error);
  }
}