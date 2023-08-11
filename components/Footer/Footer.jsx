import React from 'react'

export default function Footer() {
  return (

	<footer className="footer-main container-fluid no-padding">	
		 
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-sm-6">
					<aside className="ftr-widget about_widget">
						<a className="footer-logo" href="#" title="Logo"><img alt="logo" src="images/logo.png"/>Edumax<span>Education of Best</span></a>
						<ul>
							<li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li> 
							<li><a href="#" title="Instagram"><i className="fa fa-instagram"></i></a></li>
							<li><a href="#" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
							<li><a href="#" title="Rss"><i className="fa fa-rss"></i></a></li>
						</ul>
						<p>Trem ipsum dolor sit ameThese men promptly escaped from maximum security astockade to the Los Angeles underground. These Happy Days are yours and mine Happy Days elites consectetur adipiscing elit, sed do eiusmod tempor incididunt utiles labore et dolor hates magna ali qua.</p>
					</aside>
				</div>
				<div className="col-md-6 col-sm-6">
					<aside className="ftr-widget newsletter_widget">
						<h3 className="widget-title">News Letters</h3>
						 <div className="input-group">
							<input type="text" className="form-control" placeholder="Enter your email" />
							<span className="input-group-btn"><button className="btn" type="button" title="Sign In">Sign In</button></span>
						</div>
					</aside>
				</div>
				<div className="col-md-6 col-sm-6">
					<aside className="ftr-widget upcomingevent_widget">
						<h3 className="widget-title">Up Comming Events</h3>
						<div id="upcomingevent_carousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner" role="listbox">
								<div className="item active">
									<div className="upcoming-eventbox">
										<p>These men promptly escaped from maximum security stockade to the Los Angeles underground.</p>
										<ul>
											<li><a href="#" title="Time"><i className="fa fa-clock-o" aria-hidden="true"></i>8:00 Am - 5:00 Pm</a></li>
											<li><a href="#" title="Date"><i className="fa fa-calendar" aria-hidden="true"></i>01 May 2016</a></li>
											<li><a href="#" title="Location"><i className="fa fa-map-marker" aria-hidden="true"></i>London, UK</a></li>
										</ul>
										<a href="#" title="Read More">Read More</a>
									</div>
								</div>
								<div className="item">
									<div className="upcoming-eventbox">
										<p>These men promptly escaped from maximum security stockade to the Los Angeles underground.</p>
										<ul>
											<li><a href="#" title="Time"><i className="fa fa-clock-o" aria-hidden="true"></i>9:00 Am - 10:00 Pm</a></li>
											<li><a href="#" title="Date"><i className="fa fa-calendar" aria-hidden="true"></i>05 May 2016</a></li>
											<li><a href="#" title="Location"><i className="fa fa-map-marker" aria-hidden="true"></i>London, UK</a></li>
										</ul>
										<a href="#" title="Read More">Read More</a>
									</div>
								</div>
							</div>
							<a className="left carousel-control" href="#upcomingevent_carousel" role="button" data-slide="prev">
								<i className="fa fa-angle-left"></i>
							</a>
							<a className="right carousel-control" href="#upcomingevent_carousel" role="button" data-slide="next">
								<i className="fa fa-angle-right"></i>
							</a>
						</div>
						
					</aside>
				</div>
				<div className="col-md-6 col-sm-6">
					<aside className="ftr-widget flickr_widget">
						<h3 className="widget-title">Our Flicker</h3>
						<ul>
							<li><a href="#" title="Flickr"><img src="images/flickr1.jpg" alt="flickr1" width="85" height="83"/></a></li>
							<li><a href="#" title="Flickr"><img src="images/flickr2.jpg" alt="flickr2" width="85" height="83"/></a></li>
							<li><a href="#" title="Flickr"><img src="images/flickr3.jpg" alt="flickr3" width="85" height="83"/></a></li>
							<li><a href="#" title="Flickr"><img src="images/flickr4.jpg" alt="flickr4" width="85" height="83"/></a></li>
							<li><a href="#" title="Flickr"><img src="images/flickr5.jpg" alt="flickr5" width="85" height="83"/></a></li>
							<li><a href="#" title="Flickr"><img src="images/flickr6.jpg" alt="flickr6" width="85" height="83"/></a></li>
						</ul>
					</aside>
				</div>
			</div>
			 
			<div className="footer-bottom col-md-12 col-sm-12 no-padding">
				<div className="copyright no-padding">
					<span>Copyright &copy; 2016. All Rights Reserved.</span>
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
							<li><a href="index.html" title="Home">Home</a></li>
							<li><a href="courses-page.html" title="COURSE">COURS</a></li>
							<li><a href="events-page.html" title="Events">Events</a></li>
							<li><a href="blog-page.html" title="Blog">Blog</a></li>
							<li><a href="about-page.html" title="About">About</a></li>
						</ul>
					</div>
				</nav>
			</div> 
		</div> 
	</footer> 
  )
}
