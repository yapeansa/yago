import { styled } from "styled-components";

const AboutInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding: 0 2.5rem;
    color: var(--preto);
    .text-intro {
        flex: 0 1 55%;
        p {
            text-align: center;
            font-size: 1.3rem;
            border: 2px dashed var(--quarta-cor);
            padding: 2.6rem 3.5rem;
            border-radius: 20px;
            line-height: 1.4;
            color: var(--segunda-cor);
            a {
                border-bottom: 2px solid var(--primeira-cor);
                color: var(--preto);
                transition: all .3s ease-in;
            }
            .estilizado {
                font-weight: 700;
                color: var(--primeira-cor);
            }
        }
    }
    .minha-foto {
        flex: 0 1 25%;
        img {
            max-width: 100%;
            border: 2px solid var(--primeira-cor);
            border-radius: 100%;
            padding: .5rem 1rem .5rem .5rem;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 3rem;
        margin-top: 3rem;
        .text-intro {
            order: 2;
            flex: 1 1 auto;
            p {
                border-radius: 0;
                border: none;
                padding: 0;
            }
        }
        .minha-foto {
            order: 1;
            flex: 1 1 auto;
        }
    }
`;

export default AboutInfo;
