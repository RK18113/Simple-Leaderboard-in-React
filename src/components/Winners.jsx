import React from 'react'
import Winner1 from '../assets/Winner1.svg'
import Winner2 from '../assets/Winner2.svg'
import Winner3 from '../assets/Winner3.svg'

function Winners(props) {

    return (
    <div className='flex flex-wrap justify-center'>
        <div className='flex pr-3 pl-3 md:pr-0 md:pl-0 sm:w-[60%] lg:w-[65%] h-[30%] justify-around'>
            <img src={Winner2} className='h-[100px] w-[110px] sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px] relative top-[15vh] sm:top-[14vh] lg:top-[18vh]'/>
            <img src={Winner1} className='h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px] relative top-[4vh] sm:top-[3vh] lg:top-[4vh]'/>
            <img src={Winner3} className='h-[100px] w-[110px] sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px] relative top-[15vh] sm:top-[14vh] lg:top-[18vh]'/>
        </div>

        <div className='flex pr-3 pl-3 md:pr-0 md:pl-0 sm:w-[60%] lg:w-[65%] h-[33vh] lg:h-[37.5vh] pb-5'>
            <div className='flex flex-wrap justify-center items-center content-center bg-[#3B5987] pb-3 mr-[1px] h-[60%] w-[33%] self-end rounded-3xl rounded-r-none '>
                <div className='text-white text-center w-full text-[15px] font-normal mt-5 font-inter' >{props.winners[1]}</div>
                <div className='text-white text-[20px] font-semibold mt-3 font-inter'>{props.winnerPoints[1]}</div>
            </div>
            <div className='flex flex-wrap justify-center items-center content-center bg-[#3B5987] pb-3 h-[100%] w-[33%] rounded-3xl rounded-b-none'>
                <div className='text-white text-center w-full text-[15px] font-normal font-inter'>{props.winners[0]}</div>
                <div className='text-white text-[20px] font-semibold mt-3 font-inter'>{props.winnerPoints[0]}</div>
            </div>
            <div className='flex flex-wrap justify-center items-center content-center bg-[#3B5987] pb-3 ml-[1px] h-[60%] w-[33%] self-end rounded-3xl rounded-l-none'>
                <div className='text-white text-center w-full text-[15px] font-normal mt-5 font-inter'>{props.winners[2]}</div>
                <div className='text-white text-[20px] font-semibold mt-3 font-inter'>{props.winnerPoints[2]}</div>
            </div>
        </div>
    </div>
    )
}

export default Winners