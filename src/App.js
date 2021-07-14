import './App.css'
import Home from './components/Home'
import TVShowsMg from './components/TVShowsMg'
import MyFooter from './components/MyFooter'
import SearchFunctionality from './components/SearchFunctionality'
import Newnavbar from './components/Newnavbar'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ShowDetails from './components/ShowDetails'

function App() {
  
  const [search, setSearch] = useState("")
  
  return (
    
    <div>
      <Router>
      <div><Newnavbar /></div>
      <div><TVShowsMg /></div>
      
      <Route path = "/details" exact component = {ShowDetails} />
     
      <Home />
     
      <MyFooter />
      </Router>
      
    </div>
    
  )
}

export default App;
