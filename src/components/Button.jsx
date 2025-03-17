
import React from 'react'
import { useState, useEffect } from 'react';


function Button({clique}){
    return(
        <button onClick={clique} className='bg-[var(--blue)] hover:bg-[#60ABFF] font-bold text-[1rem] text-[var(--offwhite)] pt-[0.75rem] pb-[0.75rem] pr-[1.5rem] pl-[1.5rem] rounded-[0.5rem] cursor-[pointer] botao'>Search</button>
    );
}

export default Button