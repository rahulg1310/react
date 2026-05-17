import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const sub=(e)=>{
    e.preventDefault();
    console.log('Form submited',name);
    setName('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        sub(e);
      }}>
        <input type="text"  placeholder='Enter Name' value={name} onChange={(e)=>{
          setName(e.target.value);
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
