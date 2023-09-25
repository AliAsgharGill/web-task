import React from 'react'

const Input = ({ type, name, placeholder, id, classesNames, value, onClick }) => {
    return (
        <>
            <input type={type} name={name} id={id} value={value} className={classesNames} placeholder={placeholder} onClick={onClick}  />
        </>
    )
}

export default Input
