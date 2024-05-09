import React from 'react'

export default function Main({data}) {
    return (
        <div className='h-[33rem] p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
            <div dangerouslySetInnerHTML={{__html: data}} />
        </div>
    )
}
