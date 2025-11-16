import type{ UserTypes } from "../types/types";

export default function UserCard({id,  name, email}: UserTypes){
    return(
        <div key={id}>
            <h2>
                {name}
            </h2>
            <p>
                {email}
            </p>
            <button>Excluir Usuário</button>
        </div>
    )
}