import React from 'react'
import Patient from '../../../../images/patient1.jpeg'
import {NavLink} from 'react-router-dom'


const File = ()=>{

    return(
        <div className="content_bottom_body">
              <div className="content_bottom_important smb">
                <h1 className="content_bottom_header">Patient info</h1>
                <div>
                      <img src={Patient} className="profile" style={{float:"left", clear:"right"}} alt="patient Photo"/>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                         ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit
                          lum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          idatat non proident, sunt 
                      in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                  </div>
              </div>
              <div className="content_bottom_files ">
                <h1 className="content_bottom_header">Files History</h1>
                <table className="files_tables">
                  <tbody className="files_tbody">
                    <tr className="files_row">
                      <td className="files_name"><NavLink to='/content'>File 1 name</NavLink></td>
                      <td>Date</td>
                    </tr>
                    <tr className="files_row">
                      <td className="files_name"><NavLink to='/content'>File 1 name</NavLink></td>
                      <td>Date</td>
                    </tr>
                    <tr className="files_row">
                      <td className="files_name"><NavLink to='/content'>File 1 name</NavLink></td>
                      <td>Date</td>
                    </tr>
        
                  </tbody>
                </table>
              </div>
            </div>
    )
}


export default File