import React from 'react'
import { useState } from 'react'
import User from './components/User'
import Search from './components/Search'

import moon from './assets/moon.svg'

function App() {

  return (
      <div id='container' className='bg-[var(--light-mode-slatewhite)] h-dvh flex flex-col w-full items-center justify-center'>
        <header className='w-[45.625rem]'>
          <div className='flex justify-between w-full'>
            <h1 className='text-[var(--light-mode-darkgray)] text-[1.625rem] font-bold'>devfinder</h1>
            <div className='flex items-center gap-[1rem] mb-[2.25rem]'>
              <span className='text-[var(--light-mode-gray)] text-[0.8125rem]'>DARK</span>
              <img src={moon} alt="Lua" />
            </div>
          </div>
          <Search/>
        </header>
        <User/>
      </div>
  )
}

export default App
