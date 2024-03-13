import AboutInfo from "./AboutInfo";
import Container from "../../components/Container";
import Titulo from "../../components/Titulo";
import Secao from "../../components/ContainerSecao";
import me from "/src/assets/images/me.jpg";

const About = ({ idade }) => {
    return (
        <div id="sobre">
            <Secao corDeFundo="var(--branco)">
                <Container>
                    <Titulo corDaBorda="var(--terciaria)" corDoTexto="var(--preto)">Quem sou eu</Titulo>
                    <AboutInfo>
                        <p>Olá, meu nome é <span className="estilizado">Yago Pereira</span> e eu tenho {idade()} anos. Em 2021, adquiri o título de bacharel em Matemática pela <a href="http://ufjf.br" title="Universidade Federal de Juiz de Fora" target="_blank">UFJF</a> e atualmente sou discente do curso de Mestrado Acadêmico em Matemática nesta mesma instituição. Sou um profissional que possui um fascínio por tecnologia de longa data. Autodidata e com grande disposição em aprender novas tecnologias, me aperfeiçoei no desenvolvimento front-end na intituição de ensino <a href="https://www.alura.com.br" target="_blank">Alura</a> onde pude me aprofundar na linguagem <span className="estilizado">Javascript</span> e mergulhar no framework <span className="estilizado">React</span>.</p>
                        <img src={me} alt="Foto de Yago Pereira" />
                    </AboutInfo>
                </Container>
            </Secao>
        </div>
    );
};

export default About;
