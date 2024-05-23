import EstilosGlobais from './EstilosGlobais';
import { useState } from 'react';
import ContextoContato from './Contexts/ContextoContato';
import ContextoBotao from './Contexts/ContextoBotao';
import ContextoProjetos from './Contexts/ContextoProjetos';
import BotaoScrollTop from './components/BotaoScrollTop';
import Header from './components/Header';
import About from './pages/About';
import Formacao from './pages/Formacao';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import EmailEnviado from './components/CaixaEmailEnviado';

const App = () => {

    const estadoInicial = { display: "none", animation: "" };

    const [enviado, setEnviado] = useState(estadoInicial);

    const currentDate = new Date();

    return (
        <main id="wrap">
            <EstilosGlobais />
            <Header />
            <About />
            <Formacao />
            <ContextoProjetos>
                <Projetos />
            </ContextoProjetos>
            <ContextoContato>
                <Contato enviado={enviado} setEnviado={setEnviado} />
            </ContextoContato>
            <Footer anoAtual={currentDate} />
            <ContextoBotao>
                <BotaoScrollTop />
            </ContextoBotao>
            <EmailEnviado enviado={enviado} />
        </main>
    );
};

export default App;
