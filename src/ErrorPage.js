import React from 'react'
import logo from './timer.svg'
import './errorPageStyle.css'


function ErrorPage() {
  return (
    <div className='error-page'>
        <h1>Error 404</h1>
        <h2>Page is not found. Please check your URL</h2>
        <img src={logo} alt="errorimage" style={{width:'500px', height:'300px'}}/>
    </div>
  )
}

export default ErrorPage