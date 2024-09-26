import React from 'react'

import './Post.css'

function Post({item}) {

const {userId, id, title, body} = item

  return (
    <div className='post'>
        <h1>{id}</h1>
        <h2>{title}</h2>
        <p>{body}</p>
        <small>User ID: {userId}</small>
    </div>
  )
}

export default Post