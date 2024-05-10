export const Dropdown = [
    {
        id:1,
        title:'Default',
        htmlcode: `<div class="as-dropdown relative inline-flex">
        <button id="as-dropdown-default" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          Actions
          <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        
        <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="as-dropdown-default">
          <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Newsletter</a>
          <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Purchases</a>
          <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Downloads</a>
          <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Team Account</a>
        </div>
      </div>
      `
    },
    // {
    //     id:2,
    //     title:'Hover event',
    //     htmlcode: `<div class="m-1 as-dropdown [--trigger:hover] relative inline-flex">
    //     <button id="as-dropdown-hover-event" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Actions
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    //     </button>
      
    //     <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="as-dropdown-hover-event">
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Newsletter
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Purchases
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Downloads
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Team Account
    //       </a>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:3,
    //     title:'Dividers',
    //     htmlcode: `<div class="as-dropdown relative inline-flex">
    //     <button id="as-dropdown-with-dividers" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Actions
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    //     </button>
      
    //     <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200" aria-labelledby="as-dropdown-with-dividers">
    //       <div class="py-2 first:pt-0 last:pb-0">
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Newsletter
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Purchases
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Downloads
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Team Account
    //         </a>
    //       </div>
    //       <div class="py-2 first:pt-0 last:pb-0">
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Upgrade License
    //         </a>
    //       </div>
    //       <div class="py-2 first:pt-0 last:pb-0">
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Account Settings
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Sign out
    //         </a>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:4,
    //     title:'Icons',
    //     htmlcode: `<div class="as-dropdown relative inline-flex">
    //     <button id="as-dropdown-with-icons" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Actions
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    //     </button>
      
    //     <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200" aria-labelledby="as-dropdown-with-icons">
    //       <div class="py-2 first:pt-0 last:pb-0">
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
    //           Newsletter
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
    //           Purchases
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
    //           Downloads
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    //           Team Account
    //         </a>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:5,
    //     title:'Title',
    //     htmlcode: `<div class="as-dropdown relative inline-flex">
    //     <button id="as-dropdown-with-title" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Actions
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    //     </button>
      
    //     <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200" aria-labelledby="as-dropdown-with-title">
    //       <div class="py-2 first:pt-0 last:pb-0">
    //         <span class="block py-2 px-3 text-xs font-medium uppercase text-gray-400">
    //           Settings
    //         </span>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
    //           Newsletter
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
    //           Purchases
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
    //           Downloads
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    //           Team Account
    //         </a>
    //       </div>
    //       <div class="py-2 first:pt-0 last:pb-0">
    //         <span class="block py-2 px-3 text-xs font-medium uppercase text-gray-400">
    //           Contacts
    //         </span>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" x2="15" y1="10" y2="10"/><line x1="12" x2="12" y1="7" y2="13"/></svg>
    //           Contact support
    //         </a>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:6,
    //     title:'With header',
    //     htmlcode: `<div class="as-dropdown relative inline-flex">
    //     <button id="as-dropdown-with-header" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Actions
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    //     </button>
      
    //     <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-dropdown-with-header">
    //       <div class="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg">
    //         <p class="text-sm text-gray-500">Signed in as</p>
    //         <p class="text-sm font-medium text-gray-800">james@site.com</p>
    //       </div>
    //       <div class="mt-2 py-2 first:pt-0 last:pb-0">
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
    //           Newsletter
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
    //           Purchases
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
    //           Downloads
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    //           Team Account
    //         </a>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:7,
    //     title:'Custom trigger',
    //     htmlcode: `<div class="as-dropdown relative inline-flex">
    //     <button id="as-dropdown-custom-trigger" type="button" class="as-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       <img class="w-8 h-auto rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Maria">
    //       <span class="text-gray-600 font-medium truncate max-w-[7.5rem]">Maria</span>
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    //     </button>
      
    //     <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-dropdown-custom-trigger">
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Newsletter
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Purchases
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Downloads
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Team Account
    //       </a>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:8,
    //     title:'Custom icon trigger',
    //     htmlcode: `<div class="as-dropdown relative inline-flex">
    //     <button id="as-dropdown-custom-icon-trigger" type="button" class="as-dropdown-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       <svg class="flex-none size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
    //     </button>
      
    //     <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-dropdown-custom-icon-trigger">
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Newsletter
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Purchases
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Downloads
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Team Account
    //       </a>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:9,
    //     title:'Slide up animation',
    //     htmlcode: `<div class="as-dropdown relative inline-flex">
    //     <button id="as-dropdown-slideup-animation" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Actions
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    //     </button>
      
    //     <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10 duration-300 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2" aria-labelledby="as-dropdown-slideup-animation">
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Newsletter
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Purchases
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Downloads
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Team Account
    //       </a>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:10,
    //     title:'Transform style animation',
    //     htmlcode: `<div class="as-dropdown relative inline-flex">
    //     <button id="as-dropdown-transform-style" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Actions
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    //     </button>
      
    //     <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10">
    //       <div class="as-dropdown-open:ease-in as-dropdown-open:opacity-100 as-dropdown-open:scale-100 transition ease-out opacity-0 scale-95 duration-200 mt-2 origin-top-left min-w-60 bg-white shadow-md rounded-lg p-2" aria-labelledby="as-dropdown-transform-style" data-as-transition>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Newsletter
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Purchases
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Downloads
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Team Account
    //         </a>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:11,
    //     title:'Auto close behavior',
    //     htmlcode: `<div class="sm:inline-flex gap-x-3">
    //     <div class="mt-1 mx-1 sm:mt-1 as-dropdown [--auto-close:inside] relative sm:inline-flex z-20">
    //       <button id="as-dropdown-auto-close-inside" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //         Clickable inside
    //         <svg class="as-dropdown-open:rotate-180 size-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    //         </svg>
    //       </button>
      
    //       <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-dropdown-auto-close-inside">
    //         <div class="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100">
    //           <div class="flex items-center h-5 mt-1">
    //             <input id="as-dropdown-item-checkbox-delete" name="as-dropdown-item-checkbox-delete" type="checkbox" class="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" checked>
    //           </div>
    //           <label for="as-dropdown-item-checkbox-delete" class="ms-3.5">
    //             <span class="mt-1 block text-sm font-semibold text-gray-800">Delete</span>
    //           </label>
    //         </div>
    //         <div class="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100">
    //           <div class="flex items-center h-5 mt-1">
    //             <input id="as-dropdown-item-checkbox-archive" name="as-dropdown-item-checkbox-archive" type="checkbox" class="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
    //           </div>
    //           <label for="as-dropdown-item-checkbox-archive" class="ms-3.5">
    //             <span class="mt-1 block text-sm font-semibold text-gray-800">Archive</span>
    //           </label>
    //         </div>
    //       </div>
    //     </div>
      
    //     <div class="mt-40 mx-1 sm:mt-1 as-dropdown [--auto-close:outside] relative sm:inline-flex z-10">
    //       <button id="as-dropdown-auto-close-outside" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //         Clickable outside
    //         <svg class="as-dropdown-open:rotate-180 size-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    //         </svg>
    //       </button>
      
    //       <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-dropdown-auto-close-outside">
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Newsletter
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Purchases
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Downloads
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Team Account
    //         </a>
    //       </div>
    //     </div>
      
    //     <div class="mt-60 mx-1 sm:mt-1 as-dropdown [--auto-close:false] relative sm:inline-flex">
    //       <button id="as-dropdown-auto-close-false" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //         False
    //         <svg class="as-dropdown-open:rotate-180 size-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    //         </svg>
    //       </button>
      
    //       <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-dropdown-auto-close-false">
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Newsletter
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Purchases
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Downloads
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Team Account
    //         </a>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:12,
    //     title:'Dropdown item checkbox',
    //     htmlcode: `<div class="m-1 as-dropdown relative inline-flex" data-as-dropdown-auto-close="inside">
    //     <button id="as-dropdown-item-checkbox" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Actions
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    //     </button>
      
    //     <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-dropdown-item-checkbox">
    //       <div class="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100">
    //         <div class="flex items-center h-5 mt-1">
    //           <input id="as-dropdown-item-checkbox-delete" name="as-dropdown-item-checkbox-delete" type="checkbox" class="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" aria-describedby="as-dropdown-item-checkbox-delete-description" checked>
    //         </div>
    //         <label for="as-dropdown-item-checkbox-delete" class="ms-3.5">
    //           <span class="block text-sm font-semibold text-gray-800">Delete</span>
    //           <span id="as-dropdown-item-checkbox-delete-description" class="block text-sm text-gray-600">Notify me when this action happens.</span>
    //         </label>
    //       </div>
    //       <div class="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100">
    //         <div class="flex items-center h-5 mt-1">
    //           <input id="as-dropdown-item-checkbox-archive" name="as-dropdown-item-checkbox-archive" type="checkbox" class="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" aria-describedby="as-dropdown-item-checkbox-archive-description">
    //         </div>
    //         <label for="as-dropdown-item-checkbox-archive" class="ms-3.5">
    //           <span class="block text-sm font-semibold text-gray-800">Archive</span>
    //           <span id="as-dropdown-item-checkbox-archive-description" class="block text-sm text-gray-600">Notify me when this action happens.</span>
    //         </label>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:13,
    //     title:'Dropdown item radio',
    //     htmlcode: `<div class="m-1 as-dropdown relative inline-flex" data-as-dropdown-auto-close="inside">
    //     <button id="as-dropdown-item-checkbox" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Actions
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    //     </button>
      
    //     <div class="as-dropdown-menu transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-dropdown-item-checkbox">
    //       <div class="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100">
    //         <div class="flex items-center h-5 mt-1">
    //           <input id="as-dropdown-item-radio-delete" name="as-dropdown-item-radio" type="radio" class="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" aria-describedby="as-dropdown-item-radio-delete-description" checked>
    //         </div>
    //         <label for="as-dropdown-item-radio-delete" class="ms-3.5">
    //           <span class="block text-sm font-semibold text-gray-800">Delete</span>
    //           <span id="as-dropdown-item-radio-delete-description" class="block text-sm text-gray-600">Notify me when this action happens.</span>
    //         </label>
    //       </div>
    //       <div class="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100">
    //         <div class="flex items-center h-5 mt-1">
    //           <input id="as-dropdown-item-radio-archive" name="as-dropdown-item-radio" type="radio" class="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" aria-describedby="as-dropdown-item-radio-archive-description">
    //         </div>
    //         <label for="as-dropdown-item-radio-archive" class="ms-3.5">
    //           <span class="block text-sm font-semibold text-gray-800">Archive</span>
    //           <span id="as-dropdown-item-radio-archive-description" class="block text-sm text-gray-600">Notify me when this action happens.</span>
    //         </label>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:14,
    //     title:'Dropdown',
    //     htmlcode: `<div class="as-dropdown relative inline-flex [--placement:bottom-left]'>
    //     <button id="as-dropdown" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Dropdown
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //         <path d="m6 9 6 6 6-6"></path>
    //       </svg>
    //     </button>
      
    //     <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2" aria-labelledby="as-dropdown">
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Newsletter
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Purchases
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Downloads
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Team Account
    //       </a>
    //     </div>
    //   </div>
      
    //   <div class="inline-flex">
    //     <button type="button" class="relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-s-md border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Split dropdown
    //     </button>
    //     <div class="as-dropdown relative inline-flex [--placement:bottom-left]'>
    //       <button id="as-split-dropdown" type="button" class="as-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-e-md border border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
    //         <span class="sr-only">Toggle Dropdown</span>
    //         <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //           <path d="m6 9 6 6 6-6"></path>
    //         </svg>
    //       </button>
      
    //       <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-split-dropdown">
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Newsletter
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Purchases
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Downloads
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Team Account
    //         </a>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:15,
    //     title:'Dropup',
    //     htmlcode: `<div class="as-dropdown [--placement:top-left] relative inline-flex">
    //     <button id="as-dropup" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Dropup
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //         <path d="m18 15-6-6-6 6"></path>
    //       </svg>
    //     </button>
      
    //     <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2" aria-labelledby="as-dropup">
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Newsletter
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Purchases
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Downloads
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Team Account
    //       </a>
    //     </div>
    //   </div>
      
    //   <div class="inline-flex">
    //     <button type="button" class="relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-s-md border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Split dropup
    //     </button>
    //     <div class="as-dropdown [--placement:top-left] relative inline-flex">
    //       <button id="as-split-dropup" type="button" class="as-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-e-md border border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
    //         <span class="sr-only">Toggle Dropdown</span>
    //         <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //           <path d="m18 15-6-6-6 6"></path>
    //         </svg>
    //       </button>
      
    //       <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-split-dropup">
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Newsletter
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Purchases
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Downloads
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Team Account
    //         </a>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:16,
    //     title:'Dropright',
    //     htmlcode: `<div class="as-dropdown [--placement:bottom-right] relative inline-flex">
    //     <button id="as-dropright" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Dropright
    //       <svg class="flex-shrink-0 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //         <path d="m15 18-6-6 6-6"></path>
    //       </svg>
    //     </button>
      
    //     <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2" aria-labelledby="as-dropright">
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Newsletter
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Purchases
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Downloads
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Team Account
    //       </a>
    //     </div>
    //   </div>
      
    //   <div class="inline-flex">
    //     <button type="button" class="relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-s-md border-gray-200 bg-white border text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Split dropright
    //     </button>
    //     <div class="as-dropdown [--placement:bottom-right] relative inline-flex">
    //       <button id="as-split-dropright" type="button" class="as-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-e-md border border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
    //         <span class="sr-only">Toggle Dropdown</span>
    //         <svg class="flex-shrink-0 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //           <path d="m15 18-6-6 6-6"></path>
    //         </svg>
    //       </button>
      
    //       <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-split-dropright">
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Newsletter
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Purchases
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Downloads
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Team Account
    //         </a>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:17,
    //     title:'Dropleft',
    //     htmlcode: `<div class="as-dropdown relative inline-flex [--placement:bottom-left]'>
    //     <button id="as-dropleft" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Dropleft
    //       <svg class="flex-shrink-0 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //         <path d="m9 18 6-6-6-6"></path>
    //       </svg>
    //     </button>
      
    //     <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2" aria-labelledby="as-dropleft">
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Newsletter
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Purchases
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Downloads
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Team Account
    //       </a>
    //     </div>
    //   </div>
      
    //   <div class="inline-flex">
    //     <button type="button" class="relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-s-md border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Split dropleft
    //     </button>
    //     <div class="as-dropdown relative inline-flex [--placement:bottom-left]'>
    //       <button id="as-split-dropleft" type="button" class="as-dropdown-toggle relative -ms-[.3125rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-e-md border border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
    //         <span class="sr-only">Toggle Dropdown</span>
    //         <svg class="flex-shrink-0 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //           <path d="m9 18 6-6-6-6"></path>
    //         </svg>
    //       </button>
      
    //       <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-split-dropleft">
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Newsletter
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Purchases
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Downloads
    //         </a>
    //         <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //           Team Account
    //         </a>
    //       </div>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:18,
    //     title:'Responsive alignment right',
    //     htmlcode: `<div class="as-dropdown relative inline-flex [--strategy:absolute]'>
    //     <button id="as-dropdown-left-but-right-on-lg" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Left aligned but right aligned when large screen
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //         <path d="m6 9 6 6 6-6"></path>
    //       </svg>
    //     </button>
      
    //     <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10 top-0 lg:start-auto lg:end-0 min-w-64 bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-dropdown-left-but-right-on-lg">
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Newsletter
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Purchases
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Downloads
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Team Account
    //       </a>
    //     </div>
    //   </div>`
    // },
    // {
    //     id:19,
    //     title:'Responsive alignment left',
    //     htmlcode: `<div class="as-dropdown relative inline-flex [--strategy:absolute]'>
    //     <button id="as-dropdown-right-but-left-on-lg" type="button" class="as-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    //       Right aligned but left aligned when large screen
    //       <svg class="as-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //         <path d="m6 9 6 6 6-6"></path>
    //       </svg>
    //     </button>
      
    //     <div class="as-dropdown-menu w-72 transition-[opacity,margin] duration as-dropdown-open:opacity-100 opacity-0 hidden z-10 top-0 end-0 start-auto lg:end-auto lg:start-0 min-w-64 bg-white shadow-md rounded-lg p-2 mt-2" aria-labelledby="as-dropdown-right-but-left-on-lg">
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Newsletter
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Purchases
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Downloads
    //       </a>
    //       <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
    //         Team Account
    //       </a>
    //     </div>
    //   </div>`
    // },
   
    
 
];