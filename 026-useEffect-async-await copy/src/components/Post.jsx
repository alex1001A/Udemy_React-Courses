import './Post.css'
import s from './Post.module.css'

function Post({item}) {

  const {userId, id, title, body} = item

  return (
    <div className='post'>
      <h2>User ID: {userId}</h2>
      <p><b>{title}</b></p>
      <p>{body}</p>
      <h3>{id}</h3>
    </div>
  )
}

export default Post