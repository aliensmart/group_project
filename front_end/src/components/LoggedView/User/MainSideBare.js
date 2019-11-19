import React from 'react'
import logo from '../../../images/logo.png';

const MainMenu = ()=>{

  let timeReload = (timeTo)=>{
    // 
    setTimeout((function(){window.location="http://localhost:3000/"}),timeTo)}
    return(
        <div className="sideBar">
        <div>
          <img src={logo} alt="LOGO" className="logo"/>
        </div>
        
          <ul className="nav">
            <li className="nav_item">
              <a href="#" className="nav_item_content"  onClick={e=>{sessionStorage.setItem("tokenUser", ''); javascript:timeReload(500); sessionStorage.setItem("tokenProvider", '') }}>Lougout</a>
            </li>
          </ul>
      </div>
    )
}

export default MainMenu