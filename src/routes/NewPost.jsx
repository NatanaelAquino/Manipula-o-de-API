
import blogFetch from '../axios/config';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


import "./NewPost.css";
const NewPost = () => {
  const navigate= useNavigate()

  const[title,setTitle] = useState()
  const [body,setBody] = useState()

  const createPost = async (e)=>{
    e.preventDefault();

      const post = {title,body,userId:1};

    await blogFetch.post("/posts" ,{
      body:post,
    });
    navigate('/')
  };

  return (
    <div className='new-post'>
      <h2>Inserir novo post </h2>
      <form onSubmit={(e)=> createPost(e)}>
        <div className='from-contrl'>
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name='title'
            id='title'
            placeholder='Digite o titulo'
            onChange={(e) =>setTitle(e.target.value)}
          />
        </div>
        <div className='from-contrl'>
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name='body'
            id='body'
            placeholder='Digite o Conteúdo'
            onChange={(e) =>setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value='cria Post' className='btn' />
      </form>
    </div>
  )
}

export default NewPost
