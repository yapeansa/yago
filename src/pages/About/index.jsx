import AboutInfo from "./AboutInfo";
import Container from "@/components/Container";
import Titulo from "@/components/Titulo";
import Secao from "@/components/ContainerSecao";
import me from "@/assets/images/me.jpg";

const About = () => {
    return (
        <Secao corDeFundo="var(--troisieme)" id="sobre">
            <Container>
                <Titulo
                    corDaBorda="linear-gradient(to right, transparent, var(--quatrieme-demie), transparent)"
                    corDoTexto="var(--deuxieme)"
                >
                    About Me
                </Titulo>
                <AboutInfo>
                    <div className="text-intro">
                        <p>
                            {/* Olá, meu nome é <strong className="estilizado">Yago</strong>. Sou matemático e desenvolvedor web <strong className="estilizado">Front-end</strong> buscando aplicar minhas habilidades e conhecimentos para elaborar soluções para diversos problemas relacionados a tecnologia. Autodidata e vindo de um ambiente que valoriza a pesquisa, prezo pela evolução constante dos meus conhecimentos e por compartilhar os mesmos com as pessoas ao meu redor. */}
                            Coming soon...
                        </p>
                    </div>
                    <div className="minha-foto">
                        <img src={me} alt="Foto de Yago Pereira" />
                    </div>
                </AboutInfo>
            </Container>
        </Secao>
    );
};

export default About;
