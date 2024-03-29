import React from 'react'
import Navbar2 from '../Navbar/Navbar';


export default function Header2() {
	
  return (
	<header className="header-main container-fluid no-padding">
		 
		<div className="top-header container-fluid no-padding">
			<div className="container">
				<div className="topheader-left">
					<a href="tel:+5198759822" title="5198759822"><i className="fa fa-mobile" aria-hidden="true"></i>(519) - 875 - 9822 </a>
					<a href="mailto:Support@info.com" title="Support@howitworks.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>Emailus: Support@howitworks.com</a>
				</div>
				<div className="topheader-right">
					<a href="/loginnew" title="Login"><i className="fa fa-sign-out" aria-hidden="true"></i>Login</a>
					<a href="/register" title="Register">Register</a>
				</div>
			</div>
		</div> 
		
		 
		<div className="menu-block container-fluid no-padding">
			 
			<div className="container">
				<div className="row">

				<Navbar2 />
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
