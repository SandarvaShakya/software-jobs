import { useContext, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Card from './components/Card';
import Header from './components/Header';
import TagBar from './components/TagBar';
import { TagContext } from './components/TagContext';

const base_url = 'https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json'

const App = () => {
  //contains all the data
  const [jobData, setJobData] = useState([])
  //contains filtered data
  const [filteredJobData, setFilteredJobData] = useState([]);
  const { tags } = useContext(TagContext)

  //fetch data
  useEffect(() => {
    const request = axios.get(base_url)
    request.then(response => {
      setJobData(response.data)
    })
  }, [])

  //filter data based on the tags
  useEffect(() => {
    if (tags.length === 0) {
      // If no tags are selected, show all jobs
      setFilteredJobData(jobData);
    } else {
      const filteredJobs = jobData.filter(job => {
        return tags.every(tag => job.keywords.includes(tag));
      });
      setFilteredJobData(filteredJobs);
    }
  }, [tags, jobData]);

  return (
    <main>
      <Header />
      {tags.length > 0 && <TagBar />}
      <div className="cards">
          {filteredJobData.map((job, index) => (
              <Card key={index} job={job} />
          ))}
      </div>
    </main>
  )
}

export default App;
