import React from 'react'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: React.FormEvent) => void

}


const InputField = ({todo, handleSubmit, setTodo}: Props) => {
  return (
    <form onSubmit={handleSubmit}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Add Todo' />
        <button type="submit">Go</button>
    </form>
  )
}

export default InputField