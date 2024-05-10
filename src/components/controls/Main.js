import React from 'react'

export default function Main({data}) {
    // console.log('_d.',data);
    return (
        <div className='h-[33rem]'>
           {data.map((x,inx)=>(
            <div  key={`block_${inx}`}>
                <h2 className='text-2xl bm-2'>{x?.title}</h2>
                <div className=' p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700' dangerouslySetInnerHTML={{__html: x?.htmlcode}} />
            </div>
           ))}
        </div>
    )
}
