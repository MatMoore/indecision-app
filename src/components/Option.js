import React from 'react'

const Option = (props) => (
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

export default Option;