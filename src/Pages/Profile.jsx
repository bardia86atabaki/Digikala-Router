import React from 'react'

function Profile() {
  return (
    <div class="p-4">
    <div class="flex justify-between items-center">
        <div>
            <h2 class="text-xl font-semibold text-blue-800">بـردیا اتـابـکــی</h2>
            <p class="text-sm text-gray-500">۰۹۰۳۷۴۹۶۴۱۴</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 11V13H9V11H7V9H9V7H11V9H13V11H11Z" />
        </svg>
    </div>
    <div class="mt-4">
        <div class="text-gray-800">                 
            <span class="font-medium">کیف پول</span>
        </div>
        <div class="text-sm text-cyan-600">فعال‌سازی</div>
    </div>
    <div class="mt-2">
        <div class="text-gray-800">       
            <span class="font-medium">دیجی کلاب</span>
        </div>
        <div class="text-sm text-cyan-600">مشاهده‌ی ماموریت‌ها</div>
    </div>
</div>
  )
}

export default Profile