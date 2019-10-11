import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import BookForm from './BookForm'

const CreateBook = ({ user }) => {
  const [created, setCreated] = useState(false)
  const [book, setBook] = useState(null)

  const handleChange = event => {
    event.persist()
    setBook(book => ({ ...book, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/books`,
      method: 'POST',
      headers: {
        Authorization: `Token token=${user.token}`
      },
      data: { book }
    })
      .then(responseData => setCreated(responseData.data.book._id))
      .catch(console.error)
  }

  if (created) {
    return <Redirect to={`/books/${created}`} />
  }

  return (
    <React.Fragment>
      <BookForm
        book={book}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </React.Fragment>
  )
}

export default CreateBook
