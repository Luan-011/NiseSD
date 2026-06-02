import axios from "axios";
import { PostLoginEndpoint } from "./api.endpoints";

export const loginApiCall = async(
    senha: string,
    email: string
) =>{
    console.log(senha+" "+email)
    const variavel = axios.post(PostLoginEndpoint,
        {
            email: email,
            senha: senha
        }
    ).then((response) =>{
        console.log(response.data)
        return response.data
    })
    .catch((error)=>{
        console.log(error)
    })

    return variavel
}