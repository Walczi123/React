import React from 'react'

const generateArray = (n) =>(Array.from({length: n}, (v, k) => k+1))
const generateRandomArray = (n) =>(Array.from({length: n}, (v, k) => Math.round(Math.random()*24)+1))
const examleArray1 = [2, 56, 23, 88, 17, 4];
const examleArray2 =[2, 5, 8, 10];
const SquareArray = (a) =>(Array.from(a,x=>Math.sqrt(x)))


const MyApp = () => (
  <div>
    <h3>Minimal React  walczakp</h3>
    <p>Bundle size: 62 bytes, Load time of the bundle: 32 ms, Last commit SHA1: 2b5414f951499ebad32b0f68a526c69d2d4c1c</p>  
    <ul>
      <li>Ex2. Generate an array of integers from 1 to 7</li>
      <ul>{generateArray(5).map(element => <li>{element}</li>)}</ul>
      <li>Ex3. Generate an array of random numbers from 1 to 25</li>
      <ul>{generateRandomArray(5).map(element => <li>{element}</li>)}</ul>
      <li>Ex4. Generate an array of elements that are larger than 15</li>
      <ul>{examleArray1.filter(element => element>15).map(element => <li>{element}</li>)}</ul>
      <li>Ex5. Array with the square root values of each number [2, 5, 8, 10]</li>
      <ul>{SquareArray(examleArray2).map(element => <li>{element}</li>)}</ul>
    </ul>
  </div>
)
export default MyApp

