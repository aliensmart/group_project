import React, {useState, useEffect} from 'react'
import logo from '../../../images/logo.png';
import axios from 'axios'

const MainMenu = ()=>{

  const token = sessionStorage.getItem("tokenProvider")
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchData = async ()=>{
    setIsLoading(true)
    try{
      const res = await axios(`http://localhost:5000/${token}/provider/id`)
      console.log(res.data.user_id)
      setData(res.data.user_id)
    }catch(error){
        console.log(error)
    }
  }


  useEffect(()=>{
    fetchData()
  },[])

  let timeReload = (timeTo)=>{
    // 
    setTimeout((function(){window.location="http://localhost:3001/"}),timeTo)}
    return(
        <div className="sideBar">
        <div>
          <img src={logo} alt="LOGO" className="logo"/>
          <p>
            Your id is: {data}
          </p>
        </div>
        
          <ul className="nav">
            <li className="nav_item">
              <a href="#" className="nav_item_content" >Link1</a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_item_content" >Link2</a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_item_content" >Link3</a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_item_content" >Link4</a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_item_content"  onClick={e=>{sessionStorage.setItem("tokenUser", ''); javascript:timeReload(500); sessionStorage.setItem("tokenProvider", '') }}>Lougout</a>
            </li>
          </ul>
      </div>
    )
}

export default MainMenu