import { styled } from "styled-components";

const Rodape = styled.footer`
    background-color: var(--darker);
    color: var(--branco);
    font-size: 1.3rem;
    padding: 0 0 4rem;
    text-align: center;
    line-height: 1.5;
    a {
        margin-bottom: 1rem;
        display: inline-block;
    }

    @media screen and (max-width: 768px) {
        padding: 0 0 7rem;
        p {
            max-width: 80%;
            margin: 0 auto;
        }
    }
`;

export default Rodape;
