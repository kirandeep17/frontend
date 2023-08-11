import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from 'next/head';
import HomeLayout from '../components/Layout/HomeLayout';

export default function detailblogpost( {userData} ) {
    const router = useRouter()
    const { msg } = router.query

	function  speak() {
		let utterance = new SpeechSynthesisUtterance(userData.content	);
		let voicesArray = speechSynthesis.getVoices();
			utterance.voice = voicesArray[2];
			speechSynthesis.speak(utterance);
	}

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
								<span class="postby">By : <a href="#" title="Andreanne Turcotte"> {userData.myauthor}</a></span>
								<span class="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span class="postdate">Date : <a href="#" title="25th May 2016"> {userData.created_at}</a></span>
							</div>
							<div class="entry-block">
								<div class="entry-title">
									<h3>{userData.title}</h3>
									<input type='button' className="textspeachButton" onClick={speak} value="Read text"/>
								</div>
								<div class="entry-content">
								<div dangerouslySetInnerHTML={{ __html: userData.content }}>


                  
									</div>
								<div></div>	
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
					<h3>{userData.myauthor}</h3>
					<span>Web Designer</span>
					<p>My name is Ruth. I grew up and studied in...</p>
				</aside>



			</div>
		</div>
		<div class="section-padding"></div>

		

	</div>


	

            </div>
     
    );
}

export async function getServerSideProps(context) {
    const id = context.query.id;
    //console.log("helllooooooooooooooooo "+id );

	const response = await fetch('http://127.0.0.1:8000/api/article/'+id, {
		method: 'GET',
		headers: {
		  'Content-Type': 'application/json',
		},
	  });
		const userData = await response.json();
  	console.log("here is the user data "+userData.title);
	  return {
		props: {
			userData            
		},
	  };

	
};

detailblogpost.getLayout = function(page) {
	return <HomeLayout>{page}</HomeLayout>;
  };