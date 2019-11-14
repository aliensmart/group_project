import React from 'react'

const RightSidebar = (props)=>{
    return(
        <div className="content_bottom_sidebare">
              <button onClick={props.onclick} className="btn btn_main btn_white">Request file</button>
            </div>
    )
}

export default RightSidebar