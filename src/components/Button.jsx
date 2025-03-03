
import React from 'react'
import { useState, useEffect } from 'react';


function Button({clique}){
    return(
        <button onClick={clique} className='bg-[var(--light-mode-blue)] text-[var(--light-mode-offwhite)] pt-[0.75rem] pb-[0.75rem] pr-[1.5rem] pl-[1.5rem] rounded-[0.5rem] cursor-[pointer]'>Search</button>
    );
}

export default Button