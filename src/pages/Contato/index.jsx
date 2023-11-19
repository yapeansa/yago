import Secao from "../../components/ContainerSecao"
import Titulo from "../../components/Titulo"
import ContainerContato from "./ContainerContato"
import Container from "../../components/Container"
import { useState } from "react"

function Contato({ nome, email, mensagem, setNome, setEmail, setMensagem }) {

    const [textoEmail, setTextoEmail] = useState('@yapeansa')

    function mudarTexto() {
        setTextoEmail('yago.pereira@estudante.ufjf.br')
    }

    function retornarTexto() {
        setTextoEmail('@yapeansa')
    }

    function aoInteragir(campo) {
        switch (campo) {
            case 'nome':
                if (nome !== '') {
                    setNome('')
                } else {
                    setNome('Digite o seu nome aqui...')
                }
                break
            case 'email':
                if (email !== '') {
                    setEmail('')
                } else {
                    setEmail('Digite o seu e-mail aqui...')
                }
                break
            default:
                if (mensagem !== '') {
                    setMensagem('')
                } else {
                    setMensagem('Digite a sua mensagem aqui...')
                }
                break
        }
    }

    return (
        <div id="contato">
            <Secao corDeFundo="var(--preto-secundario)">
                <Container>
                    <Titulo corDaBorda="var(--cor-secundaria)" corDoTexto="var(--branco)">Contato</Titulo>
                    <ContainerContato>
                        <p>Pronto para trazer vida ao seu projeto ou para me incluir no seu time? Envie-me um e-mail clicando no link abaixo:</p>
                        <a
                            href="mailto:yago.pereira@estudante.ufjf.br"
                            onMouseOver={mudarTexto}
                            onMouseOut={retornarTexto}>
                            {textoEmail}
                        </a>
                        <p>Ou preencha o formulário abaixo com seus dados e sua mensagem.</p>
                        <form method="post" action="https://formspree.io/f/xnqlkqnk">
                            <label>
                                <input
                                    type="text"
                                    name="nome"
                                    onFocus={() => aoInteragir('nome')}
                                    onBlur={() => aoInteragir('nome')}
                                    placeholder={nome}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type="email"
                                    name="email"
                                    onFocus={() => aoInteragir('email')}
                                    onBlur={() => aoInteragir('email')}
                                    placeholder={email}
                                    required
                                />
                            </label>
                            <label>
                                <textarea
                                    name="mensagem"
                                    rows="6"
                                    onFocus={() => aoInteragir()}
                                    onBlur={() => aoInteragir()}
                                    placeholder={mensagem}
                                    required></textarea>
                            </label>
                            <div>
                                <input type="reset" value="Limpar" />
                                <input type="submit" value="Enviar" />
                            </div>
                        </form>
                    </ContainerContato>
                </Container>
            </Secao>
        </div>
    )
}

export default Contato
