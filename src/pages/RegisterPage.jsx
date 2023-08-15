import styled from "styled-components";
import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm"

export default function RegisterPage() {

    return(
        <PageContainer>
            <img src={logo} alt="Agora é meu" />

            <RegisterContainer>
                <RegisterForm />
            </RegisterContainer>

            <Link to={'/signin'}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>

        </PageContainer>
    )
}

const PageContainer = styled.div`

width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

img {
    margin-top: 10px;
    width: 300px;
    display: flex;
    justify-content: center;
}

p{
    width: 300px;
    height: 45px;
    border-radius: 15px;
    background-color: #8c86ea;
    font-family: 'Dosis', sans-serif;
    font-size: 15px;
    text-align: center;
    text-decoration-line: underline;
    color: #1a1727;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    cursor: pointer;
}
`

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`