import { styled } from "styled-components"
import Logo from "../Logo"
import Menu from "../Menu"
import Intro from "../../pages/Intro"
import Social from "../Social"
import bg from "/src/images/bg.jpg"

const Cabecalho = styled.header`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background: url(${bg}) center / cover no-repeat fixed;
    aside {
        flex: 50%;
        background: rgba(0, 0, 0, .8);
        display: flex;
        gap: 5em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
    }
    .introducao {
        flex: 50%;
        color: var(--branco);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
    }
`

function Header() {
    return (
        <>
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
        </>
    )
}

export default Header
