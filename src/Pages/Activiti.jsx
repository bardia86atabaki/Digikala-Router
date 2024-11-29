import React from 'react';

function Activiti() {
  return (
    <div className=" flex flex-col items-center w-[900px]">
      <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded-lg">
        By verifying your identity, you can increase the security of
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow-md w-[900px] h-96 mx-auto">
        <div className="flex justify-center items-end gap-8 h-full">
          <div className="flex items-center p-6 bg-gray-100 rounded-lg w-80 h-24 justify-center">
            <span className="flex-shrink-0 w-6 h-6 mr-2 bg-gray-300 rounded-full"></span>
            سفارش جاری
          </div>
          <div className="flex items-center p-6 bg-green-100 rounded-lg w-80 h-24 justify-center">
            <span className="flex-shrink-0 w-6 h-6 mr-2 bg-green-300 rounded-full"></span>
            سفارش تحویل شده
          </div>
          <div className="flex items-center p-6 bg-yellow-100 rounded-lg w-80 h-24 justify-center">
            <span className="flex-shrink-0 w-6 h-6 mr-2 bg-yellow-300 rounded-full"></span>
            سفارش مرجوع شده
          </div>
        </div>
     
      </div>
    </div>
  );
}

export default Activiti;
