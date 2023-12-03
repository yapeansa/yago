import { styled } from "styled-components";
import Container from "../Container";
import { SiLinktree } from "react-icons/si";

const Rodape = styled.footer`
    background-color: var(--preto);
    color: var(--branco);
    font-size: 1.3rem;
    padding: 0 0 4rem;
    text-align: center;
    a {
        margin-bottom: 1rem;
        display: inline-block;
    }

    @media screen and (max-width: 768px) {
        padding: 0 0 7rem;
        p {
            max-width: 80%;
            margin: 0 auto;
        }
    }
`;

function Footer() {

    let currentDate = new Date();

    let currentYear = currentDate.getFullYear();

    return (
        <Rodape>
            <Container>
                <a href="http://linktr.ee/yapeansa" target="_blank"><SiLinktree size={35} color="var(--cor-secundaria)" /></a>
                <p>&copy;{currentYear} - Desenvolvido por Yago Pereira.</p>
            </Container>
        </Rodape>
    );
}

export default Footer;
