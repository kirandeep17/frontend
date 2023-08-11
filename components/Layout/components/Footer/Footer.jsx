import React from 'react'

export default function Footer() {
  return (

	<footer className="footer-main container-fluid no-padding">	
		 
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-sm-6">
					<aside className="ftr-widget about_widget">
						<a className="footer-logo" href="#" title="Logo"><img alt="logo" src="images/logo.png"/>How IT Works<span>Education of Best</span></a>
						<ul>
							<li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li> 
							<li><a href="#" title="Instagram"><i className="fa fa-instagram"></i></a></li>
							<li><a href="#" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
							<li><a href="#" title="Rss"><i className="fa fa-rss"></i></a></li>
						</ul>
						<p>&copy; 2023 "How It Works" - Unveiling the Mechanics Behind the Mysteries</p>
       					 <p class="disclaimer">All rights reserved. No part of this website may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the publisher, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.</p>
						
					</aside>
				</div>
			
			</div>
			 
			<div className="footer-bottom col-md-12 col-sm-12 no-padding">
				<div className="copyright no-padding">
					<span>HIW&reg; Copyright &copy; 2023. All Rights Reserved.</span>
				</div>
				<nav className="navbar ow-navigation">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>
					<div id="navbar2" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><a href="/index.html" title="Home">Home</a></li>
							<li><a href="/about" title="About">About</a></li>
							<li><a href="/team" title="Our Team">Our Team</a></li>
							<li><a href="/write" title="Blog">Write Blog</a></li>
							<li><a href="/contact" title="contact">Contact Us</a></li>
							<li><a href="/privacy" title="Privacy Policy">Privacy Policy</a></li>
							<li><a href="/terms" title="Terms">Terms & Conditions</a></li>
							<li><a href="/faq" title="faq">FAQ</a></li>
						</ul>
					</div>
				</nav>
			</div> 
		</div> 
	</footer> 
  )
}
