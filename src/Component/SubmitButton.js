import React from 'react'

function SubmitButton(props) {
    return (
        <div className="submit-btn">
            <button onClick={props.click}>Submit</button>
        </div>
    )
}

export  default SubmitButton
