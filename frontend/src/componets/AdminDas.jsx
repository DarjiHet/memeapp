import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loadAdminUsers } from "../Action/adminAction";
import AdminUserList from "./AdminUserList";
import { deleteUser } from "../Action/adminAction";
import { toast } from 'react-hot-toast';

const AdminDas = () => {
  const user = useSelector((store) => store.user);
  const users = useSelector((store) => store.admin); // now array not null
  const images = useSelector((store) => store.image);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(images);
  useEffect(() => {
    if (user === null) return;
    if (!user || user?.role !== "admin") {
      navigate("/images");
    }
  }, [user, navigate]);

  useEffect(() => {
    dispatch(loadAdminUsers());
  }, [dispatch]);

  const handleUserDelete = (userId) => {
  try {
   if (window.confirm("Are you sure you want to delete this user?")) {
    dispatch(deleteUser(userId));
    toast.success('User deleted')
  } 
  } catch (error) {
    toast.error('Something went wrong')
  }
};

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Admin Dashboard</h1>
      <div className="flex gap-4 justify-center items-center">
        <Link to="/admin/images" className="p-4 bg-[#a2d2ff] rounded-full">
          Images ({images?.length ?? 0})
        </Link>
      </div>

      <div className="p-6 bg-gray-50 min-h-screen mt-5">
        {users.length > 0 ? (
          <AdminUserList users={users} handleDelete={handleUserDelete} />
        ) : (
          <p className="text-gray-600">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDas;
