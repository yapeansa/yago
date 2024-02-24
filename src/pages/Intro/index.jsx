import { styled } from "styled-components";

const SecaoIntro = styled.section`
    font-family: var(--fonte-primaria);
    font-weight: 100;
    font-size: 3.4rem;
    p {
        max-width: 80%;
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

    @media screen and (min-width: 961px) and (max-width: 1440px) {
        p {
            max-width: 90%;
        }
    }

    @media screen and (max-width: 960px) {
        font-size: 2.5rem;
        p {
            text-align: left;
            margin: 0 auto;
            max-width: 80%;
        }
    }
`;

const Intro = () => {
    return (
        <SecaoIntro>
            <p>
                Olá, mundo! Eu sou um <span className="destaque">desenvolvedor</span> web Front-end especializado no framework <span className="destaque">React</span>.
            </p>
        </SecaoIntro>
    );
};

export default Intro;
