import React, { useEffect, useRef, useState } from 'react'
import lupa from '../assets/lupa.png'

import Button from './Button'

function Search({ onSearch, errado }){
    const [nome, setNome] = useState('');

    function seguraNome(e) {
        e.preventDefault();
        if (nome.trim() !== "") {
            onSearch(nome);
        }
    }

    useEffect(() => {
        if(errado == true){
            console.log(errado)
        }
    },[errado])


    return(
        <div className='mb-[1.5rem]'>
            <div className='bg-[var(--light-mode-offwhite)] flex justify-between p-[1.375rem] rounded-[1rem]'>
            <div className='flex items-center gap-[1.5rem]'>
                <img src={lupa} alt="search" className='h-[1.5rem] w-[1.rem]'/>
                <input onChange={(e) => setNome(e.target.value)} type="text" name="" id=""  placeholder='Search Github username...' className='w-[25rem] focus:outline-transparent cursor-[pointer]'/>
                {errado == true && <span className='text-[var(--red-color)] font-bold text-[0.9375rem]'>No results</span>}
            </div>
            <Button clique={seguraNome}/>
            </div>
        </div>
    )
}

export default Search