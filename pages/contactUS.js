import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from 'next/head';

export default function Loginnew( {username} ) {
    const router = useRouter()
    const { msg } = router.query
    return (
        
        <div>
                <Head>


<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700" rel="stylesheet" type="text/css"></link>
<link href="https://fonts.googleapis.com/css?family=Niconne" rel="stylesheet" type="text/css"></link>

<link href="https://fonts.googleapis.com/css?family=Roboto:400,900,300,300italic,500,700" rel="stylesheet" type="text/css"></link>
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images//apple-touch-icon-114x114-precomposed.png"></link>

<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images//apple-touch-icon-72x72-precomposed.png"></link>

<link rel="apple-touch-icon-precomposed" href="/images//apple-touch-icon-57x57-precomposed.png"></link>


<link rel="stylesheet" type="text/css" href="/libraries/lib.css"></link>
<link rel="stylesheet" type="text/css" href="/libraries/Stroke-Gap-Icon/stroke-gap-icon.css"></link>

<link rel="stylesheet" type="text/css" href="css/plugins.css"></link>
<link rel="stylesheet" type="text/css" href="/css/navigation-menu.css"></link>

    
<link rel="stylesheet" type="text/css" href="edu/style.css"></link>
<link rel="stylesheet" type="text/css" href="css/shortcode.css"></link>





</Head>
<header className="header-main container-fluid no-padding">
            <div className="top-header container-fluid no-padding">
                <div className="container">
                    <div className="topheader-left">
                        <a href="tel:+5198759822" title="5198759822"><i className="fa fa-mobile" aria-hidden="true"></i>(519) - 875 - 9822 </a>
                        <a href="mailto:Support@info.com" title="Support@info.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>Emailus: Support@info.com</a>
                    </div>
                    <div className="topheader-right">
                        <a href="/loginnew" title="Login"><i className="fa fa-sign-out" aria-hidden="true"></i>Login</a>
                        <a href="/register" title="Register">Register</a>
						<a href="/profile" title="Register">Profile</a>
                    </div>
                </div>
		    </div>

            <div className="menu-block container-fluid no-padding">
			
			<div className="container">
				<div className="row">
					
					<nav className="navbar ow-navigation ">
						<div className="col-md-3">
							<div className="navbar-header ">
								<button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a title="Logo" href="home" className="navbar-brand"><img src="images/logo.png" alt="logo"/>How IT Works<span>Education of Best</span></a>
								<a href="index.html" className="mobile-logo" title="Logo"><h3>Edumax</h3></a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="navbar-collapse collapse" id="navbar">
								<ul className="nav navbar-nav menubar">
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="index.html" role="button" className="dropdown-toggle" title="Home">Home</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										<ul className="dropdown-menu">
											<li><a title="Home 2" href="home2.html">Home 2</a></li>
										</ul>
									</li>
									
									<li><a title="Event" href="events-page.html">Event</a></li>
									<li><a title="About" href="about-page.html">About</a></li>
									<li className="dropdown">
										<a aria-expanded="false" aria-haspopup="true" role="button" className="dropdown-toggle" title="Blog" href="blog-post">Blog</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										<ul className="dropdown-menu">
											<li><a title="Blog Post" href="blog-post">Blog Post</a></li>
										</ul>
										<ul className="dropdown-menu">
											<li><a title="Create Blog Post" href="create-blog-post">Create Blog Post</a></li>
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
									<li><a title="Contact" href="author">Authors</a></li>
									<li><a title="Contact" href="contactus-page.html">Contact</a></li>
								</ul>
							</div>
						</div>
					</nav>
					<div className="menu-search">
						<div id="sb-search" className="sb-search">
							<form>
								<input className="sb-search-input" placeholder="Enter your search term..." type="text" defaultValue="" name="search" id="search" />
								<button className="sb-search-submit"><i className="fa fa-search"></i></button>
								<span className="sb-icon-search"></span>
							</form>
						</div>
					</div>
				</div>
			</div>




		</div>





   



            </header>
            
            <div class="container-fluid no-padding pagebanner">
		<div class="container">
			<div class="pagebanner-content">
				<h3>Contact Us</h3>
				<ol class="breadcrumb">
					<li><a href="index.html">Home</a></li>
					<li>Contact Us</li>
				</ol>
			</div>
		</div>
	</div>
        <div>
            <br/>
            <br/>
        </div>
            
           <footer class="footer-main footer2 container-fluid no-padding">	
		
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-6">
					<aside class="ftr-widget about_widget">
						<a class="footer-logo" href="#" title="Logo"><img alt="logo" src="images/logo.png"/>Edumax<span>Education of Best</span></a>
						<span>Marsh mallow muffin souffle jelly-o tart cake Marshmallow macaroon jelly jubes tiramisu lites halsat croissant cake.</span>
						<p><span class="icon icon-Plaine"></span>Address : 44 New Design Street, Melbourne 005</p>
						<p><span class="icon icon-Phone2"></span>Phone : <a title="01800433633" href="tel:+01800433633">(01) 800 433 633</a></p>
						<p><span class="icon icon-Mail"></span>Email : <a title="info@Example.com" href="mailto:info@Example.com">info@Example.com</a></p>
					</aside>
				</div>
				<div class="col-md-3 col-sm-6">	
					<aside class="ftr-widget useful-llink">
						<h3 class="widget-title">Usefull Links</h3>
						<ul>
							<li><a href="about-page.html" title="About">About</a></li>
							<li><a href="#" title="Careers">Careers</a></li>
							<li><a href="#" title="Main Events">Main Events</a></li>
							<li><a href="#" title="Become a Teacher">Become a Teacher</a></li>
							<li><a href="blog-page.html" title="Latest News">Latest News</a></li>
							<li><a href="contactus-page.html" title="Contact us">Contact us</a></li>
						</ul>
					</aside>
				</div>
				<div class="col-md-3 col-sm-6">
					<aside class="ftr-widget flickr_widget">
						<h3 class="widget-title">Our Flicker</h3>
							<div class="flickr-box">
								<img src="images/flick-rpost1.jpg" alt="flick-rpost1" width="62" height="62"/>
								<p>New Science Research<span>05th May 2016</span></p>
							</div>
							<div class="flickr-box">
								<img src="images/flick-rpost2.jpg" alt="flick-rpost2" width="62" height="62"/>
								<p>How White Is Too White?<span>05th May 2016</span></p>
							</div>
							<div class="flickr-box">
								<img src="images/flick-rpost3.jpg" alt="flick-rpost3" width="62" height="62"/>
								<p>New York Schools Wonder:<span>05th May 2016</span></p>
							</div>
					</aside>
				</div>
				<div class="col-md-3 col-sm-6">
					<aside class="ftr-widget newsletter_widget">
						<h3 class="widget-title">News Letters</h3>
						<p>Subscribe Our Newsletter get the Important News. The Amazing Offers & Inside Scoops:</p>
						 <div class="input-group">
							<input type="text" class="form-control" placeholder="Enter your email"/>
							<span class="input-group-btn"><button class="btn" type="button" title="Go">Go</button></span>
						</div>
						<ul>
							<li><a href="#" title="Facebook"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#" title="Google Plus"><i class="fa fa-google-plus"></i></a></li> 
							<li><a href="#" title="Behance"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
							<li><a href="#" title="Dribbble"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
						</ul>
					</aside>
				</div>
			</div>
			
			<div class="footer-bottom col-md-12 col-sm-12 no-padding">
				<div class="copyright no-padding">
					<span>Copyright &copy; 2016. All Rights Reserved.</span>
				</div>
				<nav class="navbar ow-navigation">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2" aria-expanded="false" aria-controls="navbar">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<div id="navbar2" class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
							<li><a href="index.html" title="Home">Home</a></li>
							<li><a href="courses-page.html" title="Courses">Courses</a></li>
							<li><a href="events-page.html" title="Events">Events</a></li>
							<li><a href="about-page.html" title="About">About</a></li>
							<li><a href="blog-page.html" title="Blog">Blog</a></li>
							<li><a href="contactus-page.html" title="Contact">Contact</a></li>
							
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</footer>
	<script src="js/jquery.min.js"></script>
	
	<script src="libraries/lib.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
	
	
	<script src="js/functions.js"></script>

        </div>

    );
}