import styled from "styled-components";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

export default function HomePage() {

    return (
        <Container>
            <img src={logo} alt="Agora é meu" />
            <h1>Agora é meu</h1>
            <Link to={'/signin'}>
                <p>Iniciar</p>
            </Link>       
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin-top: 60px;


    img{
        width: 400px;
        justify-content: center;
        align-items: center;
    }

    h1{
        width: 400px;
        font-size: 50px;
        font-family: 'Tilt Prism', cursive;
        color: #1a1727;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p{
        width: 400px;
        height: 40px;
        border-radius: 15px;
        background-color: #8c86ea;
        font-size: 20px;
        text-decoration: none;
        color: #1a1727;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        cursor: pointer;
    }
`