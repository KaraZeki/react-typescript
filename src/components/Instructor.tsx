import React from 'react'


type instructorProps={
    instructorNameLastName:{
        firstname:string,
        lastName:string
    }
}
export const Instructor = (props:instructorProps) => {
  return (
    <div>
        <p>{props.instructorNameLastName.firstname}</p>
        <p>{props.instructorNameLastName.lastName}</p>
    </div>
  )
}
