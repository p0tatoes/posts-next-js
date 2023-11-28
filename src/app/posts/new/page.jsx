import Button from '@/components/Button'
import InputText from '@/components/InputText'
import React from 'react'

const Posts = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-6 shadow-xl p-16 w-fit rounded-xl'>
            <InputText
                id='title'
                placeholder='Title'
            />
            <InputText
                id='author'
                placeholder='Author'
            />
            <InputText
                id='body'
                placeholder='Body'
            />
            <Button text='Post' />
        </div>
    )
}

export default Posts
