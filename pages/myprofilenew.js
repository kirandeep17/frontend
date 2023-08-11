import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from 'next/head';
import { useEffect } from 'react';
import Router from 'next/router'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import HomeLayout from '../components/Layout/HomeLayout';

export default function myprofile( {username,email,loggedIn,userData} ) {
   // const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: userData.username,
        password:userData.password,
        lastname: userData.last_name,
        mobile_number: userData.mobile_number,
        address_line_1: userData.address_line_1,
        address_line_2: userData.address_line_1,
        postcode: userData.postcode,
        state: userData.state,
        area: userData.area,
        email: email,
        education: null,
        country: null,
        aboutMe: null,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const id = userData.id
        
    
        try {
          const response = await fetch('http://127.0.0.1:8000/api/users/'+id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Handle successful profile update
            alert('Profile updated successfully');
            window.location.reload(false);
          } else {
            // Handle error response
            const errorData = await response.json();
            console.error('Error updating profile:', errorData);
          }
        } catch (error) {
          console.error('Error updating profile:', error.message);
        }
      };


    //useEffect(() => { document.body.style.backgroundColor = 'rgb(99, 39, 120)' }, [])

	function clearAllCookies() {
		const cookies = document.cookie.split(';');
	  
		for (let i = 0; i < cookies.length; i++) {
		  const cookie = cookies[i];
		  const eqPos = cookie.indexOf('=');
		  const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
		}
	  }
	  

	const handleLogout = async() =>{

		console.log("here")


		try {
			const response = await fetch('http://127.0.0.1:8000/api/logout', {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			});
			
			if (response.ok) {
			  // Login successful, redirect to a dashboard or home page
			  console.log('SUCCESSFUL LOGOUT');
			  clearAllCookies()

            
              
			  Router.push('/')
			
			
			  
			} else {
			  // Handle login error
			  console.error('Login failed');
			}
		  } catch (error) {
			console.error('Error occurred:', error);
		  }


	}

	const renderContent = () => {
		console.log(loggedIn)
		if (loggedIn == true) {
			return(

				<div className="topheader-right">
				<a href="#" onClick={handleLogout} title="logout"><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
				</div>
			)
			
			} else
			{
				<div className="topheader-right">
				<a href="#" title="Login"><i className="fa fa-sign-out" aria-hidden="true"></i>Login</a>
				<a href="#" title="Register">Register</a>
				</div>
			}
	  };
    
	
    
    return (
        <div>
            <Head>
         

                <link rel="stylesheet" href="/mycss/myprofile.css"></link>
                

                

				

				


				

                
            </Head>

            <div>
            
	
            <header className="header-main container-fluid no-padding">
		
		
	</header>
	
	<div className="container blog">
		<div className=""></div>

<form onSubmit={handleSubmit}>
        <div className='snippet-body'>
<div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
				<br/>
                <span className="font-weight-bold">{userData.username}</span>
				<br/>
				<span className="text-black-50">{userData.email}</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label>
					<input type="text" name="username" className="form-control" placeholder="first name" value={formData.username} onChange={handleChange} /></div>
                    <div className="col-md-6"><label className="labels">Surname</label>
					<input type="text" name="lastname"  className="form-control" value={formData.last_name} placeholder="surname"  onChange={handleChange} /></div>
                </div>
		
        
        
        
        
        
        
        
        
        
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label>
					<input type="text" name="mobile_number" value={formData.mobile_number} className="form-control" placeholder="enter phone number" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Address Line 1</label>
					<input type="text" name="address_line_1" value={formData.address_line_1} className="form-control" placeholder="enter address line 1" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Address Line 2</label>
					<input type="text" name="addressLine2" value={formData.address_line_2} className="form-control" placeholder="enter address line 2" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Postcode</label>
					<input type="text" name="postcode" value={formData.postcode} className="form-control" placeholder="enter address line 2" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">State</label>
					<input type="text" name="state" value={formData.state} className="form-control" placeholder="enter address line 2" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" name="area" value={formData.area} placeholder="enter address line 2" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" name="email" value={formData.email} placeholder="enter email id" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" name="education" value={formData.education} placeholder="education" onChange={handleChange} /></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control"  name="country" value={userData.country} placeholder="country" onChange={handleChange}  /></div>
                    <div className="col-md-6">
					<label className="labels">State/Region</label>
					<input type="text" className="form-control"  value={userData.state} onChange={handleChange}  placeholder="state" />
					</div>
					
                </div>
                <br></br>
				<br></br>
				<div className="mt-5 text-center"><input type="submit" className="btn btn-primary profile-button btncstm" value="Save Profile"></input></div>
          
            </div>
        </div>
        <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i><a href="blog-post">&nbsp;Back Home</a></span></div>
                <div className="col-md-12"><label className="labels">Experience in Designing</label>
				<input type="text" className="form-control" placeholder="experience" value=""/></div> 
                <div className="col-md-12"><label className="labels">Additional Details</label>
				<input type="text" className="form-control" placeholder="additional details" value=""/></div>
				  </div>
				  <div className="col-md-12">
				<div className="col-md-12"><label className="labels">About MySelf</label>
				<textarea className='textarea' name="w3review" rows="10" cols="35">
				 Please Write About yourself
				</textarea>
				</div>
				</div>
        </div>
    </div>
</div>


</div>
</form>


		
		<div className="section-padding"></div>
	</div>
	
	

            </div>
    </div>   
    );
}

export async function getServerSideProps(context) {
	try {
	  const cookies = parseCookies(context.req); // Parse the cookies from the incoming request
	  const username = cookies['username'] || null; // Access the specific cookie by name
      const email = cookies['email'] || null;
      const jwt = cookies['jwt'] || null;
	  let loggedIn
      
      console.log('here is the data ', jwt);
      //document.cookie = `jwt=${jwt}`;

      

          //console.log("here is "+document.cookie)
       const response = await fetch('http://127.0.0.1:8000/api/userprofile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({'jwt':jwt}),
          });
    const userData = await response.json();
      console.log(userData)
      //return { props: { userData } };

	  if(username != undefined){
		loggedIn = true 
	  }
	  if(username == undefined){
		return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
	  }
	  return {
		props: {
			username,
            email,
			loggedIn,
            userData
		},
	  };
	} catch (error) {
	  return {
		props: {
			username: null,
			loggedIn:true,
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
  

  myprofile.getLayout = function(page) {
    return <HomeLayout>{page}</HomeLayout>;
  };