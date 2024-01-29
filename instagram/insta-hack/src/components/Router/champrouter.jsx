import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Waitpage from '../Waitpage'
import Login from '../Login'

function Champrouter() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/wait" element={<Waitpage/>}/>

    </Routes>
  )
}

export default Champrouter