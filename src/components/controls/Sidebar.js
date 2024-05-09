import { useState } from "react"
import { SidebarTabs } from "../../utilities/SidebarTabs";

export default function Sidebar({ name }) {
    const [isOpen, setIsOpen] = useState(false);
    const tabs = SidebarTabs;
    // console.log(name,headers);

    const toggleSidebar = () => {
        // console.log('toggle')
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Sidebar Toggle */}
            <div className="sticky top-[3rem] inset-x-0 z-20 bg-white border-b md:top-[69px] lg:hidden dark:bg-slate-900 dark:border-gray-700">
                <div className="">
                    <div className="flex justify-between items-center py-1">
                        <ol className="flex items-center whitespace-nowrap me-1 truncate">
                            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                                <a href={'/docs'}>Docs</a>
                                <svg className="flex-shrink-0 mx-1 overflow-visible size-4 text-gray-400 dark:text-slate-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={toggleSidebar}>
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </li>

                            <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200" aria-current="page">
                                {name}
                            </li>
                        </ol>
                        <button type="button" className="p-1 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-justify-right" viewBox="0 0 16 16" onClick={toggleSidebar}>
                                <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* End Sidebar Toggle */}
            {/* Sidebar Content */}
            <div id="docs-sidebar" className={`${isOpen ? 'hs-overlay-open:translate-x-0' : '-translate-x-full'} transition-all duration-300 transform ${isOpen ? 'block' : 'hidden'} fixed top-0 start-0 bottom-0 z-[60] w-80 bg-white overflow-y-auto dark:bg-slate-900 dark:[&::-webkit-scrollbar]:w-2 dark:[&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 lg:block lg:translate-x-0 lg:top-8 lg:end-auto lg:-bottom-8 lg:start-[max(0px,calc(50%-45rem))] lg:z-10 before:sticky before:inset-x-0 before:top-0 lg:before:top-8 before:z-20 before:block before:w-full before:h-10 before:pointer-events-none before:bg-gradient-to-b before:from-white before:via-white/90 after:sticky after:inset-x-0 after:bottom-0 lg:after:bottom-8 after:z-20 after:block after:w-full after:h-10 after:pointer-events-none after:bg-gradient-to-t after:from-white after:via-white/90 dark:before:from-slate-900 dark:before:via-slate-900/95 dark:after:from-slate-900 dark:after:via-slate-900/95 dark:bg-slate-900 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500`}>
                {/* Close Button */}
                <button type="button" className="absolute top-4 end-4 z-20 md:hidden flex justify-center items-center size-8 text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700" onClick={toggleSidebar}>
                    <span className="sr-only">Toggle Navigation</span>
                    <svg className="flex-shrink-0 size-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                {/* Sidebar Content */}
                <nav id="sidebar-nav" className="relative space-y-8 pt-5 pb-10 sm:pt-7 px-4 sm:px-8 -my-8 lg:my-0">
                    <ul className="space-y-3">
                        <li>
                            <a className="group flex items-center gap-x-2 text-sm font-semibold text-slate-700 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-300 active-link font-semibold text-gray-500 hover:text-gray-500" target="_blank" href="https://additionalui.com/docs">
                                <div className="p-1.5 border rounded-lg shadow-sm group-hover:shadow-gray-200 dark:border-gray-700 dark:group-hover:shadow-gray-900">
                                    <svg className="flex-shrink-0 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                    </svg>
                                </div>
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a className="group flex items-center gap-x-2 text-sm font-semibold text-slate-700 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-300 " target="_blank" href="https://additionalui.com/examples">
                                <div className="p-1.5 border rounded-lg shadow-sm group-hover:shadow-cyan-200 dark:border-gray-700 dark:group-hover:shadow-cyan-900">
                                    <svg className="flex-shrink-0 size-4 text-cyan-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="18" height="7" x="3" y="3" rx="1" />
                                        <rect width="9" height="7" x="3" y="14" rx="1" />
                                        <rect width="5" height="7" x="16" y="14" rx="1" />
                                    </svg>
                                </div>
                                Examples
                            </a>
                        </li>
                        <li>
                            <a href='https://additionalui.com/templates' target="_blank" className="group flex items-center gap-x-2 text-sm font-semibold text-slate-700 opacity-100 dark:text-slate-400">
                                <div className="p-1.5 border rounded-lg shadow-sm dark:border-gray-700">
                                    <svg className="flex-shrink-0 size-4 text-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                        <line x1="3" x2="21" y1="9" y2="9" />
                                        <line x1="9" x2="9" y1="21" y2="9" />
                                    </svg>
                                </div>
                                Templates <span className="inline bg-gray-50 border border-gray-300 text-gray-600 text-[.6125rem] leading-4 uppercase rounded-full py-0.5 px-2 dark:bg-gray-800/[.15] dark:border-gray-800/[.2] dark:text-gray-500">new</span>
                            </a>
                        </li>
                    </ul>
                    {tabs?.map((x, index) => (
                        <ul key={`head_c_${index}`}>
                            <li>
                                <h5 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-200">{x?.category}</h5>
                                <ul className="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800">
                                    {x?.list?.map((item, inx) => (
                                        <li key={`head_sub_${inx}`}  onClick={toggleSidebar}><a className={`block ${item?.name == name ? 'border-slate-400':' border-transparent'} py-1 ps-4 -ms-px border-s-2 text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300`} href={`/docs/${item?.route}`}>{item?.name}</a></li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    ))}
                </nav>
            </div>
        </div>
    )
}
