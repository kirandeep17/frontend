import Reactt, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';





const Posts = ({ posts }) => {
    return (
      <div>
        <h1>Posts</h1>
        {posts ? (
          <ul>
		  
            {posts.map(post => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
				<p>{post.keywords}</p>
				<p>{post.meta_tags}</p>
				<p>{post.heading}</p>
				<p>{post.content}</p>
				<p>{post.created_at}</p>
				<p>{post.modified_at}</p>
				
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    );
  };
  
  export default Posts;

  export async function getServerSideProps() {
    try {
      // Make the API request
    const response = await fetch('http://127.0.0.1:8000/api/article/3');
    const posts = await response.json();

    return {
      props: {
        posts
      }
    };
  } catch (error) {
    console.error('Error fetching posts: ', error);

    return {
      props: {
        posts: null
      }
    };
  }
}