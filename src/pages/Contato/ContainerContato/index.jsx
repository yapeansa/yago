import { styled } from "styled-components";

const ContainerContato = styled.div`
    margin: 3rem 0 0;
    line-height: 1.5;
    p {
        color: var(--branco);
        font-size: 1.3rem;
        max-width: 55%;
        margin: 0 auto;
    }
    a {
        color: var(--branco);
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 30px auto;
        transition: all .3s ease-in;
        position: relative;
        padding: .5rem 0;
        width: fit-content;
        &::before {
            content: '';
            position: absolute;
            left: 50%;
            margin-left: -15%;
            bottom: 0;
            background: var(--primeira-cor);
            width: 30%;
            height: 2px;
            transition: all .3s ease-in-out;
        }
        &:hover {
            &::before {
                width: 100%;
                left: 0;
                margin-left: 0;
            }
        }
    }
    form {
        max-width: 800px;
        margin: 60px auto 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input[type=text], input[type=email], textarea {
            width: 100%;
            margin: 0 auto;
            font-family: var(--fonte-secundaria);
            font-size: 1rem;
            display: block;
            width: 100%;
            background: var(--quinaria);
            border: 2px solid #333;
            border-radius: 25px;
            padding: 1.2rem 1rem;
            outline: none;
            color: var(--branco);
            transition: all .3s ease-in-out;
            &:focus {
                border-color: var(--quinta-cor);
                border-style: dashed;
            }
            &::placeholder {
                opacity: 1;
                color: var(--branco);
            }
        }
        textarea {
            resize: none;
        }
        div {
            display: flex;
            justify-content: center;
            gap: 2rem;
            input[type=reset], input[type=submit] {
                flex: 0 1 140px;
                background: linear-gradient(to bottom, #FFA500, #ffc04c);
                border: 2px solid var(--ouro-escuro);
                border-radius: 16px;
                font-family: var(--fonte-primaria);
                font-weight: 400;
                font-size: 1.2rem;
                text-transform: uppercase;
                cursor: pointer;
                padding: 1rem .8rem;
                transition: all .3s ease-in-out;
                color: var(--preto);
                display: block;
                &:hover {
                    background: linear-gradient(to top, #FFA500, #ffc04c);
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        p {
            max-width: 90%;
        }
    }
`;

export default ContainerContato;
