import React from 'react';

function Plus() {
  return (
    <div className=" flex flex-col items-center justify-center w-full bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        <h2 className="text-right text-2xl font-bold mb-4">پلاس</h2>
        <div className="flex justify-center items-center bg-gray-100 p-6 rounded-lg">
          <div className="text-center">
            <p className="text-gray-700 mb-4 text-lg">اشتراک فعال ندارید</p>
            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg text-lg">خرید اشتراک</button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-5xl">
        <h3 className="text-right text-xl font-bold mb-4">خلاصه فعالیت شما در پلاس تا به امروز</h3>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-lg">
            <span className="text-gray-700 ml-2">عدد</span>
            <span className="text-gray-700">ارسال رایگان استفاده شده</span>
          </div>
          <a href="#" className="text-purple-600 text-lg">جزئیات</a>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-lg">
            <span className="text-gray-700 ml-2">هدیه نقدی دریافت شده</span>
          </div>
          <a href="#" className="text-purple-600 text-lg">جزئیات</a>
        </div>
      </div>
      <div className="text-right mt-4  max-w-5xl">
        <a href="#" className="text-purple-600 text-lg">تاریخچه اشتراک‌های شما</a>
      </div>
    </div>
  );
}

export default Plus;
