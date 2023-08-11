import React from 'react'

export default function Navbar() {
  return (
					 
					<nav className="navbar ow-navigation">
						<div className="col-md-3">
							<div className="navbar-header">
								<button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a title="Logo" href="/" className="navbar-brand"><img src="images/logo.png" alt="logo"/>How It Works<span>Education of Best</span></a>
								<a href="/" className="mobile-logo" title="Logo"><h3>How It Works</h3></a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="navbar-collapse collapse" id="navbar">
								<ul className="nav navbar-nav menubar">
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="index.html" role="button" className="dropdown-toggle" title="Home">Home</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										
									</li>
									<li className="dropdown">
										<a aria-expanded="false" aria-haspopup="true" role="button" className="dropdown-toggle" title="Courses" href="courses-page.html">Courses</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										<ul className="dropdown-menu">
											<li><a title="Courses Detail" href="coursesdetails-page.html">Courses Detail</a></li>
										</ul>
									</li>
									<li><a title="Event" href="events-page.html">Event</a></li>
									<li><a title="About" href="about-page.html">About</a></li>
									<li className="dropdown">
										<a aria-expanded="false" aria-haspopup="true" role="button" className="dropdown-toggle" title="Blog" href="blog-page.html">Blog</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										<ul className="dropdown-menu">
											<li><a title="Blog Post" href="blogpost-page.html">Blog Post</a></li>
										</ul>
									</li>
									<li className="dropdown">
										<a aria-expanded="false" aria-haspopup="true" role="button" className="dropdown-toggle" title="Pages" href="#">Pages</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										<ul className="dropdown-menu">
											<li><a title="Home 2" href="home2.html">Home 2</a></li>
											<li><a title="Course Detail" href="coursesdetails-page.html">Course Detail</a></li>
											<li><a title="BlogPost" href="blogpost-page.html">BlogPost</a></li>
										</ul>
									</li>
									<li><a title="Contact" href="contactus-page.html">Contact</a></li>
								</ul>
							</div>
						</div>
					</nav>  
  )
}
