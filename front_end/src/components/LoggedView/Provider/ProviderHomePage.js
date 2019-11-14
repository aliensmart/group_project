import React, {useState} from 'react'
import UserHome from './Home'
import RightSidebare from './RightSidebare'
import profile from '../../../images/clair.png'
import MainMenu from './MainSideBare'



const UserHomePage = ()=>{
    const [show, setShow] = useState(false)

    const showInput = ()=>{
        const toggle = show
        setShow(!show)
        console.log("clicked")
        
    }

    let content = null
    if(show){
        content=(
            <form>
                <input type="text" placeholder="Patient username"/>
                <input type="text" placeholder="Your username"/>
                <input type="button" value="Send Request"/>
                
            </form>
        )
    }

    
    return(
        <div className="main">
            <MainMenu/>
        <div className="content">
            <div className="content_top">
          <div className="search">
              <input type="text" placeholder="search" className="searchInput"/>
              <i className="fas fa-search"></i>
          </div>
          <img src={profile} alt="profile" className="profile_provider"/>
          
        </div>
      <div className="content_bottom">
            
          <UserHome/>
          <RightSidebare
          onclick = {e=>showInput()}/>
          
          
      </div>
      {content}
    </div>
    </div>
    )
}

export default UserHomePage