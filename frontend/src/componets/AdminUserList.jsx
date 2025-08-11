import { FaTrash } from 'react-icons/fa'; // install react-icons if not already
import React from 'react';

const AdminUserList = ({ users, handleDelete }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-4">
        <h2 className='text-center text-2xl'>Total Users: {users?.length ?? 0}</h2>
      {users.map((user) => (
        <div
          key={user._id}
          className="flex justify-between items-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <button
            onClick={() => handleDelete(user._id)}
            title="Delete User"
            className="text-red-600 hover:text-red-800 transition"
          >
            <FaTrash className="text-xl" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminUserList;
