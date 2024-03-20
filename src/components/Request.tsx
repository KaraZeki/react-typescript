import React from 'react'


type statusType={
    status:string|number
}
export const Request = (props:statusType) => {
  return (
    <div>{props.status}</div>
  )
}
