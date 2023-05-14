import { useContext } from 'react'
import './Display.css'
import { AuthContex } from '../AuthProvider'

const Display = () => {
  const { tf } = useContext(AuthContex)
  return (
    <div className={`w-[80%] h-[80%] cs-glass main-div-class  relative  mx-auto`}>
      <div className=' p-4 relative content-center'>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div1' : 'div11'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div2' : 'div22'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=74268&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div3' : 'div33'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div4' : 'div44'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div5' : 'div55'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div6' : 'div66'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=eHKMKjewguCH&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div7' : 'div77'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=101670&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div8' : 'div88'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div9' : 'div99'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div10' : 'div100'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=104996&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div111' : 'div1111'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=eHKMKjewguCH&format=png" alt="" />
        </div>
        <div className={`p-4 w-28 h-28 rounded-md bg-[#FFFAEF] mx-auto absolute ${tf ? 'div12' : 'div122'}`}>
          <img className='hover:scale-110 duration-300 cursor-pointer' src="https://img.icons8.com/?size=512&id=101670&format=png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Display