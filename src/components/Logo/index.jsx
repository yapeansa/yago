import { styled } from "styled-components"

const ImagemLogo = styled.img`
    max-width: 10.6rem;
`

function Logo() {
    return (
        <>
            <ImagemLogo src="/src/assets/images/logo.svg" alt="Logo Yago Pereira" />
        </>
    )
}

export default Logo
