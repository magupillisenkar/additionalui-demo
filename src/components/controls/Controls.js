import React, { useState } from 'react'
import Navbar from '../home/Navbar'
import Sidebar from './Sidebar'
import Main from './Main'
import { SidebarTabs } from '../../utilities/SidebarTabs'

export default function Controls() {
  const sidebarTabs = SidebarTabs;
  const [data, setData] = useState({ route: 'accordion', html: '<div className="text-center text-2xl">No Data</div>' });
  const handleTabChange = (route) => {
    console.log(route)
    const allTabs = sidebarTabs.reduce((acc, category) => acc.concat(category.list), []);
    const record = allTabs.find(tab => tab.route === route);
    // console.log(record)
    setData(record);
  }
  return (
    <div>
      <Navbar />
      <main className='w-full max-w-[90rem] mx-auto py-2 px-4 sm:px-6 lg:px-8 '>
        <div className='grid grid-cols-5'>
          <div className='border-e-2'>
            <Sidebar tabs={sidebarTabs} name={data?.route} onTabChange={handleTabChange} />
          </div>
          <div className='col-span-3 p-5 ms-5'>
            <Main data={data?.html} />
          </div>
        </div>
      </main>
    </div>
  )
}
