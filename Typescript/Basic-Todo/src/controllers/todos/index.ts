import { Response, Request } from "express";

import { TodoInterface } from "./../../types/todo";
import Todo from "../../models/todo";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: TodoInterface[] = await Todo.find()
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
}
