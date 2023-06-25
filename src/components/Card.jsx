import React from 'react'
import Tag from './Tag'

const Card = ({job}) => {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={job.company_logo} alt="office-logo" />
        </div>
        <div className="card-content">
            <div className="job-description">
                <h3 className="job-company">{job.company}</h3>
                <h1 className='job-title'>{job.position}</h1>
                <span className="job-info">1d ago</span>
                <span className="job-info">-</span>
                <span className="job-info">{job.timing}</span>
                <span className="job-info">-</span>
                <span className="job-info">{job.location}</span>
                  {/* -  {job.timing}  -  {job.location}</span> */}
            </div>
            <div className="tags">
                {job.keywords.map((keyword, index) => {
                    return <Tag key={index} keyword={keyword}/>
                })}
            </div>
        </div>

    </div>
  )
}

export default Card