import EstilosGlobais from './EstilosGlobais';
import BotaoScrollTop from './components/BotaoScrollTop';
import Header from './components/Header';
import About from './pages/About';
import Formacao from './pages/Formacao';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import ContextoContato from './Contexts/ContextoContato';
import ContextoBotao from './Contexts/ContextoBotao';
import ContextoProjetos from './Contexts/ContextoProjetos';

const App = () => {

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
                <Contato />
            </ContextoContato>
            <Footer anoAtual={currentDate} />
            <ContextoBotao>
                <BotaoScrollTop />
            </ContextoBotao>
        </main>
    );
};

export default App;
