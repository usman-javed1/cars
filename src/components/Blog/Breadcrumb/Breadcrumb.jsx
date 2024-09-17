import React from 'react'

const Breadcrumb = () => {
  return (
    

<nav class="flex" aria-label="Breadcrumb">
  <ol class=" py-[60px] inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        Home
      </a>
    </li>
    {/* <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
      </div>
    </li> */}
    <li aria-current="page">
      <div class="flex items-center">
        <div className="px-[10px] pb-1">
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.78112 5.00047L0.481262 1.70062L1.42408 0.757812L5.66672 5.00047L1.42408 9.24306L0.481262 8.30027L3.78112 5.00047Z" fill="#0E0E0E"/>
</svg>
</div>

        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Blog</span>
      </div>
    </li>
  </ol>
</nav>

  )
}

export default Breadcrumb