import React from 'react'

function BlogPostPage( {params}) {
  return (
    <main>
        <h1>Blog post!</h1>
        <p>{params.slug}</p>
    </main>
  )
}

export default BlogPostPage