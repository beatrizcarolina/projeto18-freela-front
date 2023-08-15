import styled from "styled-components";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function TopBar() {

    return (
        <Bar>
            <Container>
                <h1>Agora é meu</h1>
                <UserContainer>
                    <h2>{userData && userData.name? userData.name : ""}</h2>
                    <button onClick={logout}><LogoutIcon /></button>
                </UserContainer>
            </Container>
        </Bar>
    );
}

export const Bar = styled.div`
    background-color: #8c86ea;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: #1a1727;
        font-family: 'Tilt Prism', cursive;
        font-size: 39px;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;

export const UserContainer = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
    gap: 20px;

    h2 {
        font-size: 18px;
        color: #1a1727;
        text-align: end;
        line-height: 25px;
        text-wrap: balance;
    }

    button {
        background-color: transparent;
        padding: 0;
        height: 25px;
        border: none;
    }
`;

export const LogoutIcon = styled(RiLogoutBoxRLine)`
    font-size: 25px;
    color: #1a1727;
`;