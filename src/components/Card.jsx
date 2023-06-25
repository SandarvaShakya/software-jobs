import React, { useContext } from 'react'
import Tag from './Tag'
import { TagContext } from './TagContext';

const Card = ({job}) => {
    // logic to show days ago
    const timestamp = job.posted_on;
    const postedDate = new Date(timestamp);
    const currentDate = new Date();
    const timeDifference = Math.abs(currentDate.getTime() - postedDate.getTime());
    const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24));

    const { tags, setTags } = useContext(TagContext)
    const handleClick = (keyword) => {
        if(!tags.includes(keyword)){
            setTags([...tags, keyword])
        }
    }

    return (
        <div className='card'>
            <div className="card-img">
                <img src={job.company_logo} alt="office-logo" />
            </div>
            <div className="card-content">
                <div className="job-description">
                    <div className="job-heading">
                        <h3 className="job-company">{job.company}</h3>
                        {daysAgo <= 5 && <span className='new'>New!</span> }
                        {daysAgo <= 10 && <span className='featured'>Featured!</span> }
                    </div>
                    <h1 className='job-title'>{job.position}</h1>
                    <span className="job-info">{daysAgo} days ago</span>
                    <span className="job-info">-</span>
                    <span className="job-info">{job.timing}</span>
                    <span className="job-info">-</span>
                    <span className="job-info">{job.location}</span>
                </div>
                <div className="tags">
                    {job.keywords.map((keyword, index) => {
                        return <Tag 
                            key={index} 
                            keyword={keyword} 
                            onClick={() => handleClick(keyword)}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card