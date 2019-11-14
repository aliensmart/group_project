import React from 'react'

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
                <table className="files_tables">
                  <tbody className="files_tbody">
                    <tr className="files_row">
                      <td className="files_name">file name</td>
                      <td><a href="#" className="btn_file">Share</a></td>
                      <td><a href="#" className="btn_file">Open</a></td>
                    </tr>
                    <tr className="files_row">
                      <td className="files_name">file name</td>
                      <td><a href="#" className="btn_file">Share</a></td>
                      <td><a href="#" className="btn_file">Open</a></td>
                    </tr>
                    <tr className="files_row">
                      <td className="files_name">file name</td>
                      <td><a href="#" className="btn_file">Share</a></td>
                      <td><a href="#" className="btn_file">Open</a></td>
                    </tr>
        
                  </tbody>
                </table>
              </div>
            </div>
    )
}


export default Home