import { styled } from "styled-components";

const AboutInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 6rem;
    color: var(--preto);
    p {
        text-align: center;
        max-width: 55%;
        font-size: 1.23rem;
        border: 2px solid var(--cinza-claro);
        padding:  3rem;
        border-radius: 16px;
        line-height: 1.4;
        a {
            border-bottom: 2px dashed var(--terciaria);
            color: var(--preto);
            transition: all .3s ease-in;
            &:hover {
                text-decoration-color: var(--ouro-escuro);
            }
        }
        .estilizado {
            font-weight: 700;
            color: var(--terciaria);
        }
    }
    img {
        max-width: 300px;
        border: 2px solid var(--terciaria);
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
            background-color: var(--fifth-color);
            border-radius: 0;
            border: none;
            padding: 0;
        }
        img {
            order: 1;
        }
    }
`;

export default AboutInfo;
