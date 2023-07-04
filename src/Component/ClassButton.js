import React from 'react'

function ClassButton(props) {
    return (
        <div className="add-class-button">
            <button type="button" onClick={()=>props.click()}>+ Add Class</button>
        </div>
    )
}

export  default ClassButton
