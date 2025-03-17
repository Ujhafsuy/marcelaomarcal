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

    


    return(
        <div className='mb-[1.5rem] shadow-(--shadow) rounded-[1rem]'>
            <div className='bg-[var(--offwhite)] flex items-center justify-between p-[0.655rem] rounded-[1rem]'>
            <div className='flex items-center gap-[1.5rem] search'>
                <img src={lupa} alt="search" className='h-[1.5rem] w-[1.rem] ml-[32px] lupa'/>
                <input onChange={(e) => setNome(e.target.value)} type="text" name="" id=""  placeholder='Search Github username...' className='w-[25rem] cursor-[pointer] placeholder-[var(--slateblue)] text-[var(--slateblue)]'/>
            </div>
                {errado == true ? <span className='text-[var(--red-color)] font-bold text-[0.9375rem]'>No results</span> : <span className='text-[var(--red-color)] font-bold text-[0.9375rem] hidden'>No results</span>}
            <Button clique={seguraNome}/>
            </div>
        </div>
    )
}

export default Search