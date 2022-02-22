import React from 'react'
import { Todo } from './Model'
import SIngleTodo from './SIngleTodo'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const List = ({todos, setTodos}: Props) => {    
  return (
    <div>
        {
            todos.map(todo => (
                <SIngleTodo key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />
            ))
        }
    </div>
  )
}

export default List