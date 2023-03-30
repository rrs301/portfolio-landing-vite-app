import React, { useState } from 'react'
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay';
function Header() {

    const [toggle,setToggle]=useState(false)
    const menuList=[
        {
            id:1,
            title:'HOME'
        },
        {
            id:1,
            title:'ABOUT'
        },
        {
            id:1,
            title:'SERVICE'
        },
        {
            id:1,
            title:'PORTFOLIO'
        },
        {
            id:1,
            title:'CONTACT'
        },
    ]
  return (
    <div className='flex items- justify-between'>
        <div>
            <h2 className='text-[24px] font-bold text-white'>RAHUL 
            <span className='text-red-500'> SANAP</span></h2>
        </div>
        <div className='hidden md:flex gap-4'>
            {menuList.map((item)=>(
                <div>
                    <h2 className='text-white 
                    hover:border-[1px] border-red-500 rounded-full
                    text-[15px] px-3 py-1 cursor-pointer'>{item.title}</h2>
                    </div>
            ))}
            <h2 className='text-white 
                    hover:border-[1px] border-red-500 rounded-full
                    text-[15px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-red-500 to-red-800 '>Hire Me</h2>
        </div>
        <div className='md:hidden'>
           {!toggle? <HiBars3BottomRight onClick={()=>setToggle(!toggle)} className='text-white text-[22px] cursor-pointer'/>
           :<HiOutlineXMark onClick={()=>setToggle(!toggle)} className='text-white text-[22px] cursor-pointer'/>}
            {toggle?<MenuOverlay menuList={menuList} />:null}   
        </div>
    </div>
  )
}

export default Header