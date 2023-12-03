import React from 'react'

const InputText = ({id, placeholder, onChange}) => {
    return (
        <input
            type='text'
            name={id}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            className='px-6 py-2 rounded-full bg-zinc-200'
        />
    )
}

export default InputText
