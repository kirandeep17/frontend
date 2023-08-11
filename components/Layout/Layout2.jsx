import React, { Children } from 'react'
import Header2 from './components/Header/Header2'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import PageTitleBox from './components/PageTitleBox/PageTitleBox'

export default function Layout2({children}) {
  return (
    <>
        <Header2 />
        <PageTitleBox/>
        {children}
        <Footer/>
		

    </>

  )
}