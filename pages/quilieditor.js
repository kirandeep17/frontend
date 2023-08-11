import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

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

export default function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDraft, setIsDraft] = useState(true);
  const [isPublished, setIsPublished] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    const requestObj = {
      id: new Date().toISOString(),
      title: title,
      content: content,
      isDraft: isDraft,
      isPublished: isPublished
    };

    fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(requestObj),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then((data) => {
        console.log(data)
      });

  }

  function handleTitleChange(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }

  return (
    <div className='mycolor'>
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Title</label>
      <input type="text" value={title} name="title" placeholder="Enter a title" onChange={handleTitleChange} required />
      <QuillNoSSRWrapper modules={modules} onChange={setContent} theme="snow" />
      <button>Save</button>
     
    </form>
    </div>
  )
}