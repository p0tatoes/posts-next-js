'use client'

import Button from '@/components/Button'
import InputText from '@/components/InputText'
import React, { useState } from 'react'

const NewPost = () => {
    const [form, setForm] = useState({
        title: '',
        author: '',
        body: '',
    })

    const handleChange = (e) => {
        const id = e.target.id

        setForm({
            ...form,
            [id]: e.target.value,
        })
    }

    const handleSubmit = async () => {
        const request = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(form),
        })

        const data = await request.json()
        console.log(data)
    }

    return (
        <div className='flex flex-col justify-center items-center gap-6 shadow-xl p-16 w-fit rounded-xl'>
            <h1 className='text-2xl font-black'>Create new post</h1>

            <InputText
                id='title'
                placeholder='Title'
                onChange={handleChange}
            />

            <InputText
                id='author'
                placeholder='Author'
                onChange={handleChange}
            />

            <InputText
                id='body'
                placeholder='Body'
                onChange={handleChange}
            />

            <Button
                text='Post'
                onClick={handleSubmit}
            />
        </div>
    )
}

export default NewPost
