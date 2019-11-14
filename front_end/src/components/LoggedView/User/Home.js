import React from 'react'
import UserFile from './UserFile'

const Home = ()=>{

    return(
        <div className="content_bottom_body">
              <div className="content_bottom_notification smb">
                <h1 className="content_bottom_header">Notification</h1>
                
              </div>
              <div className="content_bottom_important smb">
                <h1 className="content_bottom_header">important stuff</h1>
              </div>
              <div className="content_bottom_files ">
                <h1 className="content_bottom_header">files</h1>
                <UserFile />
              </div>
            </div>
    )
}


export default Home