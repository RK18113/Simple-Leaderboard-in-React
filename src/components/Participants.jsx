import React from 'react'
import Positive from '../assets/Positive.svg'
import Negative from '../assets/Negative.svg'

function Participants(props) {
  const Font = {
    fontFamily: 'Inter', 
    lineHeight: '36.31px', 
    textAlign: 'left', 
  }

  return (
    <div className='h-[60vh] bg-[#3B5987] p-5 mt-5 lg:mt-0 lg:mr-10 w-full lg:w-[35vw] xl:w-[35vw] lg:h-[60vh] xl:h-[60vh] rounded-t-3xl lg:rounded-3xl'>
        {props.participants.map((person, index) => (
        index !== 0 ? (
          <div key={index} className='flex justify-between text-white border-t-2 pt-2 pb-2'>
            <div className='border-white border-[3.5px] rounded-full pt-1 pb-1 pr-2 pl-2 text-[1.5vw] font-medium' style={Font}>
              #{index + 4}
            </div>
            <p className='flex items-center'>{person}</p>
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
            <div className='border-white border-[3.5px] rounded-full pt-1 pb-1 pr-2 pl-2 text-[1.5vw] font-medium' style={Font}>
              #{index + 4}
            </div>
            <p className='flex items-center'>{person}</p>
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