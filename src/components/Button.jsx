import React from 'react'

const Button = ({ onClick, text }) => {
    return (
        <button
            onClick={onClick}
            className='px-4 py-2 w-fit font-bold text-sm bg-zinc-800 text-white rounded'
        >
            {text}
        </button>
    )
}

export default Button
