import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import DiaryContextProvider from './context/diaryContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DiaryContextProvider>
      <Router>
        < App />
      </Router>
    </DiaryContextProvider>
  </React.StrictMode>,
)
