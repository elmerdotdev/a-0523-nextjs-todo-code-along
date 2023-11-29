import React from 'react'
import Link from 'next/link'

type TodoProps = {
  id: string,
  todo: string,
  completed: boolean
}

const TodoListItem = ({ id, todo, completed }: TodoProps) => {
  return (
    <div className="flex justify-between items-center">
      <p>{todo} - {completed ? 'Completed' : 'Not completed'}</p>
      <Link href={`/view/${id}`} className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center">View Details</Link>
    </div>
  )
}

export default TodoListItem