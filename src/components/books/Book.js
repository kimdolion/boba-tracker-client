import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

const styles = {
  book: {
    background: 'darkgray',
    border: '2px solid black',
    borderRadius: '5px',
    margin: '10px 5px',
    padding: '10px 15px'
  }
}

const Book = ({ user, alerts, match }) => {
  const [book, setBook] = useState(null)
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/books/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setBook(responseData.data.book))
      .catch(console.error)
  }, [])

  if (!book) {
    return <p>...Loading</p>
  }
  return (
    <div style={ styles.book }>
      <h4 key={book.title}>Title: {book.title}</h4>
      <h5 key={book.author}>Author: {book.author}</h5>
      <li key={book.year}>First Published: {book.firstPublished}</li>
      <li key={book.originalLanguage}>Original Language: {book.originalLanguage}</li>
      <Button href={`#/books/${match.params.id}/edit-book`} className='btn btn-warning m-2'>Edit</Button>
      <Link to="/books" className='btn btn-dark m-2'>Back to all the movies</Link>
    </div>
  )
}

export default withRouter(Book)
