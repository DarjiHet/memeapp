import React,{ useEffect } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import ImageSearch from './ImageSearch';
import ImageCard from './ImageCard';

const AdminDas = () => {

    const user = useSelector((store) => store.user)
    const images = useSelector((store) => store.image)
    const navigate = useNavigate();
    console.log(user)
    
    
    useEffect(() => {
    if (user === null) return; 
    if (!user || user?.role !== 'admin') {
      navigate('/images');
    }
  }, [user, navigate]); // ✅ dependencies

  return (
    <>
      hello
    </>
  )
}

export default AdminDas