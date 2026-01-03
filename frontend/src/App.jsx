import { useEffect, useState } from 'react'
import axios from 'axios'
import AvailabilityConfig from './components/AvailabilityConfig'

function App() {
  const [apiStatus, setApiStatus] = useState('checking...')

  useEffect(() => {
    // Health check to verify backend connection
    axios.get('/api/health/')
      .then(response => {
        setApiStatus(response.data.status)
      })
      .catch(error => {
        setApiStatus('error - check if backend is running')
        console.error('API health check failed:', error)
      })
  }, [])

  return (
    <div className="app">
      <header className="header">
        <h1>Client Booking</h1>
        <div className="api-status">
          API Status: <span className={apiStatus === 'ok' ? 'status-ok' : 'status-error'}>{apiStatus}</span>
        </div>
      </header>

      <main className="main-content">
        <AvailabilityConfig />
      </main>
    </div>
  )
}

export default App
