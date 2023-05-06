import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './comments.css'
import blogFetch from '../axios/config'


const Comments = () => {


  const { id } = useParams();


  const [post, setPost] = useState(null)

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`)
      const data = response.data;
      setPost(data);
    } catch (error) {
      console.log('error')
    }
  }
  useEffect(() => {
    getPost()
  }, [])



  const [Comentario, setComentario] = useState([])


  const getComentario = async () => {

    try {

      const response = await blogFetch.get(`/comments?postId=${id}`)

      const data = response.data;

      setComentario(data);

    } catch (error) {

      console.log('error')

    }
  }
  useEffect(() => {
    getComentario()
  }, [])




  return (
    <div>
      {post ? (
        <div className='Comment'>
          <span className="post" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </span>
          <div className='Comments'>
            <h2>comentários</h2>
              <ul>
                {Comentario.map(user => (
                  <li key={user.id}>
                    <p className='name'>Name: {user.name}</p>
                    <p className='email'>Email: {user.email}</p>
                    <h3 className='body' >{user.body}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      ) : (
        <p>CARREGANDO...</p>
      )}
    </div>
  );
};

export default Comments;
