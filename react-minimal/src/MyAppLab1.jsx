import React from 'react'

const generateArray = (n) =>(Array.from({length: n}, (v, k) => k+1))
const generateRandomArray = (n) =>(Array.from({length: n}, (v, k) => Math.round(Math.random()*24)+1))
const examleArray1 = [2, 56, 23, 88, 17, 4];
const examleArray2 =[2, 5, 8, 10];
const SquareArray = (a) =>(Array.from(a,x=>Math.sqrt(x)))
const data = [
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]

function allStudents(){
  if(document.getElementById('allStudentsData').innerHTML==""){
  data.forEach(element => {
    element.students.forEach(element2=>{
      document.getElementById('allStudentsData').innerHTML +="<li>"+element2.name+"</li>"
    });
  });
  }else{
    document.getElementById('allStudentsData').innerHTML="";
  }
} 

function sortedStudents(){ 
  if(document.getElementById('sortedStudentsData').innerHTML==""){
  var names=[];
  data.forEach(element => {
    element.students.forEach(element2=>{
      names.push(element2.name);
    });
  });
  names.sort();
  names.forEach(element => document.getElementById('sortedStudentsData').innerHTML += "<li>"+element+"</li>");
  }else{
    document.getElementById('sortedStudentsData').innerHTML="";
  }
} 

function oldStudents(){ 
  if(document.getElementById('oldStudentsData').innerHTML==""){
  var names=[];
  data.forEach(element => {
    if(element.active){
      element.students.forEach( element2 =>{
        if(element2.age>20)names.push(element2.name)
      });
    }
  });
  names.forEach(element => document.getElementById('oldStudentsData').innerHTML += "<li>"+element+"</li>");
  }else{
    document.getElementById('oldStudentsData').innerHTML="";
  }
} 


const MyAppLab1 = () => (
  <div>
    <h3>Minimal React  walczakp Lab1</h3>
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
    <button onClick={allStudents}>All students</button>
      <ul id="allStudentsData"></ul>
    <button onClick={sortedStudents}>Sort Students</button>
      <ul id="sortedStudentsData"></ul>
    <button onClick={oldStudents}>Old students</button>
      <ul id="oldStudentsData"></ul>   
    </div>      
)
export default MyAppLab1

