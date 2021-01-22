import React from 'react'

const Option = (props) => {
    return (
        <p>
            {props.optionText}
            <button
                onClick={
                    () => {
                        props.handleDeleteOption(props.optionText)
                    }
                }
            >Remove</button>
        </p>
        
    )
}

export default Option;