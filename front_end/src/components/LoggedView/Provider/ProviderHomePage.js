import React, {useState, useEffect} from 'react'
import UserHome from './Home'
import RightSidebare from './RightSidebare'
import profile from '../../../images/clair.png'
import MainMenu from './MainSideBare'
import axios from 'axios'



const UserHomePage = ()=>{
    const token = sessionStorage.getItem("tokenProvider");
    const [data, setData]= useState('');
    const [patientData, setPatientData] = useState('');
    const [inputUserToken, setInputUserToken] = useState('');
    const [blood, setBlood]= useState('');
    const [allergy, setAllergy]= useState('');
    const [medication, setMedication]= useState('');
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
   

    const sendQuery = ()=>{
      const sendData = async () => {
        setIsAuthenticating(true);
        setIsError(false);
        setIsAuthError(false)
        try{
          const endpoint = `http://localhost:5001/${token}/send_token`
          const data = {
            user_id : inputUserId,
            provider_id : inputProciderId
          }
          const res = await axios.post(endpoint, data)
          console.log(res.data)
          if(res.data){
              javascript:timeReload(5000)
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

    const fetchData = async ()=>{
        setIsLoading(true);
        try{
            const res = await axios(`http://localhost:5000/${token}/get_token`)
            setData(res.data.Patient_Token);
            console.log(data)
        }catch (error){
            console.log(error)
        }
        setIsLoading(false)
    };

    useEffect(()=>{
        
      fetchData();
    }, [])
    // const getToken = 


    const sendToken = ()=>{
      const sendData = async () => {
        setIsAuthenticating(true);
        setIsError(false);
        setIsAuthError(false)
        try{
          const endpoint = `http://localhost:5000/${token}/provider/user_files`
          const data = {
            temp_token : inputUserToken
          }
          const res = await axios.post(endpoint, data)
          setPatientData(res.data)
          console.log(res.data)
        }catch(error){
          console.log(error)
          setIsError(true)
        }
        setIsAuthenticating(false)
      }
      sendData();
    }
    
    console.log(patientData)

    let content = null
    if(show){
        content=(
            <form className="queryForm">
                <input type="text" placeholder="Patient Id" onChange={e=>setInputUserId(e.target.value)} className="queryForm_input"/>
                <input type="text" placeholder="Your Id" onChange={e=>setInputProviderId(e.target.value)} className="queryForm_input"/>
                <input type="button" value="Send Request" onClick={e=>{sendQuery(); e.preventDefault()}} className="queryForm_input"/>
                
            </form>
        )
    }

    let contents = null
    if(show){
        contents=(
            <form className="queryForm">
                <input type="text" placeholder="Patient Token" onChange={e=>setInputUserToken(e.target.value)} className="queryForm_input"/>
                <input type="button" value="Get Patient File" onClick={e=>{sendToken(); e.preventDefault()}} className="queryForm_input"/>
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
          chainToken = {data} blood={patientData.blood} name ={patientData.name} allergy={patientData.allergy} medication={patientData.medication}/>
          <RightSidebare
          onclick = {e=>showInput()}/>
          
          
      </div>
      {content}
      {contents}
    </div>
    </div>
    )
}

export default UserHomePage