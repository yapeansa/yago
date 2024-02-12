import { styled } from "styled-components";
import logo from "/src/assets/images/logo.svg";

const LinkLogo = styled.a`
    display: inline-block;
    max-width: 10.4rem;
`;

const ImagemLogo = styled.img`
    max-width: 100%;
`;

const Logo = () => {
    return (
        <LinkLogo href="index.html">
            <ImagemLogo src={logo} alt="Logo Yago Pereira" />
        </LinkLogo>
    );
}

export default Logo;
