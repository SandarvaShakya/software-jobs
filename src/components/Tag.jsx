import React from 'react'

const Tag = (props) => {
  return (
    <div className='tag' onClick={props.onClick}>{props.keyword || "JavaScript"}</div>
  )
}

export default Tag