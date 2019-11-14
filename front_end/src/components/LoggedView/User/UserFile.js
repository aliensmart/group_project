import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import ViewUserFile from './ViewUserFile';


const UserFile = () => {

    const token = sessionStorage.getItem('tokenUser');
    const [fileData, setFileData] = useState([{bloodtype: "none", allergies: "none", medications: "none"}])
    const [url, setUrl] = useState(`http://localhost:5000/${token}/userfiles`)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [nothing, setNothing] = useState(' ')

    useEffect( () => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
            const result = await axios(url);
            setFileData(result.data);
            console.log(result.data)
            } catch (error) {
            setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
        }, [nothing]);
      
    return (
        <div>
             <p> Blood type: {fileData[0].Blood}</p> 
             <p> Allergies: {fileData[0].Allergies}</p> 
             <p> Medications: {fileData[0].Medications}</p> 
        </div>
    )



}

export default UserFile