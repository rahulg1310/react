import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-2/3 px-6 py-6 gap-9 flex flex-nowrap overflow-x-auto'>
      {props.info.map(function(elem){
        return <RightCard img={elem.img} num={elem.num} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
