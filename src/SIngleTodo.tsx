import { FaTimes, FaTrash } from "react-icons/fa";
import { Todo } from "./Model";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

const SIngleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="todoWrapper">
      <div className="todoItem">
        {todo.isDone ? <s>{todo.title}</s> : <strong>{todo.title}</strong>}

        <div className="">
          <span onClick={() => handleDone(todo.id)}>
            <FaTimes />
          </span>
          <span onClick={() => handleDelete(todo.id)}>
            <FaTrash />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SIngleTodo;
