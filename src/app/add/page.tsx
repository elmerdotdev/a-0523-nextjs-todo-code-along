import React from 'react'
import Link from 'next/link'
import prisma from '@/db'
import { redirect } from 'next/navigation'

const page = () => {
  const addTodo = async (formData: FormData) => {
    'use server'
    const todoInput = formData.get('todo')?.valueOf()

    if (typeof todoInput !== 'string' || todoInput.length === 0) {
      throw new Error()
    }

    await prisma.todo.create({
      data: {
        todo: todoInput,
        completed: false
      }
    })

    redirect('/')
  }

  return (
    <div>
      <h1 className="text-2xl">Add New Todo</h1>

      <form action={addTodo}>
        <input type="text" name="todo" className="border border-zinc-900 text-zinc-900 px-2 py-1" />
        <div className="flex gap-1 my-2">
          <Link href="/" className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center">Cancel</Link>
          <button type="submit" className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center hover:bg-zinc-900 hover:text-white">Add</button>
        </div>
      </form>
    </div>
  )
}

export default page