import { useState, useEffect } from "react";
import api from "../services/api";

export interface User{
    id: number;
    name: string;
    email: string;
};

import UserCard from "../components/UserCard";

export default function Home(){
    const [users, setUsers] = useState<User[]>([]);
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
    },[]);

    async function deleteUsers(id :number) {
        try{
            await api.delete(`/users/${id}`)

            setUsers((prev) => prev.filter((usuario) => usuario.id !==  id))
            } catch (error) {
                console.error("Erro ao excluir:", error);
            }
    }

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
                            onDelete={() => deleteUsers(user.id)}
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