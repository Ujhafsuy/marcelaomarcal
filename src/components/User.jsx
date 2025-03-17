import React from 'react'
import { useState, useEffect } from 'react';
import PointIcon from "../assets/003-pin.svg?react";
import ClipsIcon from "../assets/002-url.svg?react";
import TwitterIcon from "../assets/004-twitter.svg?react";
import PredioIcon from "../assets/001-office-building.svg?react";


export function User({usuario, tema}) {

    const formatDate = (isoString) => {
        const date = new Date(isoString)
        return `Joined ${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' })} ${date.getFullYear()}`;
    
    }

    if (!usuario) return <div>Carregando...</div>;

    return(
        <div>
            <main className='pc grid gap-4 grid-cols-[1fr_4fr] bg-[var(--offwhite)] rounded-[1rem] w-[45.625rem] max-w-[45.625rem] p-[3rem] shadow-(--shadow)'>
                <img src={usuario.avatar_url} alt="" className='h-[7.3125rem] w-[7.3125rem] rounded-full'/>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between user-data'>
                        <h1 className='font-bold text-[1.625rem] leading-[2.375rem] text-[var(--darkgray)]'>{usuario.name == null ? "This profile has no name" : usuario.name }</h1>
                        <p className='text-[var(--slateblue)] text-[0.9375rem] leading-[1.5625rem]'>{formatDate(usuario.created_at)}</p>
                    </div>
                    <h3 className='text-[var(--blue)] font-normal text-[1rem] leading-[1.5rem] mb-[1.25rem]'>@{usuario.login}</h3>
                    <p className='text-[var(--slateblue)] text-[0.9375rem] leading-[1.5625rem]'>{usuario.bio == null ? "This profile has no bio" : usuario.bio }</p>

                    <div className='flex flex-row items-center justify-around h-[5.3125rem] bg-[var(--slatewhite)] rounded-[0.5rem] mb-[2.4375rem] mt-[2rem] user-repo'>
                        <div>
                            <h4 className='text-[var(--slateblue)] font-normal text-[0.8125rem] leading-[1.25rem]'>Repos</h4>
                            <h2 className='font-bold text-[1.375rem] leading-[2.0625rem] text-[var(--darkgray)]'>{usuario.public_repos}</h2>
                        </div>
                        <div>
                            <h4 className='text-[var(--slateblue)] font-normal text-[0.8125rem] leading-[1.25rem]'>Followers</h4>
                            <h2 className='font-bold text-[1.375rem] leading-[2.0625rem] text-[var(--darkgray)]'>{usuario.followers}</h2>
                        </div>
                        <div>
                            <h4 className='text-[var(--slateblue)] font-normal text-[0.8125rem] leading-[1.25rem]'>Following</h4>
                            <h2 className='font-bold text-[1.375rem] leading-[2.0625rem] text-[var(--darkgray)]'>{usuario.following}</h2>
                        </div>
                    </div>

                    <div className='flex flex-row w-full justify-around dados-add'>
                        <div className='flex flex-col gap-[1.1875rem]'>
                            { usuario.location == null ? <div className='flex gap-[1.1875rem]'><PointIcon className="text-[var(--slateblue)] nulo" /><p className='text-[var(--slateblue)] point nulo'>Not Avaliable</p> </div> : <div className='flex gap-[1.1875rem]'><PointIcon className="text-[var(--slateblue)]" /><p className='text-[var(--slateblue)] point'>{usuario.location}</p> </div> }
                            <div className='flex gap-[0.875rem]'>
                            { usuario.blog == "" ? <div className='flex gap-[0.875rem]'><ClipsIcon className="text-[var(--slateblue)] nulo" /><a className='text-[var(--slateblue)] max-w[10.9375rem] w-[10.9375rem] hover:underline cursor-[pointer] nulo' href={usuario.blog}>Not avaliable</a> </div> : <div className='flex gap-[0.875rem]'><ClipsIcon className="text-[var(--slateblue)]" /><a className='text-[var(--slateblue)] max-w[10.9375rem] w-[10.9375rem] hover:underline cursor-[pointer]' href={usuario.blog}>Blog</a> </div> }
                            </div>
                        </div>
                        <div className='flex flex-col gap-[1.1875rem]'>
                            <div className='flex gap-[1.1875rem]'>
                            { usuario.twitter_username == null ? <div className='flex gap-[1.1875rem]'><TwitterIcon className="text-[var(--slateblue)] nulo" /><p className='text-[var(--slateblue)] point nulo'>Not Avaliable</p> </div> : <div className='flex gap-[1.1875rem]'><TwitterIcon className="text-[var(--slateblue)]" /><p className='text-[var(--slateblue)] point'>{usuario.twitter_username}</p> </div> }
                            </div>
                            <div className='flex gap-[1.1875rem]'>
                            { usuario.company == null ? <div className='flex gap-[1.1875rem]'><PredioIcon className="text-[var(--slateblue)] nulo" /><p className='text-[var(--slateblue)] point nulo'>Not Avaliable</p> </div> : <div className='flex gap-[1.1875rem]'><PredioIcon className="text-[var(--slateblue)]" /><p className='text-[var(--slateblue)] point'>{usuario.company}</p> </div> }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <main className='mobile flex gap-4 grid bg-[var(--offwhite)] rounded-[1rem] w-[45.625rem] max-w-[45.625rem] p-[3rem] shadow-(--shadow)'>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-[1rem] user-data mb-[2rem]'>
                        <img src={usuario.avatar_url} alt="" className='h-[7.3125rem] w-[7.3125rem] rounded-full avatar'/>
                        
                        <div>
                            <h1 className='font-bold text-[1.625rem] leading-[2.375rem] text-[var(--darkgray)]'>{usuario.name == null ? "This profile has no name" : usuario.name }</h1>
                            <h3 className='text-[var(--blue)] font-normal text-[1rem] leading-[1.5rem] mb-[1.25rem]'>@{usuario.login}</h3>
                            <p className='text-[var(--slateblue)] text-[0.9375rem] leading-[1.5625rem]'>{formatDate(usuario.created_at)}</p>
                        </div>
                    </div>
                    <p className='text-[var(--slateblue)] text-[0.9375rem] leading-[1.5625rem]'>{usuario.bio == null ? "This profile has no bio" : usuario.bio }</p>

                    <div className='flex flex-row items-center justify-around h-[5.3125rem] bg-[var(--slatewhite)] rounded-[0.5rem] mb-[2.4375rem] mt-[2rem] user-repo'>
                        <div>
                            <h4 className='text-[var(--slateblue)] font-normal text-[0.8125rem] leading-[1.25rem]'>Repos</h4>
                            <h2 className='font-bold text-[1.375rem] leading-[2.0625rem] text-[var(--darkgray)]'>{usuario.public_repos}</h2>
                        </div>
                        <div>
                            <h4 className='text-[var(--slateblue)] font-normal text-[0.8125rem] leading-[1.25rem]'>Followers</h4>
                            <h2 className='font-bold text-[1.375rem] leading-[2.0625rem] text-[var(--darkgray)]'>{usuario.followers}</h2>
                        </div>
                        <div>
                            <h4 className='text-[var(--slateblue)] font-normal text-[0.8125rem] leading-[1.25rem]'>Following</h4>
                            <h2 className='font-bold text-[1.375rem] leading-[2.0625rem] text-[var(--darkgray)]'>{usuario.following}</h2>
                        </div>
                    </div>

                    <div className='flex flex-row w-full justify-around dados-add'>
                        <div className='flex flex-col gap-[1.1875rem]'>
                            { usuario.location == null ? <div className='flex gap-[1.1875rem]'><PointIcon className="text-[var(--slateblue)] nulo" /><p className='text-[var(--slateblue)] point nulo'>Not Avaliable</p> </div> : <div className='flex gap-[1.1875rem]'><PointIcon className="text-[var(--slateblue)]" /><p className='text-[var(--slateblue)] point'>{usuario.location}</p> </div> }
                            <div className='flex gap-[0.875rem]'>
                            { usuario.blog == "" ? <div className='flex gap-[0.875rem]'><ClipsIcon className="text-[var(--slateblue)] nulo" /><a className='text-[var(--slateblue)] max-w[10.9375rem] w-[10.9375rem] hover:underline cursor-[pointer] nulo' href={usuario.blog}>Not avaliable</a> </div> : <div className='flex gap-[0.875rem]'><ClipsIcon className="text-[var(--slateblue)]" /><a className='text-[var(--slateblue)] max-w[10.9375rem] w-[10.9375rem] hover:underline cursor-[pointer]' href={usuario.blog}>Blog</a> </div> }
                            </div>
                        </div>
                        <div className='flex flex-col gap-[1.1875rem]'>
                            <div className='flex gap-[1.1875rem]'>
                            { usuario.twitter_username == null ? <div className='flex gap-[1.1875rem]'><TwitterIcon className="text-[var(--slateblue)] nulo" /><p className='text-[var(--slateblue)] point nulo'>Not Avaliable</p> </div> : <div className='flex gap-[1.1875rem]'><TwitterIcon className="text-[var(--slateblue)]" /><p className='text-[var(--slateblue)] point'>{usuario.twitter_username}</p> </div> }
                            </div>
                            <div className='flex gap-[1.1875rem]'>
                            { usuario.company == null ? <div className='flex gap-[1.1875rem]'><PredioIcon className="text-[var(--slateblue)] nulo" /><p className='text-[var(--slateblue)] point nulo'>Not Avaliable</p> </div> : <div className='flex gap-[1.1875rem]'><PredioIcon className="text-[var(--slateblue)]" /><p className='text-[var(--slateblue)] point'>{usuario.company}</p> </div> }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
);
}

// export function EncontraUser({clicado, setClicado, nome, errado}){
//     const [usuario, setUsuario] = useState(nome);
    
//     useEffect(() => {
//         if(clicado || nome){
//             setClicado(false)
//             fetch(`https://api.github.com/users/${ nome }`)
//             .then(response => response.json())
//             .then(dados => setUsuario(dados) )
//         }
//         },

//         [clicado, nome])

//     return ( 
//     <div className='flex'> 
//         { usuario.status == 404 ? errado = <p className='erra'>true</p> : errado = <p>false</p> } 
//     </div>
//     );
// }