import React from 'react'

const RightSidebar = (props)=>{
    return(
        <div className="content_bottom_sidebare">
              <button onClick={props.create} className="btn btn_main btn_black">Create new File</button>
              <button className="btn btn_main btn_white">Upload file</button>
              <button className="btn btn_main btn_white">Upload directory</button>
            </div>
    )
}

export default RightSidebar