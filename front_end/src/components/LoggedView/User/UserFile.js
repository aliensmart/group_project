import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import ViewUserFile from './ViewUserFile';


const UserFile = () => {

    const token = sessionStorage.getItem('tokenUser');
    const [fileData, setFileData] = useState([])
    const [url, setUrl] = useState(`http://localhost:5000/${token}/userfiles`)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [nothing, setNothing] = useState('od ')

    useEffect( () => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
            const result = await axios(url);
            console.log(result)
            if(result.data.length !==0){
                    setFileData(result.data);
            }
            
            
            } catch (error) {
            setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
        }, [nothing]);
        console.log(fileData.length)
        let content = null
        if(fileData.length===0){
            content = (
                <div>
                <p> Blood type: </p> 
                <p> Allergies: </p> 
                <p> Medications: </p> 
                </div>
            )
            

        }else{
            content = (
            <div>
            <p> Blood type: {fileData[0].Blood}</p> 
            <p> Allergies: {fileData[0].Allergies}</p> 
            <p> Medications: {fileData[0].Medications}</p> 
            </div>
            )
            
        }
        console.log(fileData)
      
    return (
        <div>
             {content}
        </div>
    )



}

export default UserFile