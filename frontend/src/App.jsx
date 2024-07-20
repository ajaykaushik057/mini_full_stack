import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([])

  const fetchJokes = async () => {
    try {
      const response = await axios.get('/api/jokes')
      setJokes(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJokes()
  }, []) 

  return (
    <>
      <h1>Ajay Backend</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div className='joke-card' key={joke.id}>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
