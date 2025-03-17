import React from 'react'
import { useState, useEffect } from 'react'
import { User } from './components/User'
import Search from './components/Search'

import Moon from './assets/moon.svg?react'
import Sun from './assets/sun.svg?react'

function App() {

  const [clicado, setClicado] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [nomeUsuario, setNomeUsuario] = useState("octocat");
  const [visivel, setVisivel] = useState(false);

  const handleSearch = (nome) => {
    setNomeUsuario(nome);
    setClicado(true);
  };

  useEffect(() => {
    if(nomeUsuario || clicado){
        setClicado(false)
        fetch(`https://api.github.com/users/${ nomeUsuario }`)
        .then(response => response.json())
        .then(dados => {
          if (dados.message) {
            console.error("Erro da API:", dados.message);
            setVisivel(true);
          } else {
            setVisivel(false);
            setUsuario(dados);
          }
        })
        
    }
    },

    [clicado, nomeUsuario])



    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
      if ( theme == "dark" ) {
          document.documentElement.classList.add("dark")
      } else {
          document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
      }, [theme]);

    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };


  return (
      <div id='container' className='bg-[var(--slatewhite)] h-dvh flex flex-col w-full items-center justify-center'>
        <header className='w-[45.625rem]'>
          <div className='flex items-center justify-between w-full mb-[2.25rem]'>
            <h1 className='text-[var(--darkgray)] text-[1.625rem] font-bold'>devfinder</h1>
            <button className='flex items-center gap-[1rem] cursor-pointer botaocor' onClick={toggleTheme}>
              <span className='text-[var(--gray)] text-[0.8125rem] child'>{theme === "dark" ? "LIGHT" : "DARK"}</span>
              { theme === "dark" ? <Sun className="text-[var(--gray)] child" /> : <Moon className="text-[var(--gray)] child" /> }
            </button>
          </div>
          <Search onSearch={handleSearch} errado={visivel}/>
        </header>
        <User usuario={usuario}/>
      </div>
  )
}

export default App
