import { useState } from 'react';
import EstilosGlobais from './EstilosGlobais';
import BotaoScrollTop from './components/BotaoScrollTop';
import Header from './components/Header';
import About from './pages/About';
import Formacao from './pages/Formacao';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import { styled } from 'styled-components';
import ContextoContato from './Contexto Contato';

const ConteudoPrincipal = styled.main`
    margin: 0;
    padding: 0;
`;

const App = () => {

    const [mostrarBotao, setMostrarBotao] = useState(false);
    const [animar, setAnimar] = useState(false);

    let currentDate = new Date(), currentYear = currentDate.getFullYear(), currentMonth = currentDate.getMonth() + 1,
        currentDay = currentDate.getDate();

    const calculaIdade = () => {
        if ((currentMonth === 11 && currentDay > 21) || (currentMonth > 11)) {
            return (currentYear - 1993);
        } else {
            return (currentYear - 1994);
        }
    };

    return (
        <ConteudoPrincipal>
            <EstilosGlobais />
            <Header />
            <About idade={calculaIdade} />
            <Formacao />
            <Projetos />
            <ContextoContato>
                <Contato />
            </ContextoContato>
            <Footer anoAtual={currentYear} />
            <BotaoScrollTop mostrarBotao={mostrarBotao} aoRolar={setMostrarBotao} animar={animar} aoAnimar={setAnimar} />
        </ConteudoPrincipal>
    );
}

export default App;
