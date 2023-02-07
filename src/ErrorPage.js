import React from 'react'
import logo from './timer.svg'
import './errorPageStyle.css'
import erroricon from './errorpage.svg'
// import Seo from './Seo'


function ErrorPage() {
  return (
    <div className='error-page'>
      
       {/* <Seo
      title ='error page'
      description='Sunday Famous portfolio. I am a Software Engineer. Some of my web designs are shown here'
       type= 'website'
       name='Sunday Famous'/> */}

        <h1>Error 404</h1>
        <h2>Page is not found. Please check your URL</h2>
        <img src={erroricon} alt="errorimage" style={{width:'400px', height:'300px'}}/>
    </div>
  )
}

export default ErrorPage