import React, { Children } from 'react'
import LoginHeader from './components/LoginHeader/LoginHeader'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import PageTitleBox from './components/PageTitleBox/PageTitleBox'

export default function Layout2({children}) {
  return (
    <>
        <LoginHeader />
        
        {children}
        <Footer/>
		

    </>

  )
}