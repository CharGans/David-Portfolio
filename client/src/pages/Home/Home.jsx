import { useEffect } from 'react'
import useStore from '../../store/useStore'

function Home() {
  const { message, fetchMessage } = useStore()
  
  useEffect(() => {
    fetchMessage()
  }, [fetchMessage])

  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p>
    </div>
  )
}

export default Home