import React from 'react'

const InputText = ({ id, placeholder }) => {
    return (
        <input
            type='text'
            name={id}
            id={id}
            placeholder={placeholder}
            className='px-6 py-2 rounded-full bg-zinc-200'
        />
    )
}

export default InputText
