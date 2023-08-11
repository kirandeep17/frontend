import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from 'next/head';
import { useEffect } from 'react';
import HomeLayout from '../components/Layout/HomeLayout';
import Router from 'next/router';
import { useState } from 'react';
export default function searchblog( {searchParamQuery} ) {
    const [search, setSearch] = useState('');
    const [searchResult,setSearchResult]= useState('');

    useEffect(() => {
        // This function will be called when the component loads
       

        handleSubmit(new Event('submit'))

        
    }, []);


	function clearAllCookies() {
		const cookies = document.cookie.split(';');
	  
		for (let i = 0; i < cookies.length; i++) {
		  const cookie = cookies[i];
		  const eqPos = cookie.indexOf('=');
		  const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
		}
	  }


      

	  
      const handleSubmit = async (e) =>  {
        //console.log(myvariable);
        e.preventDefault();
      
        console.log(search);
       
        setSearchResult('');
        let searchParam = search;
        if(search.length>0){
            searchParam = search;
           

        } else {            
            searchParam = searchParamQuery;
            

        }
        
        const response = await fetch(`http://127.0.0.1:8000/api/searchblog?search=${searchParam}`);
        const data = await response.json();
        console.log(data)
        setSearchResult(data);
        console.log(searchResult)
        
    }

	const handleLogout = async() =>{

		console.log("here")


		try {
			const response = await fetch('http://127.0.0.1:8000/api/logout', {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			});
			
			if (response.ok) {
			  // Login successful, redirect to a dashboard or home page
			  console.log('SUCCESSFUL LOGOUT');
			  clearAllCookies()
			  Router.push('/')
			
			
			  
			} else {
			  // Handle login error
			  console.error('Login failed');
			}
		  } catch (error) {
			console.error('Error occurred:', error);
		  }


	}

	const renderContent = () => {
		console.log(loggedIn)
		if (loggedIn == true) {
			return(

				<div className="topheader-right">
				<a href="#" onClick={handleLogout} title="logout"><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
				</div>
			)
			
			} else
			{
				<div className="topheader-right">
				<a href="#" title="Login"><i className="fa fa-sign-out" aria-hidden="true"></i>Login</a>
				<a href="#" title="Register">Register</a>
				</div>
			}
	  };


    
      const renderContentdiv = (data) => {
		
			return(

				<div className="topheader-right">
				<a href="#" onClick={handleLogout} title="logout"><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
				</div>
			)
			
			
	  };
    
	
    
    return (
		
        <div>
			
			<Head>
			<link rel="stylesheet" type="text/css" href="/edu/style.css"></link>
            
			
		</Head>
            <div>
            


	
	<div className="container blog">
		<div className="section-padding">
        <form onSubmit={handleSubmit}>
            <div class="form-group mx-sm-3 mb-2">
            <label for="" class="sr-only">search</label>
            <input name="search" onChange={(e) => setSearch(e.target.value)} type="" class="form-control" id="" placeholder="Search"/>
            </div>
            <center><button type="submit" class="btn btn-success btn-lg mb-2">Search</button></center>
        </form>
        </div>
		<div className="row">
			<div className="col-md-9 col-sm-8 content-area">


		
			<div id="mydiv"  >
                        { searchResult &&
                            searchResult.map((blog)=>{
                                return(
                                    <div key={blog.id} >
                                        
                                        <article className="type-post">
										<div className="entry-cover">
											<a title="Cover" href="blogpost-page.html"><img width="860" height="470" alt="latestnews" src="images/blog1.jpg"/></a>
										</div>
										<div className="entry-block">
											<div className="entry-contentblock">
												<div className="entry-meta">
													<span className="postby">By : <a href="#" title="Andreanne Turcotte"> {blog.myauthor}</a></span>
													<span className="postcatgory">Category : <a href="#" title="News Posted"> {blog.category}</a></span>
													<span className="postdate">Date : <a href="#" title="date posted"> {blog.created_at}</a></span>
												</div>
												<div className="entry-block">
													<div className="entry-title">
														<a title="blog Title" href="#"><h3>{blog.title}</h3></a>
													</div>
													<div className="entry-content">
														<div dangerouslySetInnerHTML={{ __html: blog.content }}/>
													</div>
												</div>
												<a href={`/detailblogpost?id=${blog.id}`} title="Read More">Read More</a>
											</div>
											<div className="post-ic"><span className="icon icon-Pencil"></span></div>
										</div>
										</article>
										
										
										
										
										
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                        
             



		
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
					<h3>Charlie Brown</h3>
					<span>Web Designer</span>
					<p>My name is Ruth. I grew up and studied in...</p>
				</aside>
			</div>
		</div>
		<div className="section-padding"></div>
	</div>
	
	<footer className="footer-main footer2 container-fluid no-padding">	
		
		<div className="container">
			<div className="row">
				<div className="col-md-3 col-sm-6">
					<aside className="ftr-widget about_widget">
						<a className="footer-logo" href="#" title="Logo"><img alt="logo" src="images/logo.png"/>Edumax<span>Education of Best</span></a>
						<span>Marsh mallow muffin souffle jelly-o tart cake Marshmallow macaroon jelly jubes tiramisu lites halsat croissant cake.</span>
						<p><span className="icon icon-Plaine"></span>Address : 44 New Design Street, Melbourne 005</p>
						<p><span className="icon icon-Phone2"></span>Phone : <a title="01800433633" href="tel:+01800433633">(01) 800 433 633</a></p>
						<p><span className="icon icon-Mail"></span>Email : <a title="info@Example.com" href="mailto:info@Example.com">info@Example.com</a></p>
					</aside>
				</div>
				<div className="col-md-3 col-sm-6">	
					<aside className="ftr-widget useful-llink">
						<h3 className="widget-title">Usefull Links</h3>
						<ul>
							<li><a href="about-page.html" title="About">About</a></li>
							<li><a href="#" title="Careers">Careers</a></li>
							<li><a href="#" title="Main Events">Main Events</a></li>
							<li><a href="#" title="Become a Teacher">Become a Teacher</a></li>
							<li><a href="blog-page.html" title="Latest Blogs">Latest Blogs</a></li>
							<li><a href="contactus-page.html" title="Contact us">Contacs</a></li>
						</ul>
					</aside>
				</div>
				<div className="col-md-3 col-sm-6">
					<aside className="ftr-widget flickr_widget">
						<h3 className="widget-title">Our Flicker</h3>
							<div className="flickr-box">
								<img src="images/flick-rpost1.jpg" alt="flick-rpost1" width="62" height="62"/>
								<p>New Science Research<span>05th May 2016</span></p>
							</div>
							<div className="flickr-box">
								<img src="images/flick-rpost2.jpg" alt="flick-rpost2" width="62" height="62"/>
								<p>How White Is Too White?<span>05th May 2016</span></p>
							</div>
							<div className="flickr-box">
								<img src="images/flick-rpost3.jpg" alt="flick-rpost3" width="62" height="62"/>
								<p>New York Schools Wonder:<span>05th May 2016</span></p>
							</div>
					</aside>
				</div>
				<div className="col-md-3 col-sm-6">
					<aside className="ftr-widget newsletter_widget">
						<h3 className="widget-title">News Letters</h3>
						<p>Subscribe Our Newsletter get the Important News. The Amazing Offers & Inside Scoops:</p>
						 <div className="input-group">
							<input type="text" className="form-control" placeholder="Enter your email"/>
							<span className="input-group-btn"><button className="btn" type="button" title="Go">Go</button></span>
						</div>
						<ul>
							<li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li> 
							<li><a href="#" title="Behance"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
							<li><a href="#" title="Dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
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
	

            </div>
    </div>   
    );
}

export async function getServerSideProps(context) {
	try {
	
	  const cookies = parseCookies(context.req); // Parse the cookies from the incoming request
	  const username = cookies['username'] || null;
	  const email    =    cookies['email'] ; // Access the specific cookie by name
	  let loggedIn;
      const searchParamQuery = context.query.search || '';



        
     
	

        return {
            props: {
                searchParamQuery,
                
            },
        };


	  
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
  

searchblog.getLayout = function(page) {
    return <HomeLayout>{page}</HomeLayout>;
  };