import React, { useState,useEffect } from 'react';
import Head from 'next/head';
//import RichTextEditor from '../components/RichTextEditor';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { getCookies, setCookie, deleteCookie } from 'cookies-next';
import HomeLayout from '../components/Layout/HomeLayout';
import Router from 'next/router'



const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

export default function  ThreeDEffectContainer  ({userData,id})  {
  const [title, setTitle] = useState(userData.title);
  const [content, setContent] = useState(userData.content);
  const [isDraft, setIsDraft] = useState(true);
  const [isPublished, setIsPublished] = useState(false);
  
  const [category, setCategory] = useState('category1');
  const [description, setDescription] = useState('');
  const [userid, setUserid] = useState(id);

 

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        fetch('http://127.0.0.1:8000/api/categorylist')  
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    };

    const handleCategoryChange = event => {
        setSelectedCategory(event.target.value);
    };

   


  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  




  function submitHandler(event) {
    event.preventDefault();

    const userid = getCookie('id');

 
    

    const requestObj = {
      //id: new Date().toISOString(),
      title: title,
      content: content,
      isDraft: isDraft,
      isPublished: isPublished,
      description:"hello",
      author:userid,
      category:selectedCategory,
      id:userid
    };

    fetch('http://127.0.0.1:8000/api/blogPostUpdate', {
      method: 'PATCH',
      body: JSON.stringify(requestObj),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then((data) => {
        alert("Blog Posted!")
        Router.push('/writepost')
      });

  }

  function handleTitleChange(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }
  return (                
  
    <div>

        <Head>
                <link rel="stylesheet" href="/mycss/profilecss.css"></link>
        </Head>



        <div className="body">
			  <div className="container">
				  
			  
						<div className="kcontent">
						
							<form id="inputForm" onSubmit={submitHandler}>
								<label for="title">Title:</label>
								<input type="text" id="title" value={title}  onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title"></input>

								<label for="category">Category:</label>
								<select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Select a category</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
								
								
								<label for="description">Description:</label>
								
                                
                                

                                
                <QuillNoSSRWrapper name="content" modules={modules} onChange={setContent} value={content} theme="snow" />


								

								<center><button className='button' type="submit">Post</button> </center>

                <div dangerouslySetInnerHTML={{ __html: content }}>

                  
                </div>
							  </form>
						
						  
						</div>
			  </div>



 </div>

        

    </div>

        


    
  );
 
};

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
			userData,
            id  
		},
	  };

	
};

ThreeDEffectContainer.getLayout = function(page) {
  return <HomeLayout>{page}</HomeLayout>;
};