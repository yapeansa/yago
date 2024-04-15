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
            text-align: justify;
            font-size: 1.3rem;
            border: 2px solid var(--quarta-cor);
            padding: 2.6rem;
            line-height: 1.4;
            color: var(--segunda-cor);
            box-shadow: 12px 12px 0 0 var(--quarta-cor);
            a {
                border-bottom: 2px solid var(--quinta-cor);
                color: var(--preto);
                transition: all .3s ease-in;
            }
            .estilizado {
                font-weight: 700;
                color: var(--terceira-cor);
            }
        }
    }
    .minha-foto {
        flex: 0 1 25%;
        img {
            max-width: 100%;
            border: 2px solid var(--quinta-cor);
            border-radius: 100%;
            padding: .8rem;
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
                box-shadow: none;
                text-align: center;
            }
        }
        .minha-foto {
            order: 1;
            flex: 1 1 auto;
        }
    }
`;

export default AboutInfo;
