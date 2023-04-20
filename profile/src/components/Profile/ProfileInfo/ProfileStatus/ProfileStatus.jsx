// import classes from './ProfileInfo.module.css'

import React, { useState } from "react"
import { useEffect } from "react"

export const ProfileStatus = (props) => {

  const [status, setStatus] = useState(false)
  const [statusValue, setStatusValue] = useState(props.status)

  useEffect( () => {
    setStatusValue(props.status)
  },[props.status])

  const changeStatus = (e) => {
    setStatusValue(e.currentTarget.value)
  }

  const deactivate = () =>{
    setStatus(false); 
    props.updateStatus(statusValue)
  }

  const activate = () =>{
    setStatus(true); 
  }


    return(
      <div>
        {!status && <div>
          <b>Status</b>: <span onDoubleClick={activate}>{props.status}</span>
        </div>}
        {status && <div>
            <input onChange={changeStatus} autoFocus={true} onBlur={deactivate} value={statusValue}/>
        </div>}
      </div>
    )
}