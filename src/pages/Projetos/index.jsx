import { useContext } from "react";
import { ProjetosGaleria } from "@/Contexts/ContextoProjetos";
import Container from "@/components/Container";
import Secao from "@/components/ContainerSecao";
import Titulo from "@/components/Titulo";
import ContainerProjetos from "./ContainerProjetos";
import Paragrafo from "./Paragrafo";
import MeusProjetos from "./MeusProjetos";

const Projetos = () => {

    const [projects, setProjects] = useContext(ProjetosGaleria);

    const rotacionar = (id) => {
        const alvo = projects.filter(projeto => projeto.id === id);
        alvo[0].classe = alvo[0].classe === "" ? "rotacionar" : "";
        setProjects([...projects]);
    };

    const tomDeCinza = (id) => {
        const alvo = projects.filter(projeto => projeto.id !== id);
        alvo.forEach(projeto => {
            projeto.escalaCinza = (projeto.escalaCinza.includes('gray')) ? '' : 'gray';
        });
        setProjects([...projects]);
    };

    return (
        <Secao corDeFundo="var(--noir)" id="projetos">
            <Container>
                <Titulo
                    corDaBorda="var(--quatrieme)"
                    corDoTexto="var(--troisieme)"
                >
                    Projetos
                </Titulo>
                <Paragrafo>Aqui estão alguns dos meus projetos.</Paragrafo>
                <ContainerProjetos $tamanho={`${projects.length * 336}px`}>
                    {projects.map(projeto =>
                        <MeusProjetos
                            key={Number(projeto.id)}
                            conteudoCard={{ projeto, rotacionar, tomDeCinza }}
                        />
                    )}
                </ContainerProjetos>
            </Container>
        </Secao>
    );
};

export default Projetos;
