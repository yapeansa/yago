import { useState } from 'react';
import EstilosGlobais from './EstilosGlobais';
import BotaoScrollTop from './components/BotaoScrollTop';
import Header from './components/Header';
import About from './pages/About';
import Formacao from './pages/Formacao';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Footer from './components/Footer';

const App = () => {

    const [mostrarBotao, setMostrarBotao] = useState(false);
    const [animar, setAnimar] = useState(false);

    const [nome, setNome] = useState('Digite o seu nome aqui...');
    const [email, setEmail] = useState('Digite o seu e-mail aqui...');
    const [mensagem, setMensagem] = useState('Digite a sua mensagem aqui...');

    let currentDate = new Date(), currentYear = currentDate.getFullYear(), currentMonth = currentDate.getMonth() + 1,
        currentDay = currentDate.getDate();

    const calculaIdade = () => {
        return (
            ((currentMonth === 11 && currentDay > 21) || (currentMonth > 11)) ?
                (currentYear - 1993) :
                ((currentYear - 1993) - 1)
        );
    }

    return (
        <main>
            <EstilosGlobais />
            <Header />
            <About idade={calculaIdade} />
            <Formacao />
            <Projetos />
            <Contato
                nome={nome} setNome={setNome}
                email={email} setEmail={setEmail}
                mensagem={mensagem} setMensagem={setMensagem}
            />
            <Footer />
            <BotaoScrollTop mostrarBotao={mostrarBotao} aoRolar={setMostrarBotao} animar={animar} aoAnimar={setAnimar} />
        </main>
    );
}

export default App;
