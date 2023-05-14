import React from 'react'
import Sidebar from '../components/Sidebar'
import Display from '../components/Display'

const Root = () => {
  return (
    <div className='w-[80%] h-[85%]  p-4 rounded-md bg-white cs-shadow flex gap-6 items-center'>
        <Sidebar/>
        <Display/>
    </div>
  )
}

export default Root