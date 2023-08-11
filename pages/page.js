import React from 'react'
import Link from 'next/link'
const Home = () => {
  
    // This is the home page which will
    // contain links to all other pages
    return (
        <>
            <h1>Hello Geeks</h1>
            <ul>
                <li>
                    getStaticProps : 
                    <Link href={'/about'}>About Page</Link>
                </li>
                <li>
                    getStaticPaths : 
                    <Link href={'/users/1'}>User 1</Link>
                </li>
                <li>
                    getServerSideProps : 
                    <Link href={'/posts'}>Posts Page</Link>
                </li>
            </ul>
        </>
    )
}
  
export default Home