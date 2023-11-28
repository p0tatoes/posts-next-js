'use client'

import React from 'react'
import Button from './Button'

const Post = ({ title, author, body }) => {
    return (
        <div className='border shadow-lg p-6 flex flex-col mb-2'>
            <h1 className='text-2xl font-black'>{title}</h1>
            <h2 className='text-lg font-medium italic mb-3'>by: {author}</h2>
            {/* Spacing */}
            <p className='text-base'>{body}</p>
            <div className='w-full flex flex-row-reverse'>
                <Button
                    onClick={() => console.log(title)}
                    text='View'
                />
            </div>
        </div>
    )
}

export default Post
