import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Card from './components/Card';
import Header from './components/Header';

const App = () => {
  const [jobData, setJobData] = useState([])

  useEffect(() => {
    const request = axios.get('https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json')
    request.then(response => {
      setJobData(response.data)
    })
  })

  return (
    <main>
      <Header />
      <div class="cards">
        {jobData.map((job, index) => {
          return <Card key={index} job={job}/>
        })}
      </div>
    </main>
  )
}

export default App;
