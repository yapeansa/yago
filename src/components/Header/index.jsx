import Cabecalho from "./Cabecalho";
import Logo from "../Logo";
import Menu from "../Menu";
import Intro from "../../pages/Intro";
import Social from "../Social";
import Container from "../Container";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

const Header = () => {
    const [slide, setSlide] = useState(false);

    function acaoMenu() {
        setSlide(!slide);
    }

    return (
        <Container>
            <Cabecalho>
                <aside className={`${slide ? 'slide-menu' : ''}`}>
                    <CgClose className="close-menu" size={70} onClick={acaoMenu} />
                    <Logo />
                    <Menu />
                    <Social />
                </aside>
                <div className="introducao">
                    <Intro acaoMenu={acaoMenu} />
                </div>
            </Cabecalho>
        </Container>
    );
};

export default Header;
