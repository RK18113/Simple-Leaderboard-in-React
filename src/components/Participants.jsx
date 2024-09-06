import React from 'react'
import Positive from '../assets/Positive.svg'
import Negative from '../assets/Negative.svg'

function Participants(props) {

  return (
    <div className=' bg-[#3B5987] p-5 mt-5 lg:mt-0 lg:mr-10 w-full lg:w-[35vw] xl:w-[35vw] rounded-t-3xl lg:rounded-3xl'>
        {props.participants.map((person, index) => (
        index !== 0 ? (
          <div key={index} className='flex justify-between text-white border-t-2 pt-3 pb-3'>
            <div className='flex'>
              <div className='border-white border-[3.5px] rounded-full pt-[8px] pb-[8px] pr-[10px] pl-[10px] text-[20px] font-medium font-inter'>
              #{index + 4}
              </div>
              <p className='flex items-center ml-3'>{person}</p>  
            </div>

            <div className='flex flex-wrap items-center justify-end'>
              <p className='w-full text-center'>{props.participantPoints[index]}</p>
              {props.isNetPositive[index] ? (
                <img src={Positive} alt="Positive" className='mr-2' />
              ) : (
                <img src={Negative} alt="Negative" className='mr-2' />
              )}
            </div>
          </div>
        ) : (
          <div key={index} className='flex justify-between text-white pb-2'>
            <div className='flex'>
              <div className='border-white border-[3.5px] rounded-full pt-[8px] pb-[8px] pr-[10px] pl-[10px] text-[20px] font-medium font-inter'>
              #{index + 4}
              </div>
              <p className='flex items-center ml-3'>{person}</p>  
            </div>

            <div className='flex flex-wrap items-center justify-end'>
              <p className='w-full text-center'>{props.participantPoints[index]}</p>
              {props.isNetPositive[index] ? (
                <img src={Positive} alt="Positive" className='mr-2'/>
              ) : (
                <img src={Negative} alt="Negative" className='mr-2'/>
              )}
            </div>
          </div>
        )
      ))}
    </div>
  )
}

export default Participants