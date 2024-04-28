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
        alvo.forEach(objeto => {
            objeto.classe = objeto.classe === "" ? "animacao" : "";
        });
        setProjects([...projects]);
    };

    return (
        <div id="projetos">
            <Secao corDeFundo="var(--branco)">
                <Container>
                    <Titulo corDaBorda="var(--primeira-cor)" corDoTexto="var(--segunda-cor)">Projetos</Titulo>
                    <Paragrafo>Aqui estão alguns dos meus projetos.</Paragrafo>
                    <ContainerProjetos $tamanho={`${projects.length * 336}px`}>
                        {projects.map(projeto =>
                            <MeusProjetos key={Number(projeto.id)} conteudoCard={{projeto, rotacionar}} />
                        )}
                    </ContainerProjetos>
                </Container>
            </Secao>
        </div>
    );
};

export default Projetos;
