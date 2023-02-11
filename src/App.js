import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navigation from './components/Navigation'

import Home from "./pages/Home"




const App = () => {
 return  (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Navigation' element={<Navigation />} />
    
  </Routes>
  
  
  </BrowserRouter>


 )
}



// const ProtectedRoute = () =>{

// }


// const AdminRoute = () =>{

// }


export default App