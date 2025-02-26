import React from 'react'
import lupa from '../assets/lupa.png'

function Search(){
    return(
        <div className='mb-[1.5rem]'>
            <div className='bg-[#FEFEFE] flex justify-between p-[1.375rem] rounded-[1rem]'>
            <div className='flex items-center gap-[1.5rem]'>
                <img src={lupa} alt="search" className='h-[1.5rem] w-[1.rem]'/>
                <input type="text" name="" id=""  placeholder='Search Github username...' className='w-[30rem]'/>
            </div>
            <button className='bg-[#0079FF] text-[#FFF] pt-[0.75rem] pb-[0.75rem] pr-[1.5rem] pl-[1.5rem] rounded-[0.5rem]'>Search</button>
            </div>
        </div>
    )
}

export default Search