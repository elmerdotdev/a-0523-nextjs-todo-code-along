import React, { Suspense } from 'react'
import TodoList from './components/TodoList'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Link href="/add" className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center">Add New</Link>
      <Link href="/about" className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center">About page</Link>
      <Suspense fallback={<p>Loading todos...</p>}>
        <TodoList />
      </Suspense>
    </div>
  )
}

export default Home