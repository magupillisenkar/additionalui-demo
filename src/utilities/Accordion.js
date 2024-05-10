export const Accordion = [
    {
        id:1,
        title:'Example',
        htmlcode: `<div class="as-accordion-group">
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
          </div>`
    },
    {
        id:2,
        title:'Nested',
        htmlcode: `<div class="as-accordion-group">
        <div class="as-accordion active" id="as-basic-nested-heading-one">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-nested-collapse-one">
            <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg>
            Accordion #1
          </button>
          <div id="as-basic-nested-collapse-one" class="as-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-nested-heading-one">
            <div class="as-accordion-group ps-6">
              <div class="as-accordion active" id="as-basic-nested-sub-heading-one">
                <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-nested-sub-collapse-one">
                  <svg class="as-accordion-active:hidden block size-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M8.12421 13.36V2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                  <svg class="as-accordion-active:block hidden size-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                  Sub accordion #1
                </button>
                <div id="as-basic-nested-sub-collapse-one" class="as-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-nested-sub-heading-one">
                  <p class="text-gray-800">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
      
              <div class="as-accordion" id="as-basic-nested-sub-heading-two">
                <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-nested-sub-collapse-two">
                  <svg class="as-accordion-active:hidden block size-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M8.12421 13.36V2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                  <svg class="as-accordion-active:block hidden size-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                  Sub accordion #2
                </button>
                <div id="as-basic-nested-sub-collapse-two" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-nested-sub-heading-two">
                  <p class="text-gray-800">
                    <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
      
              <div class="as-accordion" id="as-basic-nested-sub-heading-three">
                <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-nested-sub-collapse-three">
                  <svg class="as-accordion-active:hidden block size-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M8.12421 13.36V2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                  <svg class="as-accordion-active:block hidden size-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                  Sub accordion #3
                </button>
                <div id="as-basic-nested-sub-collapse-three" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-nested-sub-heading-three">
                  <p class="text-gray-800">
                    <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div class="as-accordion" id="as-basic-nested-heading-two">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-nested-collapse-two">
            <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg>
            Accordion #2
          </button>
          <div id="as-basic-nested-collapse-two" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-nested-heading-two">
            <p class="text-gray-800">
              <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      
        <div class="as-accordion" id="as-basic-nested-heading-three">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-nested-collapse-three">
            <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg>
            Accordion #3
          </button>
          <div id="as-basic-nested-collapse-three" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-nested-heading-three">
            <p class="text-gray-800">
              <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      </div>`
    },
    {
        id:3,
        title:'No arrow',
        htmlcode: `<div class="as-accordion-group">
        <div class="as-accordion active" id="as-basic-no-arrow-heading-one">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-no-arrow-collapse-one">
            Accordion #1
          </button>
          <div id="as-basic-no-arrow-collapse-one" class="as-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-no-arrow-heading-one">
            <p class="text-gray-800">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      
        <div class="as-accordion" id="as-basic-no-arrow-heading-two">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-no-arrow-collapse-two">
            Accordion #2
          </button>
          <div id="as-basic-no-arrow-collapse-two" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-no-arrow-heading-two">
            <p class="text-gray-800">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      
        <div class="as-accordion" id="as-basic-no-arrow-heading-three">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-no-arrow-collapse-three">
            Accordion #3
          </button>
          <div id="as-basic-no-arrow-collapse-three" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-no-arrow-heading-three">
            <p class="text-gray-800">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      </div>`
    },
    {
        id:4,
        title:'With arrow',
        htmlcode: `<div class="as-accordion-group">
        <div class="as-accordion active" id="as-basic-with-arrow-heading-one">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-with-arrow-collapse-one">
            <svg class="as-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m18 15-6-6-6 6"></path>
            </svg>
            Accordion #1
          </button>
          <div id="as-basic-with-arrow-collapse-one" class="as-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-with-arrow-heading-one">
            <p class="text-gray-800">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      
        <div class="as-accordion" id="as-basic-with-arrow-heading-two">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-with-arrow-collapse-two">
            <svg class="as-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m18 15-6-6-6 6"></path>
            </svg>
            Accordion #2
          </button>
          <div id="as-basic-with-arrow-collapse-two" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-with-arrow-heading-two">
            <p class="text-gray-800">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      
        <div class="as-accordion" id="as-basic-with-arrow-heading-three">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-with-arrow-collapse-three">
            <svg class="as-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m18 15-6-6-6 6"></path>
            </svg>
            Accordion #3
          </button>
          <div id="as-basic-with-arrow-collapse-three" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-with-arrow-heading-three">
            <p class="text-gray-800">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      </div>`
    },
    {
        id:5,
        title:'With title and arrow stretched',
        htmlcode: `<div class="as-accordion-group">
        <div class="as-accordion active" id="as-basic-with-title-and-arrow-stretched-heading-one">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-with-title-and-arrow-stretched-collapse-one">
            Accordion #1
            <svg class="as-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </button>
          <div id="as-basic-with-title-and-arrow-stretched-collapse-one" class="as-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-with-title-and-arrow-stretched-heading-one">
            <p class="text-gray-800">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      
        <div class="as-accordion" id="as-basic-with-title-and-arrow-stretched-heading-two">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-with-title-and-arrow-stretched-collapse-two">
            Accordion #2
            <svg class="as-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </button>
          <div id="as-basic-with-title-and-arrow-stretched-collapse-two" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-with-title-and-arrow-stretched-heading-two">
            <p class="text-gray-800">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      
        <div class="as-accordion" id="as-basic-with-title-and-arrow-stretched-heading-three">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-with-title-and-arrow-stretched-collapse-three">
            Accordion #3
            <svg class="as-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </button>
          <div id="as-basic-with-title-and-arrow-stretched-collapse-three" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-basic-with-title-and-arrow-stretched-heading-three">
            <p class="text-gray-800">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      </div>`
    },
    {
        id:6,
        title:'Bordered',
        htmlcode: `<div class="as-accordion-group">
        <div class="as-accordion active bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg" id="as-bordered-heading-one">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-bordered-collapse-one">
            <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg>
            Accordion #1
          </button>
          <div id="as-basic-bordered-collapse-one" class="as-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-bordered-heading-one">
            <div class="pb-4 px-5">
              <p class="text-gray-800">
                <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
              </p>
            </div>
          </div>
        </div>
      
        <div class="as-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg" id="as-bordered-heading-two">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-bordered-collapse-two">
            <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg>
            Accordion #2
          </button>
          <div id="as-basic-bordered-collapse-two" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-bordered-heading-two">
            <div class="pb-4 px-5">
              <p class="text-gray-800">
                <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
              </p>
            </div>
          </div>
        </div>
      
        <div class="as-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg" id="as-bordered-heading-three">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-bordered-collapse-three">
            <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg>
            Accordion #3
          </button>
          <div id="as-basic-bordered-collapse-three" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-bordered-heading-three">
            <div class="pb-4 px-5">
              <p class="text-gray-800">
                <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
              </p>
            </div>
          </div>
        </div>
      </div>`
    },
    {
        id:7,
        title:'Active content bordered',
        htmlcode: `<div class="as-accordion-group">
        <div class="as-accordion as-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl" id="as-active-bordered-heading-one">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-active-bordered-collapse-one">
            Accordion #1
            <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg>
          </button>
          <div id="as-basic-active-bordered-collapse-one" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-active-bordered-heading-one">
            <div class="pb-4 px-5">
              <p class="text-gray-800">
                <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
              </p>
            </div>
          </div>
        </div>
      
        <div class="as-accordion as-accordion-active:border-gray-200 active bg-white border border-transparent rounded-xl" id="as-active-bordered-heading-two">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-active-bordered-collapse-two">
            Accordion #2
            <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg>
          </button>
          <div id="as-basic-active-bordered-collapse-two" class="as-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-active-bordered-heading-two">
            <div class="pb-4 px-5">
              <p class="text-gray-800">
                <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
              </p>
            </div>
          </div>
        </div>
      
        <div class="as-accordion as-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl" id="as-active-bordered-heading-three">
          <button class="as-accordion-toggle as-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none" aria-controls="as-basic-active-bordered-collapse-three">
            Accordion #3
            <svg class="as-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="as-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg>
          </button>
          <div id="as-basic-active-bordered-collapse-three" class="as-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="as-active-bordered-heading-three">
            <div class="pb-4 px-5">
              <p class="text-gray-800">
                <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
              </p>
            </div>
          </div>
        </div>
      </div>`
    },
   
    
 
];