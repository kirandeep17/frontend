import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from 'next/head';

export default function faq( {username} ) {
    const router = useRouter()
    const { msg } = router.query
    return (
        
        <div>
    
            
           
        
		
            <div className="pagebannercustom">
			
						
						<p><b>Question: What the website is about?</b></p>
            Answer: It is blog website. It shows information related to different topics given by users
           

           <div>
            <p><b>Question: How long time taken to approve and upload the blog?</b></p>
            Answer: Depends upon number of blog intake
           </div>

           <div>
            <p><b>Question: How long should blog posts be?</b></p>
            Answer: There aren’t exact rules but I recommend always aiming for 1800 words. This amount of content will give search engines a clear idea of the purpose and theme of that post, and it is enough content to thoroughly cover a subject in good detail. The emphasis though should also be on quality.
           </div>
		
			<div>
				<p><b>Question: What is a blogger and what do they do?</b></p>
				Answer: Traditionally, a blog was defined as a conversational website page or post that is updated regularly and written in a personal style. So a blogger could be said to be someone who puts a lot of focus on writing and creating content on their website.<br/>
						These days bloggers can build a successful and profitable business around their content when it is high-quality and informative. Income such as via affiliates, by selling eBooks, one’s own online courses etc means the chance to monetize blogging.
			</div>

			<div>
				<p><b>Question: When Should I start my Blog?</b></p>
				Answer: The sooner the better is quite simply the answer as the sooner you get online, the sooner you can start to mold your blog as it is an organic process. Your blog will take time and will build as you add posts and content.
    
			</div>

        

           <div>
            <br/>
            <br/>
			</div>
        </div>
           
        </div>

    );
}