import React from 'react'
import Winner1 from '../assets/Winner1.jpeg'
import Winner2 from '../assets/Winner2.jpeg'
import Winner3 from '../assets/Winner3.jpeg'

function Winners(props) {
    return (
    <div className='flex flex-wrap justify-center h-[45vh] lg:h-[55vh]'>
        <div className='flex w-[80%] justify-around shrink-0'>
            <img src={Winner3} className='border-gray-500 border-4 rounded-full h-[80px] w-[80px] sm:h-[125px] sm:w-[125px] lg:h-[125px] lg:w-[125px] relative top-[19vh] sm:top-[17vh] lg:top-[18vh]'/>
            <img src={Winner1} className='border-yellow-400 border-4 rounded-full h-[80px] w-[80px] sm:h-[125px] sm:w-[125px] lg:h-[125px] lg:w-[125px] relative top-[5vh] sm:top-[5vh] lg:top-[8vh]'/>
            <img src={Winner2} className='border-red-700 border-4 rounded-full h-[80px] w-[80px] sm:h-[125px] sm:w-[125px] lg:h-[125px] lg:w-[125px] relative top-[19vh] sm:top-[17vh] lg:top-[18vh]'/>
        </div>

        <div className='flex w-[80%] h-[35vh] md:h-[30vh] pb-5'>
            <div className='flex flex-wrap justify-center items-center content-center bg-[#3B5987] h-[60%] w-[33%] self-end rounded-3xl rounded-r-none '>
                <div className='text-white text-center w-full'>{props.winners[0]}</div>
                <div className='text-white'>{props.winnerPoints[0]}</div>
            </div>
            <div className='flex flex-wrap justify-center items-center content-center bg-[#3B5987] h-[100%] w-[33%] rounded-3xl rounded-b-none'>
                <div className='text-white text-center w-full'>{props.winners[1]}</div>
                <div className='text-white'>{props.winnerPoints[1]}</div>
            </div>
            <div className='flex flex-wrap justify-center items-center content-center bg-[#3B5987] h-[60%] w-[33%] self-end rounded-3xl rounded-l-none'>
                <div className='text-white text-center w-full'>{props.winners[2]}</div>
                <div className='text-white'>{props.winnerPoints[2]}</div>
            </div>
        </div>
    </div>
    )
}

export default Winners