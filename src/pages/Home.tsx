import { useState, useEffect } from "react";
import type{ UserTypes } from "../types/types";
import api from "../services/api";

import UserCard from "../components/userCard";

export default function Home(){
    const [users, setUsers] = useState<UserTypes[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarUser() {
            try{
                const resposta = await api.get("/users");
                setUsers(resposta.data)
            } catch(error) {
                setError("Erro ao buscar Usuário")
            } finally {
                setLoading(false)
            }
        }

        buscarUser();
    },[])

    if(loading) return <p>Carregando...</p>;
    if(error) return <p>{error}</p>

    return(
        <div>
            <h1>
                Lista de Usuários
            </h1>

            <ul>
                {users.map((user) => (
                    <li>
                        <UserCard
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    </li>
                ))}
            </ul>

            <div>
                <button>Criar Novo Usuário</button>
            </div>
        </div>
    )
}