import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

function Bloga() {
  return (
    <div>
      <div className="flex justify-start">
        <div className="w-[300px] bg-white rounded-xl mt-5 shadow-md overflow-hidden border border-gray-300">
          <Profile />
          <div className="border-t border-gray-300">
          <Link to="/Activiti">
              <div className="flex items-center justify-between p-4 text-gray-700 hover:bg-gray-100 cursor-pointer">
                <div className="flex">
                  <img
                    src="src/assets/Basic_Elements_(120).jpg"
                    className="w-5 flex"
                    alt=""
                  />
                  <span>خلاصه فعالیت ها</span>
                </div>
              </div>
            </Link>
            <Link to="/plus">
              <div className="flex items-center justify-between p-4 text-gray-700 hover:bg-gray-100 cursor-pointer">
                <div className="flex">
                  <img
                    src="src/assets/Basic_Elements_(120).jpg"
                    className="w-5 flex"
                    alt=""
                  />
                  <span>پلاس</span>
                </div>
              </div>
            </Link>
            <Link to="/orders">
              <div className="flex items-center justify-between p-4 text-gray-700 hover:bg-gray-100 cursor-pointer">
                <div className="flex">
                  <img
                    src="src/assets/basket-01_generated.jpg"
                    className="w-5 flex"
                    alt=""
                  />
                  <span>سفارش‌ها</span>
                </div>
              </div>
            </Link>
         
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bloga;
