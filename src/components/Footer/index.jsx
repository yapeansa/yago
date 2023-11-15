import { styled } from "styled-components"
import Container from "../Container"
import { SiLinktree } from "react-icons/si";

const Rodape = styled.footer`
    background-color: var(--preto-secundario);
    color: var(--branco);
    font-size: 1.3rem;
    padding: 0 0 4rem;
    text-align: center;
    a {
        margin-bottom: 1rem;
        display: inline-block;
    }
`

function Footer() {
    return (
        <Rodape>
            <Container>
                <a href="http://linktr.ee/yapeansa" target="_blank"><SiLinktree size={35} color="var(--cor-secundaria)" /></a>
                <p>&copy;2023 - Desenvolvido por Yago Pereira.</p>
            </Container>
        </Rodape>
    )
}

export default Footer
