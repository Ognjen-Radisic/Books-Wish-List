import React from 'react'

const List = ({ books }) => {
  return (
    <>
      {books.map((book) => {
        const { id, title, author, image } = book
        return (
          <article key={id} className='book'>
            <img src={image} alt={title} />
            <div>
              <h4>{title}</h4>
              <p>{author}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
