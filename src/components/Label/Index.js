import React from 'react'

const Label = ({labelFor,title, className, onClick}) => {
  return (
    <>
     <label for={labelFor} className={`font-bold ${className}`} onClick={onClick} >{title}</label>      
     
    </>
  )
}

export default Label
