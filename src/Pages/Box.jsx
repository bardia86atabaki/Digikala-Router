import React from 'react';

function Box() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-300 p-6">
      <div className="flex items-center justify-between p-4 mb-4 bg-gray-100 rounded-lg">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Purchase Points</h3>
          <p className="text-sm text-gray-600">Track your purchases and enjoy rewards</p>
        </div>
        <button className="bg-blue-500 text-white py-1 px-3 rounded-md">Activate</button>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800">Review Orders</h3>
          <p className="text-sm text-gray-600">View and manage your orders</p>
          <a href="#" className="text-blue-500 hover:underline">Go to Orders</a>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800">Wishlist</h3>
          <p className="text-sm text-gray-600">Save items for later</p>
          <a href="#" className="text-blue-500 hover:underline">View Wishlist</a>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800">Profile Settings</h3>
          <p className="text-sm text-gray-600">Manage your account information</p>
          <a href="#" className="text-blue-500 hover:underline">Edit Profile</a>
        </div>
      </div>
    </div>
  );
}

export default Box;
