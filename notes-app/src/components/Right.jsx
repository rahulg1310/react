import React from 'react'

const Right = (props) => {
  return (
    <>
      <div className=' p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap  gap-5 mt-5 overflow-auto h-[90%]'>
          {props.task.map(function(elem,idx){
            return <div className='flex flex-col h-52 w-40 bg-white rounded-2xl text-black py-6 px-4'>
              <h3 className='font-bold mb-3'>{elem.title}</h3>
              <p className='text-xs text-gray-500'>{elem.detail}</p>
              <button onClick={()=>{
                props.delTask(idx);
              }} className='w-full bg-red-400 items-end active:scale-95 py-1 rounded mt-auto text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Right
