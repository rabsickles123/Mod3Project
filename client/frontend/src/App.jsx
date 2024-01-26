import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {

    const getData = async () => {
      const response = await fetch('/api/test')
      const data = await response.json()
      console.log(data)
    }
    getData()
    },[])

  return (
    <>
      Hello World
    </>
  )
}

export default App
