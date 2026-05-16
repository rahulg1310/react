import React, { useState } from 'react'

const App = () => {
  const [num , setNum ] = useState(0);
  const [name, setName] = useState({user : 'Rahul', age : 19});
  const increase = ()=>{
    setNum(num+1);
  }
  const decrease = ()=>{
    setNum(num-1);
  }
  const details = ()=>{
    const newDet = {...name};
    newDet.user = 'Keef';
    newDet.age = 21;
    setName(newDet);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <h2>{name.user}, {name.age}</h2>
      <button onClick={details}>Change details</button>
    </div>
  )
}

export default App
