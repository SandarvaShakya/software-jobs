import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Card from './components/Card';
import Header from './components/Header';
import TagBar from './components/TagBar';

const base_url = 'https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json'

const App = () => {
  //contains all the data
  const [jobData, setJobData] = useState([])

  //fetch data
  useEffect(() => {
    const request = axios.get(base_url)
    request.then(response => {
      setJobData(response.data)
    })
  }, [])

  return (
    <main>
      <Header />
      <TagBar />
      <div className="cards">
        {jobData.map((job, index) => {
          return <Card
            key={index}
            job={job}
          />
        })}
      </div>
    </main>
  )
}

export default App;
