import { styled } from "styled-components";
import logo from "/src/assets/images/logo.svg";

const ContainerLogo = styled.div`
    display: inline-block;
    max-width: 10.4rem;
    @media screen and (max-width: 960px) {
        display: none;
    }
`;

const ImagemLogo = styled.img`
    max-width: 100%;
`;

const Logo = () => {
    return (
        <ContainerLogo className="aparecer-logo">
            <ImagemLogo src={logo} alt="Logo Yago Pereira" />
        </ContainerLogo>
    );
}

export default Logo;
