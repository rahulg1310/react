import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {
  const info =[
    {
      num : '1',
      img : 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag : 'Satisfied'
    },
    {
      num : '2',
      img : 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag : 'Underserved'
    },
    {
      num : '3',
      img : 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag : 'Underbanked'
    },
    {
      num : '4',
      img : 'https://images.unsplash.com/photo-1555421689-43cad7100750?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag : 'Unreached'
    }
  ];
  return (
    <div>
      <Section1 info={info}/>
    </div>
  )
}

export default App
