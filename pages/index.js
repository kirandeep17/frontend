import Link from 'next/link';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router'
import Head from 'next/head';
import { useEffect } from 'react';
import HomeLayout from '../components/Layout/HomeLayout';
import Router from 'next/router'
import { useState } from 'react';

const IndexPage = ({blogcatlist}) => {
	let [blogcatResult,setBlogcatResult]= useState('');
	blogcatResult =blogcatlist;
  return (
    <div>
      <div className="container blog">
		<div className="section-padding"></div>
		<div className="row">
			<div className="col-md-9 col-sm-8 content-area">
				<article className="type-post">
					<div className="entry-cover">
						<a title="Cover" href="blogpost-page.html"><img width="860" height="470" alt="latestnews" src="images/blog1.jpg"/></a>
					</div>
					<div className="entry-block">
						<div className="entry-contentblock">
							<div className="entry-meta">
								<span className="postby">By : <a href="#" title="Andreanne Turcotte"> Andreanne Turcotte</a></span>
								<span className="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span className="postdate">Date : <a href="#" title="25th May 2016"> 25th May 2016</a></span>
							</div>
							<div className="entry-block">
								<div className="entry-title">
									<a title="Along Communicate Directly With Experienced Teachers" href="blogpost-page.html"><h3>Along Communicate Directly With Experienced Teachers</h3></a>
								</div>
								<div className="entry-content">
									<p>As with most professions today, there are rapid developments in teaching that are being driven by social and technological changes. Keeping up to date with these developments within education will Parental involvement enhances student success.</p>
								</div>
							</div>
							<a href="detail-blog-post" title="Read More">Read More</a>
						</div>
						<div className="post-ic"><span className="icon icon-Pencil"></span></div>
					</div>
				</article>
				<article className="type-post">
					<div className="entry-cover">
						<a title="Cover" href="blogpost-page.html"><img width="860" height="470" alt="latestnews" src="images/blog2.jpg"/></a>
					</div>
					<div className="entry-block">
						<div className="entry-contentblock">
							<div className="entry-meta">
								<span className="postby">By : <a href="#" title="Andreanne Turcotte"> Andreanne Turcotte</a></span>
								<span className="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span className="postdate">Date : <a href="#" title="25th May 2016"> 25th May 2016</a></span>
							</div>
							<div className="entry-block">
								<div className="entry-title">
									<a title="Tips to Succeed in an Online Course" href="blogpost-page.html"><h3>Tips to Succeed in an Online Course</h3></a>
								</div>
								<div className="entry-content">
									<p>As with most professions today, there are rapid developments in teaching that are being driven by social and technological changes. Keeping up to date with these developments within education will Parental involvement enhances student success.</p>
								</div>
							</div>
							<a href="detail-blog-post" title="Read More">Read More</a>
						</div>
						<div className="post-ic"><span className="icon icon-Pencil"></span></div>
					</div>
				</article>
				<article className="type-post">
					<div className="entry-cover">
						<a title="Cover" href="blogpost-page.html"><img width="860" height="470" alt="latestnews" src="images/blog3.jpg"/></a>
					</div>
					<div className="entry-block">
						<div className="entry-contentblock">
							<div className="entry-meta">
								<span className="postby">By : <a href="#" title="Andreanne Turcotte"> Andreanne Turcotte</a></span>
								<span className="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span className="postdate">Date : <a href="#" title="25th May 2016"> 25th May 2016</a></span>
							</div>
							<div className="entry-block">
								<div className="entry-title">
									<a title="Research Works of Students To Be Starts" href="blogpost-page.html"><h3>Research Works of Students To Be Starts</h3></a>
								</div>
								<div className="entry-content">
									<p>As with most professions today, there are rapid developments in teaching that are being driven by social and technological changes. Keeping up to date with these developments within education will Parental involvement enhances student success.</p>
								</div>
							</div>
							<a href="blogpost-page.html" title="Read More">Read More</a>
						</div>
						<div className="post-ic"><span className="icon icon-Pencil"></span></div>
					</div>
				</article>
				<article className="type-post">
					<div className="entry-cover">
						<a title="Cover" href="blogpost-page.html"><img width="860" height="470" alt="latestnews" src="images/blog4.jpg"/></a>
					</div>
					<div className="entry-block">
						<div className="entry-contentblock">
							<div className="entry-meta">
								<span className="postby">By : <a href="#" title="Andreanne Turcotte"> Andreanne Turcotte</a></span>
								<span className="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span className="postdate">Date : <a href="#" title="25th May 2016"> 25th May 2016</a></span>
							</div>
							<div className="entry-block">
								<div className="entry-title">
									<a title="Learn English Through Funny News" href="blogpost-page.html"><h3>Learn English Through Funny News</h3></a>
								</div>
								<div className="entry-content">
									<p>As with most professions today, there are rapid developments in teaching that are being driven by social and technological changes. Keeping up to date with these developments within education will Parental involvement enhances student success.</p>
								</div>
							</div>
                            {/* <Link to="/blogpost-page">Read More</Link> */}
							<a href="blogpost-page.html" title="Read More">Read More</a>
						</div>
						<div className="post-ic"><span className="icon icon-Pencil"></span></div>
					</div>
				</article>
				<article className="type-post">
					<div className="entry-cover">
						<a title="Cover" href="blogpost-page.html"><img width="860" height="470" alt="latestnews" src="images/blog5.jpg"/></a>
					</div>
					<div className="entry-block">
						<div className="entry-contentblock">
							<div className="entry-meta">
								<span className="postby">By : <a href="#" title="Andreanne Turcotte"> Andreanne Turcotte</a></span>
								<span className="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span className="postdate">Date : <a href="#" title="25th May 2016"> 25th May 2016</a></span>
							</div>
							<div className="entry-block">
								<div className="entry-title">
									<a title="Why You Should Read Every Day" href="blogpost-page.html"><h3>Why You Should Read Every Day</h3></a>
								</div>
								<div className="entry-content">
									<p>As with most professions today, there are rapid developments in teaching that are being driven by social and technological changes. Keeping up to date with these developments within education will Parental involvement enhances student success.</p>
								</div>
							</div>
							<a href="blogpost-page.html" title="Read More">Read More</a>
						</div>
						<div className="post-ic"><span className="icon icon-Pencil"></span></div>
					</div>
				</article>
				<nav className="ow-pagination">
					<ul className="pagination">
						<li className="active"><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">Next</a></li>
					</ul>
				</nav>
			</div>
			<div className="col-md-3 col-sm-4 widget-area">
				<aside className="widget widget_categories">
					<h3 className="widget-title">Categories</h3>
					<ul>
					{blogcatResult && blogcatResult.map((cate)=>{

						return(
							
								<li><a title="kdk" href={`/searchblog?search=${encodeURIComponent(cate.name)}`}>{cate.name}</a><span>(*)</span></li>
							

						)
							
							
							}
							)
							}
						<li><a title="Language Science" href="#">Language Science</a><span>(10)</span></li>
						<li><a title="Student Guidance" href="#">Student Guidance</a><span>(12)</span></li>
						<li><a title="School Psychology" href="#">School Psychology</a><span>(08)</span></li>
						<li><a title="Vocational Counselling" href="#">Vocational Counselling	</a><span>(18)</span></li>
						<li><a title="Uncategorized" href="#">Uncategorized</a><span>(11)</span></li>
						<li><a title="Youth Science" href="#">Youth Science</a><span>(10)</span></li>
					</ul>
				</aside>
				<aside className="widget widget_latestnews">
					<h3 className="widget-title">Latest Blogs</h3>
					<div className="latestnews-box">
						<a href="blogpost-page.html" title="Along Communicate Directly With Experienced Teachers">Along Communicate Directly With Experienced Teachers</a>
						<span>25th May 2016</span>
					</div>
					<div className="latestnews-box">
						<a href="blogpost-page.html" title="Given The Tips To Students Succed In An Online Courses ">Given The Tips To Students Succed In An Online Courses </a>
						<span>25th May 2016</span>
					</div>
					<div className="latestnews-box">
						<a href="blogpost-page.html" title="Why Should Read Every Day">Why Should Read Every Day</a>
						<span>25th May 2016</span>
					</div>
				</aside>
				<aside className="widget courses-staff">
					<img src="images/staff.jpg" alt="staff" width="275" height="288"/>
					<h3>Welcome Guest</h3>
					<span>Guest</span>
					<p>My name is Guest. I grew up and studied in...</p>
				</aside>
			</div>
		</div>
		<div className="section-padding"></div>
	</div>
	
    </div>
    
  );
};


export async function getServerSideProps(context) {
	try {
	
	  const cookies = parseCookies(context.req); // Parse the cookies from the incoming request
	  const username = cookies['username'] || null;
	  const email    =    cookies['email'] ; // Access the specific cookie by name
	  let loggedIn;

	  try {
		

		const response2 = await fetch(`${process.env.API_URL}/api/categorylist`, {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json',
			},
			withCredentials:true
		  });

		 

		
		
		if (response2.ok) {
		  // Login successful, redirect to a dashboard or home page
		  
		
			console.log('SUCCESSFUL Fetch category');
			const blogcatlist = await response2.json()

			console.log(blogcatlist)
		
		  

		 
		  return {
			props: {
				
				blogcatlist
			},
		  };
		  
		
		
		  
		} else {
		  // Handle login error
		  console.error('Login failed');
		  alert('Login Failed');
		}
	  } catch (error) {
		console.error('Error occurred:', error);
	  }

	  


	  
	} catch (error) {
	  return {
		props: {
			username: null,
			loggedIn:true,
		},
	  };
	}
  }
  
  // Function to parse cookies from the request object
  const parseCookies = (req) => {
	return req.headers.cookie.split(';').reduce((cookies, cookie) => {
	  const [name, value] = cookie.trim().split('=');
	  cookies[name] = decodeURIComponent(value);
	  return cookies;
	}, {});
  };
  
export default IndexPage;