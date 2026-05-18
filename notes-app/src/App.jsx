import React, { useState } from 'react'
import Left from './components/Left';
import Right from './components/Right';

const App = () => {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) =>{
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,detail});
    setTask(copyTask);
    setTitle('');
    setDetail('');
  }

  const delTask = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
        <Left title={title} detail={detail} setTitle={setTitle} setDetail={setDetail} submitHandler={submitHandler} />
        <Right task={task} delTask={delTask}  />
    </div>
  )
}

export default App
