import React from 'react'

const CheckedInput = ({ type, name, placeholder, id, classesNames, value }) => {
    return (
        <>
            <input type={type} name={name} id={id} value={value} className={classesNames} placeholder={placeholder} checked />
        </>
    )
}

export default CheckedInput
