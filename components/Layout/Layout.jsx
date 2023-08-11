import React, { Children } from 'react'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import PageTitleBox from './components/PageTitleBox/PageTitleBox'

export default function Layout({children}) {
  return (
    <>
        <Header />
        <PageTitleBox/>
		      
        {children}
        <Footer />

    </>

  )
}