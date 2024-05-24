import React from 'react'

function Post({item}) {

const {userId, id, title, body} = item

  return (
    <div>
        <h1>{id}</h1>
        <h2>{title}</h2>
        <p>{body}</p>
        <small>{userId}</small>
    </div>
  )
}

export default Post