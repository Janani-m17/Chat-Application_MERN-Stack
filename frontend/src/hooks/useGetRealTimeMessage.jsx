import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMessages } from '../redux/messageSlice';
import useGetMessages from './useGetMessages';

const useGetRealTimeMessage = () => {
    
    const {socket} = useSelector(store=>store.socket);
    const {messages} = useSelector(store=>store.message)
    const dispatch = useDispatch();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
        dispatch(setMessages([...messages, newMessage]));
    });
  },[socket, setMessages, messages,dispatch]);
};

export default useGetRealTimeMessage;