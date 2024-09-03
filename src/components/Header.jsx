import React from 'react'
import BackArrow from '../assets/BackArrow.svg'
import MenuBtn from '../assets/MenuBtn.svg'

function Header() {
    const TitleFont = {
        fontFamily: 'Inter',
        fontSize: '30px',
        fontWeight: 600,
        lineHeight: '48.41px',
        textAlign: 'left'
    }

    return (
    <div className='flex flex-nowrap justify-between w-full p-3'>
        <button className='hover:bg-gray-300 rounded-full pr-4 pl-4'><img src={BackArrow} alt="" className='h-[25px]'/></button>
        <p className='text-[#2C2C2C]' style={TitleFont}>Leaderboard</p>
        <button className='hover:bg-gray-300 rounded-full pr-4 pl-4'><img src={MenuBtn} alt="" className='h-[25px]'/></button>
    </div>
    )
}

export default Header