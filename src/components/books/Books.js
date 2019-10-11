import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const styles = {
  books: {
    marginBottom: '2rem',
    padding: '2px 5px'
  }
}

const Books = ({ user, alerts }) => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/books`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setBooks(responseData.data.books))
      .catch(console.error)
  }, [])

  const booksJsx = books.map(book => (
    <div key={book._id} style={styles.books}>
      <Link to={`/books/${book._id}`} className='btn btn-info'>Title: {book.title}</Link>
    </div>
  ))

  return (
    <React.Fragment>
      <h1>Books</h1>
      <ul style={{ listStyleType: 'none' }}>{booksJsx} </ul>
    </React.Fragment>
  )
}

export default Books
