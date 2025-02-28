import React from 'react'
import { useState, useEffect } from 'react';

import point from '../assets/003-pin.svg'
import clips from '../assets/002-url.svg'
import twitter from '../assets/004-twitter.svg'
import predio from '../assets/001-office-building.svg'

function User() {
    const [usuario, setUsuario] = useState(null);
    let nome = "Ctorum"
    useEffect(() => {
        fetch(`https://api.github.com/users/${nome}`).then(response => response.json()).then(dados => setUsuario(dados))},
        [])
        console.log(usuario)

    if (!usuario) return <div>Carregando...</div>;

    return(
        <div>
            <main className='grid gap-4 grid-cols-[1fr_4fr] bg-[#FEFEFE] rounded-[1rem] w-[45.625rem] max-w-[45.625rem] p-[3rem]'>
                <img src={usuario.avatar_url} alt="" className='h-[7.3125rem] w-[7.3125rem] rounded-full'/>
                <div className='flex flex-col'>
                    <h1>{usuario.name == null ? "This profile has no name" : usuario.name }</h1>
                    <span>@{usuario.login}</span>
                    <p>{usuario.bio == null ? "This profile has no bio" : usuario.bio }</p>
                    <table className='flex flex-col h-[5.3125rem] bg-[#F6F8FF]  pb-[0.9375rem] rounded-[0.5rem] mb-[2.4375rem] mt-[2rem]'>
                        <thead className='h-[10rem]'>
                            <tr className='flex justify-around w-full pt-[0.9375rem] pb-[0.9375rem] pl-[2rem] pr-[2rem]'>
                                <th scope="col">Rpos</th>
                                <th scope="col">Followers</th>
                                <th scope="col">Following</th>
                            </tr>
                        </thead>
                        <tbody className=' w-full'>
                            <tr className='bg-[purple] w-full flex justify-around pl-[2rem] pr-[2rem]'>
                                <td className='w-[1.5rem]'>{usuario.public_repos}</td>
                                <td className='text-left'>{usuario.followers}</td>
                                <td className='text-left'>{usuario.following}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='grid grid-rows-2'>
                        <div className='bg-[red] flex'>
                            <div className='flex'>
                                <img src={point} alt="point" />
                                <p>{usuario.location == null ? "Not avaliable" : usuario.location}</p>
                            </div>
                            <div className='flex'>
                                <img src={clips} alt="clips" />
                                <p>{usuario.blog == null ? "Not avaliable" : usuario.blog}</p>
                            </div>
                        </div>
                        <div className='bg-[blue] flex'>
                            <div className='flex'>
                                <img src={twitter} alt="twitter" />
                                <p>{usuario.twitter_username == null ? "Not avaliable" : usuario.twitter_username}</p>
                            </div>
                            <div className='flex'>
                                <img src={predio} alt="predio" />
                                <p>{usuario.company == null ? "Not avaliable" : usuario.company}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
);
}

export default User