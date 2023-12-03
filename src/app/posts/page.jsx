'use client'

import Post from '@/components/Post'
import React from 'react'
import { useFetch } from 'usehooks-ts'

const Posts = () => {
    const results = useFetch('/api/posts')

    if (results.error) {
        return <div>{results.error.message}</div>
    }

    if (!results.data) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {results.data?.map((post) => (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    body={post.body}
                />
            ))}
        </div>
    )
}

export default Posts
