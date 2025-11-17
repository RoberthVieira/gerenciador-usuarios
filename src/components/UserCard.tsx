interface UserCardProps {
  id: number;
  name: string;
  email: string;
  onDelete: () => void;
}

export default function UserCard({id,  name, email, onDelete}: UserCardProps){
    return(
        <div key={id}>
            <h2>
                {name}
            </h2>
            <p>
                {email}
            </p>
            <button onClick={onDelete}>Excluir Usuário</button>
        </div>
    )
}