import { styled } from "styled-components";

const Rodape = styled.footer`
    background-color: var(--noir);
    color: var(--troisieme);
    font-size: 1.9rem;
    padding: 0 0 6rem;
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
