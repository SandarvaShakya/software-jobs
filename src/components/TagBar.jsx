import React, { useContext } from 'react'
import { TagContext } from './TagContext'
import TagBox from './TagBox'

const TagBar = () => {
  const { tags, setTags } = useContext(TagContext)

  const handleClick = (clickedTag) => {
    const removedTags = tags.filter(tag => clickedTag !== tag)
    setTags(removedTags)
  }
  
    return (
    <div className='tag-bar'>
        {tags.length > 0 && tags.map((tag, index) => {
            return <TagBox  key={index} text={tag} onClick={() => handleClick(tag)}/>
        })}
        {tags.length > 0 && <p className='clear' onClick={() => setTags([])}>Clear</p> }
    </div>
  )
}

export default TagBar