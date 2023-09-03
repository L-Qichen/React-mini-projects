import { useState, useEffect } from 'react'
import { Loading } from './Loading'
import { Tours } from './Tours'
import './style.css'


const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();
      setIsLoading(false);
      setTours(toursData);
    } catch {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className='container'>
          <Loading />
        </div>
      </>
    )
  }

  return (
    <>
      <div className='container'>
        <Tours tours={tours} />
      </div>
    </>
  )
}

export default App
