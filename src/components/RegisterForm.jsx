import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";


export default function RegisterForm() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmpassword, setConfirmPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [cpf, setCPF] = React.useState("");
    const [telefone, setTelefone] = React.useState("");

    const navigate = useNavigate();

    function register(event) {


        event.preventDefault();

        const data = {
            email: email,
            name: name,
            password: password,
            confirmPassword : confirmpassword,
            cpf : cpf,
            phone : telefone
        };

        axios
            .post(`${import.meta.env.VITE_API_URL}/signup`, data)

            .then(() => {navigate("/")})

            .catch((error) => { console.log(error);
                alert("O cadastro falhou. Tente novamente!")});
    }

    return(
        <FormContainer>
            <form onSubmit={register}>
                <input 
                    type="text" 
                    placeholder="nome" 
                    required 
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                />

                <input 
                    type="email" 
                    placeholder="email" 
                    required 
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                />

                <input
                    type="tel"
                    placeholder="telefone"
                    maxLength={11}
                    required
                    value={telefone}
                    onChange={(event) => setTelefone(event.target.value)}
                />

                <input 
                    type="text"
                    placeholder="cpf (somente números)"
                    value={cpf}
                    required
                    onChange={(event) => setCPF(event.target.value)}
                />

                <input 
                    type="password" 
                    placeholder="senha" 
                    required
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                />

                <input 
                    type="password" 
                    placeholder="confirme a senha" 
                    required
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    value={confirmpassword}
                />

               <button type="submit">
                    {
                        "Continuar"
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
    height: 35px;
    font-size: 20px;
    line-height: 26px;
    color: #1a1727;
    margin-top: 10px;
    border-radius: 15px;
}
`