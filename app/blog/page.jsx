import Link from 'next/link'
import React from 'react'

function BlogPage() {
  return (
    <main>
        <h1>Blog</h1>
        <p><Link href='/blog/post-1'>1st post</Link></p>
        <p><Link href='/blog/post-2'>2nd post</Link></p>
        <p><Link href='/blog/post-3'>3rd post</Link></p>
    </main>
  )
}

export default BlogPage