import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [books, setBooks] = useState(data)

  return (
    <main>
      <section className='container'>
        <h2>{books.length} Books in Wish List</h2>
        <List books={books} />
        <button onClick={() => setBooks([])}>Clear books</button>
      </section>
    </main>
  )
}

export default App
