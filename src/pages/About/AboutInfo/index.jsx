import { styled } from "styled-components"

const AboutInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 112px;
    p {
        text-align: justify;
        max-width: 55%;
        font-size: 1.2rem;
        background-color: var(--branco-secundario);
        padding: 2.5rem;
        border-radius: 16px;
        line-height: 1.4;
        a {
            text-decoration-color: var(--cor-primaria);
            text-decoration-style: double;
            text-decoration-thickness: 2px;
            color: var(--preto);
        }
        .estilizado {
            font-weight: 700;
            
        }
    }
    img {
        max-width: 300px;
        border: 2px solid var(--cor-primaria);
        border-radius: 100%;
        padding: 1rem;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 3rem;
        margin-top: 3rem;
        p {
            order: 2;
            max-width: 90%;
            background-color: var(--branco);
            border-radius: 0;
            padding: 0;
        }
        img {
            order: 1;
        }
    }
`

export default AboutInfo
