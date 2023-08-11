import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from 'next/head';

export default function Loginnew( {username} ) {
    const router = useRouter()
    const { msg } = router.query
    return (
        <div>
            
	<div class="container blog blogpost">
		<div class="section-padding"></div>
		<div class="row">
			<div class="col-md-9 col-sm-8 content-area">
				<article class="type-post">
					<div class="entry-cover">
						<img width="860" height="470" alt="blogpost" src="images/blogpost.jpg"/>
					</div>
					<div class="entry-block">
						<div class="entry-contentblock">
							<div class="entry-meta">
								<span class="postby">By : <a href="#" title="Andreanne Turcotte"> Andreanne Turcotte</a></span>
								<span class="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span class="postdate">Date : <a href="#" title="25th May 2016"> 25th May 2016</a></span>
							</div>
							<div class="entry-block">
								<div class="entry-title">
									<h3>Along Communicate Directly With Experienced Teachers</h3>
								</div>
								<div class="entry-content">
									<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magniolrs eos qui rate voluptatem sequi nesciunt  Neque porro quisquam est qui dolorem ipsum quia dolore sit amet con sectetur adipisci quia suthagara lukuthea satham</p>
									<p>Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magniol res eos qui rate voluptatem sequi nesciunt  Neque porro quisquam est qui dolorem ipsum quia dolore sit amet conlites sectetur adipisci quia suthagara lukuthea satham non numquam eius modi tempra. incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,</p>
									<blockquote>
										<p>"Completely synergize resource taxing relationships via premier niche markets. Profess tionally cultivate one-to-one customer service with robust ideas"</p>
									</blockquote>
									<p>Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magniol res eos qui rate voluptatem sequi nesciunt  Neque porro quisquam est qui dolorem ipsum quia dolore sit amet conlites sectetur adipisci quia suthagara lukuthea satham non numquam eius modi tempra. incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,</p>
								</div>
							</div>
							<ul>
								<li><a title="Facebook" href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a title="Twitter" href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a title="Google Plus" href="#"><i class="fa fa-google-plus"></i></a></li> 
								<li><a title="Behance" href="#"><i class="fa fa-behance"></i></a></li>
								<li><a title="Dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
							</ul>
						</div>
						<div class="post-ic"><span class="icon icon-Pencil"></span></div>
					</div>
				</article>
				<div class="post-comments">
					<h3 class="block-title">3 Comments</h3>
					<div class="media">
						<div class="media-left">
							<a title="Martin Guptil" href="#">
								<img width="112" height="112" class="media-object" src="images/comment1.jpg" alt="Martin Guptil"/>
							</a>
						</div>
						<div class="media-body">
							<div class="media-content">
								<h4 class="media-heading">
									Martin Guptil<span>Sep 23, 2015</span>
								</h4>
								<p>You bet your life Speed Racer he will see it through. Its mission explore  to strange news worlds seek out new life and new civilizations gone before.</p>
								<a href="#" title="Reply">Reply</a>
							</div>
							<div class="media">
								<div class="media-left">
									<a title="Lierd Yuis" href="#">
										<img width="112" height="112" class="media-object" src="images/comment2.jpg" alt="Alfred Marshal"/>
									</a>
								</div>
								<div class="media-body">
									<div class="media-content">
										<h4 class="media-heading">
											Lierd Yuis<span>Sep 23, 2015</span>
										</h4>
										<p>You bet your life Speed Racer he will see it through. Its mission explore  to strange news worlds seek out new life and new civilizations gone before.</p>
										<a href="#" title="Reply">Reply</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="media">
						<div class="media-left">
							<a title="Micheal Jicob" href="#">
								<img width="112" height="112" class="media-object" src="images/comment3.jpg" alt="Stephen Hawk"/>
							</a>
						</div>
						<div class="media-body">
							<div class="media-content last">
								<h4 class="media-heading">
									Micheal Jicob<span>Sep 23, 2015</span>
								</h4>
								<p>You bet your life Speed Racer he will see it through. Its mission explore  to strange news worlds seek out new life and new civilizations gone before.</p>
								<a href="#" title="Reply">Reply</a>
							</div>
						</div>
					</div>
				</div>				
				<form class="comment-form">
					<h3 class="block-title">Post a Comment</h3>
					<div class="row">
						<div class="form-group col-md-12">
							<textarea class="form-control msg" rows="5" placeholder="Write your comment here..."></textarea>
						</div>
						<div class="form-group col-md-4">
							<input type="text" class="form-control" placeholder="Your full name" required=""/>
						</div>
						<div class="form-group col-md-4">
							<input type="text" class="form-control" placeholder="Email Address" required=""/>
						</div>
						<div class="form-group col-md-4">
							<input type="text" class="form-control" placeholder="Website" required=""/>
						</div>		
						<div class="form-group col-md-12">
							<input type="submit" title="Submit" name="Submit" value="Submit"/>
						</div>
					</div>
				</form>
			</div>
			<div class="col-md-3 col-sm-4 widget-area">
				<aside class="widget widget_categories">
					<h3 class="widget-title">Categories</h3>
					<ul>
						<li><a title="Language Science" href="#">Language Science</a><span>(10)</span></li>
						<li><a title="Student Guidance" href="#">Student Guidance</a><span>(12)</span></li>
						<li><a title="School Psychology" href="#">School Psychology</a><span>(08)</span></li>
						<li><a title="Vocational Counselling" href="#">Vocational Counselling	</a><span>(18)</span></li>
						<li><a title="Uncategorized" href="#">Uncategorized</a><span>(11)</span></li>
						<li><a title="Youth Science" href="#">Youth Science</a><span>(10)</span></li>
					</ul>
				</aside>
				<aside class="widget widget_latestnews">
					<h3 class="widget-title">Latest News</h3>
					<div class="latestnews-box">
						<a href="blogpost-page.html" title="Along Communicate Directly With Experienced Teachers">Along Communicate Directly With Experienced Teachers</a>
						<span>25th May 2016</span>
					</div>
					<div class="latestnews-box">
						<a href="blogpost-page.html" title="Given The Tips To Students Succed In An Online Courses ">Given The Tips To Students Succed In An Online Courses </a>
						<span>25th May 2016</span>
					</div>
					<div class="latestnews-box">
						<a href="blogpost-page.html" title="Why Should Read Every Day">Why Should Read Every Day</a>
						<span>25th May 2016</span>
					</div>
				</aside>
				<aside class="widget courses-staff">
					<img src="images/staff.jpg" alt="staff" width="275" height="288"/>
					<h3>Charlie Brown</h3>
					<span>Web Designer</span>
					<p>My name is Ruth. I grew up and studied in...</p>
				</aside>
			</div>
		</div>
		<div class="section-padding"></div>
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

export async function getServerSideProps(context) {
    const query = context.query;
    console.log(query);



	
   
    return { props: {query:false} };

	
};