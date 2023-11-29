import React, { Suspense } from 'react'
import prisma from '@/db'
import TodoListItem from './TodoListItem'

const TodoList = async () => {
  const todos = await prisma.todo.findMany()

  return (
    <div>
      <h1 className='text-2xl my-3'>Todos</h1>
      <div className="flex flex-col gap-3">
        <Suspense fallback={<p>Loading...</p>}>
          {todos.map(todo => (
            <TodoListItem key={todo.id} {...todo} />
          ))}
        </Suspense>
      </div>
    </div>
  )
}

export default TodoList