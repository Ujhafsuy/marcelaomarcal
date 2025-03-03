import React from 'react'
import { useState, useEffect } from 'react';

import point from '../assets/003-pin.svg'
import clips from '../assets/002-url.svg'
import twitter from '../assets/004-twitter.svg'
import predio from '../assets/001-office-building.svg'


function User({clicado, setClicado, nome}) {
    const [usuario, setUsuario] = useState(null);

    // useEffect(() => {
    //     setClicadoState(getClicado());
        
    //     console.log(clicado)
    //     const atualizarNome = () => {
    //         setNome(localStorage.getItem("Nome") || "");
    //     };
    //     window.addEventListener("storage", atualizarNome);
    //     return () => window.removeEventListener("storage", atualizarNome);
    // }, [clicado]);

    
    useEffect(() => {
        if(clicado || nome){
            setClicado(false)
            fetch(`https://api.github.com/users/${ nome }`).then(response => response.json()).then(dados => setUsuario(dados) )
        }
        },

        [clicado, nome])

    if (!usuario) return <div>Carregando...</div>;

    return(
        <div>
            <main className='grid gap-4 grid-cols-[1fr_4fr] bg-[var(--light-mode-offwhite)] rounded-[1rem] w-[45.625rem] max-w-[45.625rem] p-[3rem]'>
                <img src={usuario.avatar_url} alt="" className='h-[7.3125rem] w-[7.3125rem] rounded-full'/>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-[1.625rem] leading-[2.375rem]'>{usuario.name == null ? "This profile has no name" : usuario.name }</h1>
                    <h3 className='text-[var(--light-mode-blue)] font-normal text-[1rem] leading-[1.5rem] mb-[1.25rem]'>@{usuario.login}</h3>
                    <p>{usuario.bio == null ? "This profile has no bio" : usuario.bio }</p>

                    <div className='flex flex-row items-center justify-around h-[5.3125rem] bg-[var(--light-mode-slatewhite)] rounded-[0.5rem] mb-[2.4375rem] mt-[2rem]'>
                        <div>
                            <h4 className='text-[var(--light-mode-slateblue)] font-normal text-[0.8125rem] leading-[1.25rem]'>Repos</h4>
                            <h2 className='font-bold text-[1.375rem] leading-[2.0625rem]'>{usuario.public_repos}</h2>
                        </div>
                        <div>
                            <h4 className='text-[var(--light-mode-slateblue)] font-normal text-[0.8125rem] leading-[1.25rem]'>Followers</h4>
                            <h2 className='font-bold text-[1.375rem] leading-[2.0625rem]'>{usuario.followers}</h2>
                        </div>
                        <div>
                            <h4 className='text-[var(--light-mode-slateblue)] font-normal text-[0.8125rem] leading-[1.25rem]'>Following</h4>
                            <h2 className='font-bold text-[1.375rem] leading-[2.0625rem]'>{usuario.following}</h2>
                        </div>
                    </div>

                    <div className='flex flex-row w-full justify-around'>
                        <div className='flex flex-col'>
                            <div className='flex gap-[1.1875rem]'>
                                <img src={point} alt="point" className='pr-[6px]'/>
                                <p className='text-[var(--light-mode-slateblue)]'>{usuario.location == null ? "Not avaliable" : usuario.location}</p>
                            </div>
                            <div className='flex gap-[1.1875rem]'>
                                <img src={clips} alt="clips" />
                                <a className='text-[var(--light-mode-slateblue)] max-w[10.9375rem] w-[10.9375rem] hover:underline cursor-[pointer]' href={usuario.blog}>{usuario.blog == null ? "Not avaliable" : "Blog"}</a>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-[1.1875rem]'>
                                <img src={twitter} alt="twitter" />
                                <p className='text-[var(--light-mode-slateblue)]'>{usuario.twitter_username == null ? "Not avaliable" : usuario.twitter_username}</p>
                            </div>
                            <div className='flex gap-[1.1875rem]'>
                                <img src={predio} alt="predio" />
                                <p className='text-[var(--light-mode-slateblue)]'>{usuario.company == null ? "Not avaliable" : usuario.company}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
);
}

export default User