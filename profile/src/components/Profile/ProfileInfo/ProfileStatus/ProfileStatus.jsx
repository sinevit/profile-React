// import classes from './ProfileInfo.module.css'

import React, { useState } from "react"

export const ProfileStatus = (props) => {

  const [status, setStatus] = useState(false)
  const [statusValue, setStatusValue] = useState(props.status)

  const changeStatus = (e) => {
    setStatusValue(e.currentTarget.value)

  }
  const deactivate = () =>{
    setStatus(false); 
    props.updateStatus(statusValue)
  }


    return(
      <div>
        {!status && <div>
            <span onDoubleClick={()=> setStatus(true)}>{props.status}</span>
        </div>}
        {status && <div>
            <input onChange={changeStatus} autoFocus={true} onBlur={deactivate} value={statusValue}/>
        </div>}
      </div>
    )
}