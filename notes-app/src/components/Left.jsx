import React from 'react'

const Left = (props) => {
  return (
    <>
      <form className='flex flex-col lg:w-1/2 gap-4 items-start p-10'
              onSubmit={(e)=>{
                props.submitHandler(e);
              }} >
            <h1 className='text-4xl font-bold'>Add Notes</h1>
            <input
            className='w-full px-5 py-2 font-medium border-2 outline-none rounded' 
            type="text" 
            placeholder='Enter Notes Heading'
            value={props.title}
            onChange={(e)=>{
                props.setTitle(e.target.value);
            }} />
            <textarea 
            className='w-full px-5 py-2 h-32 font-medium border-2 outline-none rounded' 
            placeholder='Write Details'
            value={props.detail}
            onChange={(e)=>{
                props.setDetail(e.target.value);
            }} ></textarea>
            <button 
            className='bg-white w-full active:scale-95 text-black px-5 py-2 font-medium border-2 outline-none rounded'>Add Note</button>
      </form>
    </>
  )
}

export default Left
