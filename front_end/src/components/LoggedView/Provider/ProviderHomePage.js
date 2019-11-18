import React, {useState} from 'react'
import UserHome from './Home'
import RightSidebare from './RightSidebare'
import profile from '../../../images/clair.png'
import MainMenu from './MainSideBare'
import axios from 'axios'



const UserHomePage = ()=>{
    const token = sessionStorage.getItem("tokenProvider")
    const [name, setName]= useState('')
    const [blood, setBlood]= useState('')
    const [allergy, setAllergy]= useState('')
    const [medication, setMedication]= useState('')
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthError, setIsAuthError] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [inputUserId, setInputUserId] = useState('');
    const [inputProciderId, setInputProviderId] = useState('');
    const [theError, setTheError] = useState('')

    let timeReload = timeT0=>{
      setTimeout(()=>{window.location="http://localhost:3000/"}, timeT0)
    }

    const getName = ()=>{
      const sendData = async () => {
        setIsAuthenticating(true);
        setIsError(false);
        setIsAuthError(false)
        try{
          const endpoint = `http://localhost:5000/${token}/provider/user_files`
          const data = {
            user_id : inputUserId,
            provider_id : inputProciderId
          }
          const res = await axios.post(endpoint, data)
          console.log(res.data)
          if(res.data.info){
            setName(res.data.info.name)
            setBlood(res.data.info.blood)
            setMedication(res.data.info.medication)
            setAllergy(res.data.info.allergy)

            // javascript:timeReload(500)
          }else{
            setIsAuthError(true)
          }
        }catch(error){
          console.log(error)
          setIsError(true)
        }
        setIsAuthenticating(false)
      }
      sendData()
    }
    const [show, setShow] = useState(false)

    const showInput = ()=>{
        const toggle = show
        setShow(!show)
        console.log("clicked")
        
    }

    let content = null
    if(show){
        content=(
            <form className="queryForm">
                <input type="text" placeholder="Patient Id" onChange={e=>setInputUserId(e.target.value)} className="queryForm_input"/>
                <input type="text" placeholder="Your Id" onChange={e=>setInputProviderId(e.target.value)} className="queryForm_input"/>
                <input type="button" value="Send Request" onClick={e=>{getName(); e.preventDefault()}} className="queryForm_input"/>
                
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
            
          <UserHome
          name = {name}
          blood = {blood}
          medication={medication}
          allergy = {allergy}/>
          <RightSidebare
          onclick = {e=>showInput()}/>
          
          
      </div>
      {content}
    </div>
    </div>
    )
}

export default UserHomePage