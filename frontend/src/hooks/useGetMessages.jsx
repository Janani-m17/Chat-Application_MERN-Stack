import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setMessages } from '../redux/messageSlice'

const useGetMessages = async () => {

    const {selectedUser} = useSelector(store=>store.user);
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchmessages = async () => {
        try{

            axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:8080/api/v1/message/${selectedUser?._id}`);
            console.log(res);
            dispatch(setMessages(res.data));
        } catch(error){
            console.log(error);
        }
    }
    fetchmessages();
  },[selectedUser?._id,setMessages,dispatch]);
}

export default useGetMessages