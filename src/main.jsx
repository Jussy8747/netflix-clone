import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { MainPageContextProvider } from './context/MainPageContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <MainPageContextProvider>
    <App />
    </MainPageContextProvider>
   
    </React.StrictMode>
   
  
)
