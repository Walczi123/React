import React from 'react'

const generateArray = (n) =>(Array.from({length: n}, (v, k) => k+1))

const MyApp = () => (
  <div>
    <h3>Minimal React  walczakp</h3>
    <p>Bundle size: 62 bytes, Load time of the bundle: 32 ms, Last commit SHA1: 2b5414f951499ebad32b0f68a526c69d2d4c1c</p>  
    <ol>
      <li>Ex1. Generate an array of integers from 1 to 7</li>
      <ul>{generateArray(7).map(element => <li>{element}</li>)}</ul>
    </ol>
  </div>
)
export default MyApp

