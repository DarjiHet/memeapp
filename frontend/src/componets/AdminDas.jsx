import React,{ useEffect } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

const AdminDas = () => {

    const user = useSelector((store) => store.user)
    const navigate = useNavigate();
    console.log(user)
    useEffect(() => {
    if (!user || user?.role !== 'admin') {
      navigate('/images');
    }
  }, [user, navigate]); // ✅ dependencies

  return (
    <div>AdminDas</div>
  )
}

export default AdminDas