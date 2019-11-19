import React, {useEffect, useState} from 'react'
import UserHome from './Home'
import RightSidebare from './RightSidebare'
import profile from '../../../images/Round-Profile-Pic.png'
import MainMenu from './MainSideBare'
import axios from 'axios'


const UserHomePage = ()=>{
    const token = sessionStorage.getItem('tokenUser')
    const [inputBlood, setInputBlood] = useState('')
    const [inputAllergy, setInputAllergy] = useState('')
    const [inputMedication, setInputMedication] = useState('')
    const [show, setShow] = useState(false)
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthError, setIsAuthError] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const showInput = ()=>{
        const toggle = show
        setShow(!show)
        
        
    }

    let timeReload = timeT0=>{
        setTimeout(()=>{window.location="http://localhost:3000/"}, timeT0)
      }
     
  
      const sendQuery = ()=>{
        const sendData = async () => {
          setIsAuthenticating(true);
          setIsError(false);
          setIsAuthError(false)
          try{
            const endpoint = `http://localhost:5000/${token}/add_file`
            const data = {
              blood_type : inputBlood,
              allergies : inputAllergy,
              medications : inputMedication
            }
            const res = await axios.post(endpoint, data)
            console.log(res.data)
            
          }catch(error){
            console.log(error)
            setIsError(true)
          }
          setIsAuthenticating(false)
        }
        sendData()
      }
    let content = null
    if(show){
        content=(
            <form className="queryForm">
                <input type="text" placeholder="Blood Type"  className="queryForm_input"/>
                <input type="text" placeholder="Allergy"  className="queryForm_input"/>
                <input type="text" placeholder="Medication"  className="queryForm_input"/>
                <input type="button" value="Create"  className="queryForm_input"/>
                
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
          <img src={profile} alt="profile" className="profile"/>
          
        </div>
      <div className="content_bottom">
          <UserHome/>
          
          <RightSidebare
          create={e=>{showInput()}}/>
          
      </div>
      {content}
    </div>
    </div>
    )
}

export default UserHomePage