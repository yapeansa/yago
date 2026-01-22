import Cabecalho from "./Cabecalho"
import Logo from "@/components/Logo"
import Menu from "@/components/Menu"
import Intro from "@/pages/Intro"
import Social from "@/components/Social"
import Container from "@/components/Container"
import { useState } from "react"
import { CgClose } from "react-icons/cg"

const Header = () => {
    const [slide, setSlide] = useState(false)

    const acaoMenu = () => setSlide(!slide)

    return (
        <Container>
            <Cabecalho>
                <aside className={slide ? 'slide-menu' : ''}>
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
    )
}

export default Header
