import React from 'react'

const Tag = (props) => {
  return (
    <div className='tag'>{props.keyword || "JavaScript"}</div>
  )
}

export default Tag