import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div>
      <div className="Card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={20}/></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className="post">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div className="pt2">
            <div className="pay">
            <h3>{props.pay}</h3>
            <span>{props.location}</span>
            </div>
            <button>Apply now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
