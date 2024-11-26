import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function BookDetails() {
  const [book, setBook] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error('Error fetching book details:', error))
  }, [id])

  if (!book) return <div>Loading...</div>

  return (
    <div className="book-details">
      <img src={book.image} alt={book.title} className="book-cover" />
      <div className="book-description">
          <h2>{book.title}</h2>
          <p>{book.description}</p>
      </div>
    </div>
  )
}

export default BookDetails 