import InputField from "./InputField";
import "./App.css";
import { useState } from "react";
import { Todo } from "./Model";
import List from "./List";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, {id: Date.now(), title: todo, isDone: false}])
    }
    setTodo(" ")
}


  return (
    <div className="App">
      <h1>Tasify</h1>
      <InputField handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
