import React, {  useEffect, useState,useRef } from 'react'

function Student(props) {
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[gender,setGender]=useState('')
    const data={
        firstName,
        lastName,
        gender
    }
    let flag=useRef()
   

    const onRadioChangeHandler=(e)=>{
        if(firstName!=='' && lastName!==''){
            setGender(e.target.value)
            flag.current=1
        }
    }
    
    useEffect(()=>{
        if(flag.current===1){
            props.addData(data)
            flag.current=0
            
        }
    },[data])
   
  
    return (
        <div className="student-box">
              <h3>Student - {props.number}</h3>
              <div className="class-box-content">

                <div className="form-input">
                  <label htmlFor="">First Name</label>
                  <input 
                    type="text" 
                    placeholder="First Name " 
                    value={firstName} 
                    onChange={(e)=>setFirstName(e.target.value)}
                  />
                  <small>Required *</small>
                </div>

                <div className="form-input">
                  <label htmlFor="">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Last Name " 
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                  />
                  <small>Required *</small>
                </div>

                <div className="form-input ">
                  <label htmlFor="">Gender</label>
                    <div className="radio-input">
                        <div className="form-input-radio">
                        <input type="radio" value='Male' checked={gender==='Male'} onChange={onRadioChangeHandler}/>
                        <label htmlFor="">Male</label>
                        </div>
  
                        <div className="form-input-radio">
                        <input type="radio" value='Female' checked={gender==='Female'} onChange={onRadioChangeHandler} />
                        <label htmlFor="">Female</label>
                        </div>

                        <div className="form-input-radio">
                        <input type="radio"  value='Other' checked={gender==='Other'} onChange={onRadioChangeHandler}/>
                        <label htmlFor="">Other</label>
                        </div>
                    </div>
                    <small>Required *</small>
                    
                </div>
              </div>
            </div>
    )
}

export  default Student
