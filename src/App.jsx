import { useState } from 'react'
import EstilosGlobais from './EstilosGlobais'
import BotaoScrollTop from './components/BotaoScrollTop'
import Header from './components/Header'
import About from './pages/About'
import Formacao from './pages/Formacao'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import Footer from './components/Footer'

function App() {

    const [mostrarBotao, setMostrarBotao] = useState(false)
    const [animar, setAnimar] = useState(false)

    const [nome, setNome] = useState('Digite o seu nome aqui...')
    const [email, setEmail] = useState('Digite o seu e-mail aqui...')
    const [mensagem, setMensagem] = useState('Digite a sua mensagem aqui...')

    const [facebook, setFacebook] = useState('var(--branco)')
    const [twitter, setTwitter] = useState('var(--branco)')
    const [github, setGithub] = useState('var(--branco)')
    const [linkedin, setLinkedin] = useState('var(--branco)')
    const [instagram, setInstagram] = useState('var(--branco)')

    return (
        <main>
            <EstilosGlobais />
            <Header
                facebook={facebook}
                twitter={twitter}
                github={github}
                linkedin={linkedin}
                instagram={instagram}
                setFacebook={setFacebook}
                setTwitter={setTwitter}
                setGithub={setGithub}
                setLinkedin={setLinkedin}
                setInstagram={setInstagram}
            />
            <About />
            <Formacao />
            <Projetos />
            <Contato nome={nome} email={email} mensagem={mensagem} setNome={setNome} setEmail={setEmail} setMensagem={setMensagem} />
            <Footer />
            <BotaoScrollTop mostrarBotao={mostrarBotao} aoRolar={setMostrarBotao} animar={animar} aoAnimar={setAnimar} />
        </main>
    )
}

export default App
