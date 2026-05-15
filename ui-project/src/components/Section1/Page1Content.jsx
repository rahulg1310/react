import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-20 py-10 h-[90vh] flex items-center gap-10' >
      <LeftContent/>
      <RightContent info={props.info}/>
    </div>
  )
}

export default Page1Content
