import { styled } from "styled-components";
import Container from "../Container";
import { SiLinktree } from "react-icons/si";

const Rodape = styled.footer`
    background-color: var(--terceira-cor);
    color: var(--branco);
    font-size: 1.3rem;
    padding: 0 0 4rem;
    text-align: center;
    line-height: 1.5;
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

const Footer = ({ anoAtual }) => {
    return (
        <Rodape>
            <Container>
                <a href="http://linktr.ee/yapeansa" target="_blank"><SiLinktree size={35} color="var(--quinta-cor)" /></a>
                <p>
                    &copy;{anoAtual} - Desenvolvido por&nbsp;
                    <span style={{ borderBottom: '2px solid var(--primeira-cor)', display: 'inline-block' }}>
                        Yago Pereira
                    </span>.
                </p>
            </Container>
        </Rodape>
    );
};

export default Footer;
