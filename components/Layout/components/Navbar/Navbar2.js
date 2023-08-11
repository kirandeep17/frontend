import React from 'react'

export default function Navbar2() {
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
								<a title="Logo" href="index.html" className="navbar-brand"><img src="images/logo.png" alt="logo"/>How It Works<span>Education of Best</span></a>
								<a href="index.html" className="mobile-logo" title="Logo"><h3>How It Works</h3></a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="navbar-collapse collapse" id="navbar">
								<ul className="nav navbar-nav menubar">
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="/blog-post" role="button" className="dropdown-toggle" title="Home">Home</a>
									</li>
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="/about" role="button" className="dropdown-toggle" title="About">About</a>
									</li>
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="/team" role="button" className="dropdown-toggle" title="Team">Team</a>
									</li>
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="/writepost" role="button" className="dropdown-toggle" title="Write">Write</a>
									</li>
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="/mypostedblogs" role="button" className="dropdown-toggle" title="Write">My Blogs</a>
									</li>
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="/contactUS" role="button" className="dropdown-toggle" title="Contact">Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>  
  )
}
