import React from 'react'

const FileRightSidebar = ()=>{
    return(
        <div className="content_bottom_sidebare">
              <button className="btn btn_main btn_black">Create new File</button>
              <button className="btn btn_main btn_white">Upload file</button>
              <button className="btn btn_main btn_white">Upload directory</button>
              <button className="btn btn_main btn_white">Request file</button>
              <div className="info_file">
                  <h4>File Information</h4>
              </div>
            </div>
    )
}

export default FileRightSidebar