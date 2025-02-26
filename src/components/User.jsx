import React from 'react'
import { useState, useEffect } from 'react';

function User() {
    const [usuario, setUsuario] = useState(null);
    let nome = "Brunomv06"
    useEffect(() => {
        fetch(`https://api.github.com/users/${nome}`).then(response => response.json()).then(dados => setUsuario(dados))},
        [])
        console.log(usuario)

    if (!usuario) return <div>Carregando...</div>;

    return(
        <div>
            <main>
                <img src={usuario.avatar_url} alt="" />
                <h1>{usuario.name}</h1>
                <span>@{usuario.login}</span>
                <p>{usuario.blog}</p>
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
            </main>
        </div>
);
}

export default User