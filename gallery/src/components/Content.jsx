import React from 'react'

const Content = (props) => {
  return (
    <>
      <div className='flex h-[92%] gap-4 flex-wrap overflow-auto justify-center'>
        {props.statement}
      </div>
      <div className='mt-6 flex justify-center items-center gap-3'>
        <button 
        onClick={()=>{
          if(props.index>1){
            props.setIndex(props.index-1);
            props.setUserData([]);
          }
        }}
        className='bg-amber-400 px-6 py-3 rounded-2xl cursor-pointer active:scale-95 text-black font-bold'>Prev</button>
        <h2>Page {props.index}</h2>
        <button 
        onClick={()=>{
          props.setIndex(props.index+1);
          props.setUserData([]);
        }}
        className='bg-amber-400 px-6 py-3 rounded-2xl cursor-pointer active:scale-95 text-black font-bold'>Next</button>
      </div>
    </>
  )
}

export default Content
