import { styled } from "styled-components";
import Social from "../../components/Social";
import Logo from "../../components/Logo";
import { TbMenu2 } from "react-icons/tb";

const SecaoIntro = styled.section`
    font-family: var(--fonte-primaria);
    font-weight: 100;
    p {
        max-width: 80%;
        font-size: 3.4rem;
        margin: 0 0 0 auto;
        line-height: 1.8;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-decoration-color: var(--branco);
        text-align: right;
        .destaque {
            color: var(--ouro-escuro);
            font-weight: 700;
        }
    }
    .drop-menu { display: none; }
    .aparecer-logo, .aparecer-social { display: none; }

    @media screen and (min-width: 961px) and (max-width: 1440px) {
        p {
            max-width: 90%;
        }
    }

    @media screen and (max-width: 960px) {
        font-size: 2.5rem;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
        .aparecer-logo { display: inline-block; }
        p {
            text-align: center;
            margin: 0 auto;
            max-width: 80%;
            font-size: 2rem;
            text-decoration-thickness: 2px;
        }
        .aparecer-social {
            display: flex;
        }
        .drop-menu {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            cursor: pointer;
            display: block;
            padding: .5rem;
            border: 2px solid var(--terciaria);
        }
    }
`;

const Intro = ({ acaoMenu }) => {
    return (
        <SecaoIntro>
            <TbMenu2 onClick={acaoMenu} className="drop-menu" size={60} color="var(--branco)" />
            <Logo />
            <p>
                Olá, mundo! Eu sou um <span className="destaque">desenvolvedor</span> web Front-end especializado no framework <span className="destaque">React</span>.
            </p>
            <Social />
        </SecaoIntro>
    );
};

export default Intro;
