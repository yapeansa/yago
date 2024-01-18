import Cabecalho from "./Cabecalho";
import Logo from "../Logo";
import Menu from "../Menu";
import Intro from "../../pages/Intro";
import Social from "../Social";
import Container from "../Container";

const Header = () => {
    return (
        <Container>
            <Cabecalho>
                <aside>
                    <Logo />
                    <Menu />
                    <Social />
                </aside>
                <div className="introducao">
                    <Intro />
                </div>
            </Cabecalho>
        </Container>
    );
};

export default Header;
