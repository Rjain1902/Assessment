import React, { useState,useRef, useEffect } from 'react'
import Student from './Student'
import AddStudent from './AddStudent'
function ClassRoom(props) {
    
    const[Arr,setNewArr]=useState(['1'])
    const[count,setNewCount]=useState(1)
    const[dataArr,setNewData]=useState([])
    let flag=useRef()

    // use ref is used to prevent infinte loop of use effect
    // count is used to count number of student
    //Arr is used to maintain array for new student being added
    // dataArr is used as it is array which hold data of all the student in that particular class

    const onAddStudentHandler=()=>{
        setNewCount(count+1)
        let arr=[...Arr,count+1]
        setNewArr(arr)
    }

    const addDataHandler=(data)=>{
        let arr=[...dataArr,{data}]
        setNewData(arr)
        flag.current=1
    }

    useEffect(()=>{
        if(flag.current===1){
            props.addclassData(dataArr)
            flag.current=0
        }
    },[dataArr])

    return (
        <div>
            <div className="main-class-box">
                <h2>Class - {props.number}</h2>
                <div className="class-box">
                    {Arr.map((item,index)=> <Student key={index} number={item} addData={addDataHandler}/>)}
                    <AddStudent click={onAddStudentHandler}/>
                </div>
            </div>
        </div>
        
    )
}

export  default ClassRoom
