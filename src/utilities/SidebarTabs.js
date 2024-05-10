export const SidebarTabs = [
    {
        category: 'Base Components',
        list: [
            { id: 1, route:'accordion', name: 'Accordion', html: `<div class="as-accordion-group">
            <div class="as-accordion active" id="as-basic-heading-one">
              <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:as-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-controls="as-basic-collapse-one">
                <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
                Accordion #1
              </button>
              <div id="as-basic-collapse-one" class="as-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-heading-one">
                <p class="text-gray-800 dark:text-neutral-200">
                  <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                </p>
              </div>
            </div>
          
            <div class="as-accordion" id="as-basic-heading-two">
              <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:as-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-controls="as-basic-collapse-two">
                <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
                Accordion #2
              </button>
              <div id="as-basic-collapse-two" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-heading-two">
                <p class="text-gray-800 dark:text-neutral-200">
                  <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                </p>
              </div>
            </div>
          
            <div class="as-accordion" id="as-basic-heading-three">
              <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:as-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-controls="as-basic-collapse-three">
                <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
                Accordion #3
              </button>
              <div id="as-basic-collapse-three" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-heading-three">
                <p class="text-gray-800 dark:text-neutral-200">
                  <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                </p>
              </div>
            </div>
          </div>` },
            { id: 2, route:'alerts', name: 'Alerts', html: `` },
            { id: 3, route:'avatar', name: 'Avatar', html: `` },
            { id: 4, route:'avatar-group', name: 'Avatar Group', html: `` },
            { id: 5, route:'badge', name: 'Badge', html: `` },
            { id: 6, route:'blockquote', name: 'Blockquote', html: `` }
        ]
    },
    {
        category: 'Navigations',
        list: [
            { id: 1, route:'navbar', name: 'Navbar', html: `` },
            { id: 2, route:'mega-menu', name: 'Mega Menu', html: `` },
            { id: 3, route:'navs', name: 'Navs', html: `` },
            { id: 4, route:'tabs', name: 'Tabs', html: `` },
            { id: 5, route:'pagination', name: 'Pagination', html: `` },
        ]
    },
    {
        category: 'Basic Forms',
        list: [
            { id: 1, route:'input', name: 'Input', html: `` },
            { id: 2, route:'input-group', name: 'Input Group', html: `` },
            { id: 3, route:'textarea', name: 'Textarea', html: `` },
            { id: 4, route:'file-input', name: 'File Input', html: `` },
            { id: 5, route:'color-picker', name: 'Color Picker', html: `` }
        ]
    },
];