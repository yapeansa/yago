import { styled } from "styled-components"
import logo from "/src/images/logo.svg"

const ImagemLogo = styled.img`
    max-width: 10.6rem;
`

function Logo() {
    return (
        <>
            <ImagemLogo src={logo} alt="Logo Yago Pereira" />
        </>
    )
}

export default Logo
