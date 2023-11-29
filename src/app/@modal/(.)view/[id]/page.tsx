import React from 'react'
import prisma from '@/db'
import Link from 'next/link'

const page = async ({ params }: { params: { id: string } }) => {
  const todoItem = await prisma.todo.findUnique({
    where: { id: params.id }
  })
  
  return (
    <div className="flex justify-center items-center bg-black bg-opacity-60 p-5 fixed top-0 left-0 h-full w-full">
      <div className="bg-white p-3">
        <h1 className="text-2xl">Preview</h1>
        <p>{todoItem?.todo}</p>
        <p className="mb-3">Status: {todoItem?.completed ? 'Completed' : 'Not completed'}</p>
        <Link href=".." className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center hover:bg-zinc-900 hover:text-white">Close Modal</Link>
      </div>
    </div>
  )

}

export default page