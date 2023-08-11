import React from 'react'
import Navbar from '../Navbar/Navbar2';
import Router from 'next/router'
import { useState } from 'react';

export default function LoginHeader() {
	

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


  return (
	 
	<header className="header-main container-fluid no-padding">
		 
		<div className="top-header container-fluid no-padding">
			<div className="container">
				<div className="topheader-left">
					<a href="tel:+5198759822" title="5198759822"><i className="fa fa-mobile" aria-hidden="true"></i>(519) - 875 - 9822 </a>
					<a href="mailto:Support@info.com" title="Support@info.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>Emailus: Support@info.com</a>
				</div>
				<div className="topheader-right">
					<a href="/myprofilenew" title="Profile"><i className="fa fa-sign-out" aria-hidden="true"></i>Profile</a>
					<a href="#" onClick={handleLogout} title="Logout">Logout</a>
				</div>
			</div>
		</div> 
		
		 
		<div className="menu-block container-fluid no-padding">
			 
			<div className="container">
				<div className="row">

				<Navbar />
					<div className="menu-search">
						<div id="sb-search" className="sb-search">
							<form>
								<input className="sb-search-input" placeholder="Enter your search term..." type="text" value="" name="search" id="search" />
								<button className="sb-search-submit"><i className="fa fa-search"></i></button>
								<span className="sb-icon-search"></span>
							</form>
						</div>
					</div>
				</div>
			</div> 
		</div> 
	</header> 
  )
}
