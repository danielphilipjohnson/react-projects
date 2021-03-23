interface TodoInterface {
  _id: string
  name: string
  description: string
  status: boolean
  createdAt?: string
  updatedAt?: string
}

interface TodoProps {
  todo: TodoInterface
}

type ApiDataType = {
  message: string
  status: string
  todos: TodoInterface[]
  todo?: TodoInterface
}
