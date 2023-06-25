import React from 'react'

const TagBox = (props) => {
  return (
    <div className='tag-box'>
        <span className="tag-box-text">{props.text}</span>
        <span className="tag-box-img" onClick={props.onClick}>
            <img src="/icons/x-solid.svg" alt="cross" />
        </span>
    </div>
  )
}

export default TagBox