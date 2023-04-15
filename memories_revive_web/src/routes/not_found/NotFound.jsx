import React from 'react'
import "./style.scss"
import not_found from "../../assets/not_found/404-error.gif"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div id="page-not-found">
        <img src={not_found} />
        <div className='text-container'>
          <span>Oops...</span>
          <h1>Page not found</h1>
          <p>The page you are looking for doesn't exist or have been removed. We are sorry for that.</p>
          <Link to="/">Return in a safe place!</Link>
        </div>
    </div>
  )
}

export default NotFound