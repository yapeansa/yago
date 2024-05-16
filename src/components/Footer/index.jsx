import Rodape from "./EstilosRodape";
import Container from "@/components/Container";
import { SiLinktree } from "react-icons/si";

const Footer = ({ anoAtual }) => {
    return (
        <Rodape>
            <Container>
                <a href="http://linktr.ee/yapeansa" target="_blank"><SiLinktree size={35} color="var(--cor-primaria)" /></a>
                <p>
                    &copy;{anoAtual.getFullYear()} - Desenvolvido por&nbsp;
                    <span style={{ borderBottom: '2px dashed var(--cor-primaria)', display: 'inline-block' }}>
                        Yago Pereira
                    </span>.
                </p>
            </Container>
        </Rodape>
    );
};

export default Footer;
