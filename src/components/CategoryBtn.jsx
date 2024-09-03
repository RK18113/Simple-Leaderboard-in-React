import { useState,React } from "react"

function CategoryBtn(props) {  

    const BtnFont = {
        fontFamily: 'Inter', 
        fontWeight: 500,
        lineHeight: '27.23px',
        textAlign: 'left'
    }

    return (
    <div className='flex justify-center w-full'>
        <div className='w-[75%] sm:w-[65%] lg:w-[30%]'>
        <button className='bg-white p-2 pb-[5px] rounded-2xl rounded-r-none w-[50%] hover:bg-slate-200' onClick={() => {props.handleOrganisation(true);}}>
            <div className='flex flex-wrap justify-center'>
                <div className='flex justify-center items-center pb-[3px] w-full text-[3.25vw] sm:text-[1.8vw] lg:text-[1.5vw] 2xl:text-[1.2vw] 2xl:pb-[5px]' style={BtnFont}>Organisation</div>
                {props.isOrganisation ? <div className='h-[4px] w-[50%] lg:w-[40%] 2xl:w-[35%] bg-[#3B5987] rounded-sm'></div> : <div className='h-[4px] w-[50%] lg:w-[40%] 2xl:w-[35%] rounded-sm'></div>} 
            </div>
        </button>

        <button className='bg-white p-2 pb-[5px] rounded-2xl rounded-l-none w-[50%] hover:bg-slate-200' onClick={() => {props.handleOrganisation(false);}}>
            <div className='flex flex-wrap justify-center'>
                <div className='flex justify-center items-center pb-[3px] w-full text-[3.25vw] sm:text-[1.8vw] lg:text-[1.5vw] 2xl:text-[1.2vw] 2xl:pb-[5px]' style={BtnFont}>Department</div> 
                {props.isOrganisation ? <div className='h-[4px] w-[50%] lg:w-[40%] 2xl:w-[35%] rounded-sm'></div> : <div className='h-[4px] w-[50%] lg:w-[40%] 2xl:w-[35%] bg-[#3B5987] rounded-sm'></div>} 
            </div>
        </button>
        </div>
    </div>
    )
}

export default CategoryBtn