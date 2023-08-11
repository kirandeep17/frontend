
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head';
import { useEffect } from 'react';
import { useState } from 'react';
import Router from 'next/router'

function isValidEmail(email) {
    // A basic email validation regex
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

export default function Register( {username} ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (name.length < 1) {
            alert('Name must be at least 1 characters long.');
            return;
          }
      
    
        // Check if the email and password are not empty
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
          alert('Please fill in all the fields.');
          return;
        }
    
        // Check if the email is valid
        if (!isValidEmail(email)) {
          alert('Please enter a valid email address.');
          return;
        }
    
        // Check if the password meets the minimum criteria
        if (password.length < 6) {
          alert('Password must be at least 6 characters long.');
          return;
        }
    
        // Check if the password and confirm password match
        if (password !== confirmPassword) {
          alert('Passwords do not match.');
          return;
        }
    
        // Form validation is successful, you can handle form submission here
        // For example, sending the data to the server or redirecting to another page
        alert('Signup successful!');

        const username = name;




        try {
            const response = await fetch('http://127.0.0.1:8000/api/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, email, password }),
            });
            
            if (response.ok) {
              // Login successful, redirect to a dashboard or home page
              console.log('SUCCESSFUL REGISTER');
              Router.push('/loginnew')
              
            } else {
              // Handle login error
              console.error('Login failed');
              alert('Something Went Wrong !');
            }
          } catch (error) {
            console.error('Error occurred:', error);
          }






      };
  



    

        

       
    

    return (
        <div>
        <Head>
                <link rel="stylesheet" href="/mycss/style.css"></link>
        </Head>
        
            <div className="container">
                <input type="checkbox" id="check"/>
                <div className="login form">
                
                <header>Signup</header>
                <form action="#" onSubmit={handleSubmit}>
                    <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)} placeholder="Enter your Name"/>
                    <input type="text" value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
                    <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder="Create a password"/>
                    <input type="password" value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password"/>
                    <input type="submit"  className="button" value="Signup"/>
                </form>
                <div className="signup">
                    <span className="signup">Already have an account?
                    <a href='/loginnew'><label for="">Login</label></a>
                    </span>
                </div>
                </div>
                
            </div>

       
  
	
  
  


            </div>
        
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    
    return { props: {username:false} };
};