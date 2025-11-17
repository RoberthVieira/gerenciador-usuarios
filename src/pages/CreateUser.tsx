import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../services/api"; 
import { useNavigate } from "react-router-dom";


const schema = z.object({
    name: z.string().min(6, "O nome deve conter peloo menos 6 caracteres"),
    email: z.email()
});

type NewUserData = z.infer<typeof schema>



export default function CreateUser(){
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},

    } = useForm<NewUserData>({
        resolver: zodResolver(schema)
    })

    async function onSubmmit(data: NewUserData){
        await api.post("/users/", data);
        navigate("/")
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmmit)}>
                <div>
                    <input
                        type="text"
                        placeholder="Usuário"
                        {...register("name")}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        {...register("email")}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <button type="submit">Criar Usuário</button>
            </form>
        </div>
    )
}