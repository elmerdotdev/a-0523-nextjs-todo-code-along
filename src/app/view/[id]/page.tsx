import React from 'react'
import prisma from '@/db'
import Link from 'next/link'

const page = async ({ params }: { params: { id: string } }) => {
  const todoItem = await prisma.todo.findUnique({
    where: { id: params.id }
  })
  
  return (
    <div>
      <h1 className="text-3xl">To Do Details</h1>
      <p>{todoItem?.todo}</p>
      <p className="mb-3">Status: {todoItem?.completed ? 'Completed' : 'Not completed'}</p>
      <Link href="/" className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center hover:bg-zinc-900 hover:text-white">Go Back</Link>
    </div>
  )

}

export default page