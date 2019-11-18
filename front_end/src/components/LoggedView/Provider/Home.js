import React from 'react'
import {NavLink} from 'react-router-dom'


const Home = (props)=>{

    return(
        <div className="content_bottom_body">
              <div className="content_bottom_notification smb">
                <h1 className="content_bottom_header">Notification</h1>
                
              </div>
              <div className="content_bottom_important smb">
                <h1 className="content_bottom_header">important stuff</h1>
              </div>
              <div className="content_bottom_files ">
                <h1 className="content_bottom_header">Patients</h1>
                <table className="files_tables">
                  <tbody className="files_tbody">
                    <tr className="files_row">
                      <td className="files_name">{props.name}</td>
                      <td><a href="#" className="btn_file">Share</a></td>
                      <td><NavLink className="btn_file" to='/userfile'>Open</NavLink></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    )
}


export default Home