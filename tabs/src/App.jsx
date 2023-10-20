import { useState, useEffect } from 'react'
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';
import './style.css'

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const jobsData = await response.json();
    setJobs(jobsData);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>Loading。。</div>
    )
  }
  return (
    <>
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs}
        currentItem={currentItem} />
    </>
  )
}

export default App;
