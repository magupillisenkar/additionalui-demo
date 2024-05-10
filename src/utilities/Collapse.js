export const Collapse = [
    {
        id:1,
        title:'Example',
        htmlcode: `<button type="button" class="as-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" id="as-basic-collapse" data-as-collapse="#as-basic-collapse-heading">
        Collapse
        <svg class="as-collapse-open:rotate-180 flex-shrink-0 size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      <div id="as-basic-collapse-heading" class="as-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-collapse">
        <div class="mt-5">
          <p class="text-gray-500">
            This is a collapse body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
          </p>
        </div>
      </div>`
    },
    {
        id:2,
        title:'Show/Hide',
        htmlcode: `<p class="text-gray-500">
        Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.
      </p>
      <div id="as-show-hide-collapse-heading" class="as-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-show-hide-collapse">
        <p class="text-gray-500">
          This is a collapse body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
        </p>
      </div>
      <p class="mt-2">
        <button type="button" class="as-collapse-toggle inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none" id="as-show-hide-collapse" data-as-collapse="#as-show-hide-collapse-heading">
          <span class="as-collapse-open:hidden">Read more</span>
          <span class="as-collapse-open:block hidden">Read less</span>
          <svg class="as-collapse-open:rotate-180 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
      </p>`
    },
  
   
    
 
];