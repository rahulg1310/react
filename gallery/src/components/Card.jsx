import React from 'react'

const Card = (props) => {
  return (
    <>
      <a href={props.elem.url}>
          <div className='h-40 w-50 bg-white rounded-2xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
        </div>
        <h2 className='mt-1'>{props.elem.author}</h2>
        </a>
    </>
  )
}

export default Card
