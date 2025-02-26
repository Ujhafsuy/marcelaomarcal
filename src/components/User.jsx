import React from 'react'
import { useState, useEffect } from 'react';

function User() {
    const [usuario, setUsuario] = useState(null);
    let nome = "Ujhafsuy"
    useEffect(() => {
        fetch(`https://api.github.com/users/${nome}`).then(response => response.json()).then(dados => setUsuario(dados))},
        [])
        console.log(usuario)

    if (!usuario) return <div>Carregando...</div>;

    return(
        <div>
            <main className='grid gap-4 grid-cols-2 bg-[#FEFEFE] rounded-[1rem]'>
                <img src={usuario.avatar_url} alt="" className='h-[7.3125rem] w-[7.3125rem] rounded-full'/>
                <div className='flex flex-col'>
                    <h1>{usuario.name == null ? "This profile has no name" : usuario.name }</h1>
                    <span>@{usuario.login}</span>
                    <p>{usuario.bio == null ? "This profile has no bio" : usuario.bio }</p>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Rpos</th>
                                <th scope="col">Followers</th>
                                <th scope="col">Following</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{usuario.public_repos}</td>
                                <td>{usuario.followers}</td>
                                <td>{usuario.following}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
);
}

export default User