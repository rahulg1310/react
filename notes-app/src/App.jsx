import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(title);
    console.log(detail);
    setTitle('');
    setDetail('');
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
        <form className='flex flex-col lg:w-1/2 gap-4 items-start p-10'
              onSubmit={(e)=>{
                submitHandler(e);
              }} >
          <h1 className='text-4xl font-bold'>Add Notes</h1>
          <input
          className='w-full px-5 py-2 font-medium border-2 outline-none rounded' 
          type="text" 
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }} />
          <textarea 
          className='w-full px-5 py-2 h-32 font-medium border-2 outline-none rounded' 
          placeholder='Write Details'
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value);
          }} ></textarea>
          <button 
          className='bg-white w-full text-black px-5 py-2 font-medium border-2 outline-none rounded'>Add Note</button>
      </form>
      <div className=' p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full'>
          <div className='h-52 w-40 bg-white rounded-2xl'></div>
          <div className='h-52 w-40 bg-white rounded-2xl'></div>
          <div className='h-52 w-40 bg-white rounded-2xl'></div>    
        </div>
      </div>
    </div>
  )
}

export default App
