import React from 'react'
import { useRouter } from "next/router";
export default function PageTitleBox() {
	const router = useRouter();
  return (
	 
	<div className="container-fluid no-padding pagebanner">
		<div class="container">
			<div class="pagebanner-content">
				
			{ router.route == "/faq" ?
			 <h3>Frequently Asked Quetions</h3> : 
			 
			 (router.route == "/contact" ?
			 <h3>Contacts Us</h3>
			 :
			 <h3>How It Works</h3>
			 )
			  }
				
				<ol class="breadcrumb">
					<li><a href="/">Home</a></li>
					<li></li>
				</ol>
			</div>
		</div>
	</div> 
  )
}

