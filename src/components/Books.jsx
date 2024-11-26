import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error))
  }, [])

  return (
    <section className='books-section'>
        <h1>Available Books</h1>
        <div className="books-grid">
          {books.map(book => (
            <Link to={`/book/${book.id}`} key={book.id} className='book-card'>
              <img
                src={book.image}
                alt={book.title}
                className="book-cover"
              />
            </Link>
          ))}
        </div>
    </section>
  )
}

export default Books 