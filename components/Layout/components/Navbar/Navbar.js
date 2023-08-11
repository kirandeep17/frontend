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
										<a aria-expanded="false" aria-haspopup="true" href="/" role="button" className="dropdown-toggle" title="Home">Home</a>
									</li>
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="/about" role="button" className="dropdown-toggle" title="About">About</a>
									</li>
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="/team" role="button" className="dropdown-toggle" title="Team">Team</a>
									</li>
									
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="/contact" role="button" className="dropdown-toggle" title="Contact">Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>  
  )
}
