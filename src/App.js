import { useState } from "react"
import ClassButton from "./Component/ClassButton"
import ClassRoom from "./Component/ClassRoom"
import SubmitButton from './Component/SubmitButton'
import './App.css'

function App() {
  const[classArr,setNewArr]=useState(['1'])
  const[count,setNewCount]=useState(1)
  const[classData,setNewData]=useState([])

  // count variable used to keep a check on number of classes
  //class Arr for all the new classes being created
  //classdata to store overall data of all the classes

  const onClickClassButton=()=>{
      setNewCount(count+1)
        let arr=[...classArr,count+1]
        setNewArr(arr)
  }

  const onSubmitHandler=()=>{
    // class data is being stored in local storage 
    //not able to properly implement this part
    console.log(classData)
    localStorage.setItem('',JSON.stringify(classData)) 
    setNewData([])
  }

  const classDataHandler=(data)=>{
    let newdata=[...classData]
    newdata.push(data)
    setNewData(newdata)

  }
  return (
    <div className="main">
      <ClassButton click={onClickClassButton}/>
      {classArr.map((item,index)=><ClassRoom number={item} key={index} addclassData={classDataHandler}/>)}
      <SubmitButton click={onSubmitHandler}/>
    </div>
  )
}

export default App
