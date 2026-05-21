import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Content from './components/Content'

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
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white p-10 '>
      <Content statement={statement} index={index} setIndex={setIndex} setUserData={setUserData}  />
    </div>
  )
}

export default App
