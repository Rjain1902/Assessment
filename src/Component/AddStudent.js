import React from 'react'

function AddStudent(props) {
    return (
        <div className="add-student-button">
            <button type="button" onClick={()=>props.click()}>+ Add Student</button>
        </div>
    )
}

export  default AddStudent
