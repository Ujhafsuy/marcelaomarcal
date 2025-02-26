import React from 'react'
import { useState } from 'react'
import User from './components/User'
import Search from './components/Search'

import moon from './assets/moon.svg'

function App() {

  return (
      <div>
        <header>
          <div>
            <h1 className='text-red-300'>devfinder</h1>
            <div>
              <span>DARK</span>
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
