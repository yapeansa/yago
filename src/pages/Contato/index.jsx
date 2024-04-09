import Secao from "@/components/ContainerSecao";
import Titulo from "@/components/Titulo";
import ContainerContato from "./ContainerContato";
import Container from "@/components/Container";
import { SiGmail } from "react-icons/si";
import { ContextoContatoCriado } from "@/Contexts/ContextoContato";
import { useContext } from "react";

const Contato = () => {

    const [placeHolders, setPlaceHolders] = useContext(ContextoContatoCriado);

    const aoInteragir = (campo) => {
        switch (campo) {
            case 'nome':
                placeHolders.nome = placeHolders.nome !== "" ? "" : "Digite o seu nome aqui...";
                setPlaceHolders({ ...placeHolders });
                break;
            case 'email':
                placeHolders.email = placeHolders.email !== "" ? "" : "Digite o seu e-mail aqui...";
                setPlaceHolders({ ...placeHolders });
                break;
            default:
                placeHolders.mensagem = placeHolders.mensagem !== "" ? "" : "Digite a sua mensagem aqui...";
                setPlaceHolders({ ...placeHolders });
                break;
        }
    };

    return (
        <div id="contato">
            <Secao corDeFundo="var(--terceira-cor)">
                <Container>
                    <Titulo corDaBorda="var(--quinta-cor)" corDoTexto="var(--branco)">Contato</Titulo>
                    <ContainerContato>
                        <p>Pronto para trazer vida ao seu projeto ou para me incluir no seu time? Você pode me enviar um e-mail através do seguinte endereço:</p>
                        <a href="mailto:yago.pereira@estudante.ufjf.br">
                            <SiGmail size={30} color="var(--quinta-cor)" /> yago.pereira@estudante.ufjf.br
                        </a>
                        <p>Ou preencha o formulário abaixo com seus dados e sua mensagem.</p>
                        <form method="post" action="https://formspree.io/f/xnqlkqnk">
                            <div className="engloba_texto_email">
                                <input
                                    type="text"
                                    name="nome"
                                    onFocus={() => aoInteragir('nome')}
                                    onBlur={() => aoInteragir('nome')}
                                    placeholder={placeHolders.nome}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    onFocus={() => aoInteragir('email')}
                                    onBlur={() => aoInteragir('email')}
                                    placeholder={placeHolders.email}
                                    required
                                />
                            </div>
                            <label>
                                <textarea
                                    name="mensagem"
                                    rows="5"
                                    onFocus={() => aoInteragir()}
                                    onBlur={() => aoInteragir()}
                                    placeholder={placeHolders.mensagem}
                                    required></textarea>
                            </label>
                            <div className="acoes__formulario">
                                <button type="reset">Limpar</button>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </ContainerContato>
                </Container>
            </Secao>
        </div>
    );
};

export default Contato;
