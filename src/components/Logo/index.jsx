import { styled } from "styled-components";
import logo from "/src/assets/images/logo.svg";

const ContainerLogo = styled.div`
    display: inline-block;
    max-width: 10.4rem;
`;

const ImagemLogo = styled.img`
    max-width: 100%;
`;

const Logo = () => {
    return (
        <ContainerLogo>
            <ImagemLogo src={logo} alt="Logo Yago Pereira" />
        </ContainerLogo>
    );
}

export default Logo;
