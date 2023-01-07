import React from 'react'
import logo from './timer.svg'
import './errorPageStyle.css'
import erroricon from './errorpage.svg'


function ErrorPage() {
  return (
    <div className='error-page'>
        <h1>Error 404</h1>
        <h2>Page is not found. Please check your URL</h2>
        <img src={erroricon} alt="errorimage" style={{width:'400px', height:'300px'}}/>
    </div>
  )
}

export default ErrorPage