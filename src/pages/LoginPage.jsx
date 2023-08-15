import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import logo from "../assets/logo.png"

export default function LoginPage() {

    return(
        <PageContainer>
            <img src={logo} alt="Agora é meu" />

            <LoginContainer>
                <LoginForm />
            </LoginContainer>

            <Link to={'/signup'}>
                <p>Não tem uma conta? Cadastre-se!</p>
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
		margin: 10vh calc(50vw - 91px) 5vh;
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
        margin-top: 50px;
        cursor: pointer;
    }
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`