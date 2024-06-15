import { styled } from "styled-components";

const AboutInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding: 0 2.5rem;
    color: var(--deuxieme);
    .text-intro {
        flex: 0 1 55%;
        p {
            text-align: center;
            font-size: 2rem;
            border: .7rem solid #ccc;
            padding: 3.6rem;
            line-height: 1.5;
            border-radius: 1.2rem;
            a {
                border-bottom: 2px solid var(--primeira-cor);
                color: var(--preto);
                transition: all .3s ease-in;
            }
            .estilizado {
                font-weight: 700;
                color: var(--deuxieme);
                border: .1rem solid var(--deuxieme);
                padding: 0 .3rem;
            }
        }
    }
    .minha-foto {
        flex: 0 1 25%;
        img {
            max-width: 100%;
            border: .2rem dashed var(--deuxieme);
            border-radius: 100%;
            padding: 1.2rem;
        }
    }

    @media screen and (max-width: 1000px) {
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
            img {
                max-width: 70%;
            }
        }
    }
`;

export default AboutInfo;
