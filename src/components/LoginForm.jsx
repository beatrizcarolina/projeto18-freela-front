import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();

        const data = {
            email: email,
            password: senha
        };

        axios
            .post(`${import.meta.env.VITE_API_URL}/signin`, data)

            .then((response) => {navigate("/products"); console.log("Sucesso");})

            .catch((error) => { console.log(error);
                alert("Login falhou. Tente novamente!")});
    }

    return(
        <FormContainer>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="email" 
                    required 
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                />

                <input 
                    type="password" 
                    placeholder="senha" 
                    required
                    onChange={(event) => setSenha(event.target.value)}
                    value={senha}
                />

               <button type="submit">
                {
                    "Entrar"
                }
               </button>

            </form>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-itens: center;
    align-itens: center;

    form{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    input{
        width: 300px; 
        height: 35px;
        font-size: 20px;
        margin-top: 5px;      
    }

    button{
        width: 300px;
        height: 45px;
        font-size: 21px;
        line-height: 26px;
        color: #1a1727;
        margin-top: 10px;
    }
`