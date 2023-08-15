import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
    const location = useLocation();

    return (
        <MenuBar>
            <MenuContainer>
                <StyledLink to="/services" $isActive={location.pathname === '/services'}>Produtos</StyledLink>
                <StyledLink to="/my-services" $isActive={location.pathname === '/my-services'}>Meus Produtos</StyledLink>
            </MenuContainer>
        </MenuBar>
    );
}

const MenuBar = styled.div`
    background-color: #8c86ea;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 1;
`;

const MenuContainer = styled.div`
    width: 400px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    gap: 30px;
`;

const StyledLink = styled(Link)`
    width: 160px;
    padding: 15px 5px;
    font-size: 18px;
    color: #ffffff;
    text-decoration: none;
    background-color: ${props => (props.$isActive ? "#857cff" : "#1a1727")};
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    transform: translateY(${props => (props.$isActive ? "-40px" : "-20px")});
    
    &:hover {
        background-color: ${props => (props.$isActive ? "#1a1727" : "#fdc635")};
        color: ${props => (props.$isActive ? "#ffffff" : "#1a1727")};
    }
`;