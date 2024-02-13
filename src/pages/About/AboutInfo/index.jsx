import { styled } from "styled-components";

const AboutInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 6rem;
    color: var(--branco);
    p {
        text-align: justify;
        max-width: 55%;
        font-size: 1.2rem;
        border: 2px solid var(--second-color);
        padding: 2.5rem;
        border-radius: 16px;
        line-height: 1.4;
        a {
            text-decoration: underline;
            text-decoration-color: var(--first-color);
            text-decoration-style: double;
            text-decoration-thickness: 2px;
            color: var(--ouro-escuro);
        }
        .estilizado {
            font-weight: 700;
            
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
