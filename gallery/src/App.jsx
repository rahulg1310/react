import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserData(response.data);
  }

  useEffect(function(){
    getData();
  },[index])

  let statement = <h3 className=''>loading....</h3>;  

  if(userData.length>0){
    statement = userData.map(function(elem,idx){
      return <div>
        <a href={elem.url}>
          <div className='h-40 w-50 bg-white rounded-2xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
        </div>
        <h2 className='mt-1'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white p-10 overflow-auto '>
      <div className='flex gap-4 flex-wrap overflow-hidden justify-center'>
        {statement}
      </div>
      <div className='mt-6 flex justify-center items-center gap-3'>
        <button 
        onClick={()=>{
          if(index>1){
            setIndex(index-1);
            setUserData([]);
          }
        }}
        className='bg-amber-400 px-6 py-3 rounded-2xl cursor-pointer active:scale-95 text-black font-bold'>Prev</button>
        <h2>Page {index}</h2>
        <button 
        onClick={()=>{
          setIndex(index+1);
          setUserData([]);
        }}
        className='bg-amber-400 px-6 py-3 rounded-2xl cursor-pointer active:scale-95 text-black font-bold'>Next</button>
      </div>
    </div>
  )
}

export default App
