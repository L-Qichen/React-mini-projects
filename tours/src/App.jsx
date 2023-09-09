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

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => { return tour.id !== id });
    setTours(newTours);
  }

  if (isLoading) {
    return (
      <>
        <div className='container'>
          <Loading />
        </div>
      </>
    )
  }

  if (tours.length === 0) {
    return (
      <>
        <div className='container'>
          <h1 className="header">No Tours Left</h1>
          <div className='no-tours'>
            <button type='button' className='btn' onClick={() => fetchData()}>Refresh</button>
          </div>
        </div >
      </>
    )
  }

  return (
    <>
      <div className='container'>
        <Tours tours={tours} deleteTour={deleteTour} />
      </div>
    </>
  )
}

export default App
