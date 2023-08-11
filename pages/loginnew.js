
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import axios  from 'axios';
import Router from 'next/router'

import Layout2 from '../components/Layout/Layout2';



export default function Loginnew( {username} ) {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { msg } = router.query

   

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send the email and password data to the Django backend
        try {
          const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            withCredentials:true
          });
          
          if (response.ok) {
            // Login successful, redirect to a dashboard or home page
            console.log('SUCCESSFUL LOGIN');
            const data = await response.json()
            

           const jwt = data.jwt
           fetchSecondEndpointData(jwt)
          console.log(jwt)
          
          
            
          } else {
            // Handle login error
            console.error('Login failed');
            alert('Login Failed');
          }
        } catch (error) {
          console.error('Error occurred:', error);
        }
      };

    const fetchSecondEndpointData = async (jwt) => {
        try {
          username=jwt
          document.cookie = `jwt=${username}`;

          console.log(document.cookie)
          const res = await axios.get("http://127.0.0.1:8000/api/user", {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
            
          });
          console.log(res.status)
          
           
          if (res.status == 200) {
            
            //setFetchedData(data); // Save the fetched data in the state
            console.log("success")
            
            console.log(res.data.username)
            document.cookie='username='+res.data.username
            document.cookie='email='+res.data.email
            document.cookie='id='+res.data.id
           // alert(getCookieByName(username))
            Router.push('/blog-post')
           
           

          } else {
            console.error('Failed to fetch data from the second endpoint');
          }
        } catch (error) {
          console.error('Error occurred while fetching data from the second endpoint:', error);
        }

    };

    
    

    return (
        <div>
       
        
            <div className="kcontainer">
                
                <div className="login form">
                <header>Login</header>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
                    <a href="#">Forgot password?</a>
                    <input type="submit" className="button" value="Login"/>
                    
                </form>
                
                <div className="signup">
                    <span className="signup">Don't have an account?
                    <a href="/register"><label for="check">Signup</label></a>
                    </span>
                </div>
                </div>
                
            </div>


            </div>
        
    );
}

export async function getServerSideProps(context) {
	try {
	  const cookies = parseCookies(context.req); // Parse the cookies from the incoming request
	  const username = cookies['username'] || null;
      const email    =    cookies['email']; // Access the specific cookie by name
    

      if (username != undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/blog-post"
            }
        }
    }

	  return {
		props: {
			username,
		},
	  };
	} catch (error) {
	  return {
		props: {
			username: null,
		},
	  };
	}
  }
  
  // Function to parse cookies from the request object
  const parseCookies = (req) => {
	return req.headers.cookie.split(';').reduce((cookies, cookie) => {
	  const [name, value] = cookie.trim().split('=');
	  cookies[name] = decodeURIComponent(value);
	  return cookies;
	}, {});
  };

  Loginnew.getLayout = function(page) {
    return <Layout2>{page}</Layout2>;
  };