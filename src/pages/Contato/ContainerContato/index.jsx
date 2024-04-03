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
            background: var(--quinta-cor);
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
        max-width: 65%;
        margin: 60px auto 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 1.5rem;
        .engloba_texto_email {
            width: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            input[type=text], input[type=email] {
                flex: 1 1 auto;
                font-family: var(--fonte-secundaria);
                font-size: 1rem;
                background: var(--quinaria);
                border: 2px solid var(--segunda-cor);
                padding: 1.2rem 1rem;
                outline: none;
                color: var(--branco);
                transition: all .3s ease-in-out;
                &:focus {
                    border-color: var(--primeira-cor);
                }
                &::placeholder {
                    opacity: 1;
                    color: var(--branco);
                }
            }
        }
        textarea {
            resize: none;
            width: 100%;
            font-family: var(--fonte-secundaria);
            font-size: 1rem;
            background: var(--quinaria);
            border: 2px solid var(--segunda-cor);
            padding: 1.2rem 1rem;
            outline: none;
            color: var(--branco);
            transition: all .3s ease-in-out;
            &:focus {
                border-color: var(--primeira-cor);
            }
            &::placeholder {
                opacity: 1;
                color: var(--branco);
            }
        }
        .acoes__formulario {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            input[type=reset], input[type=submit] {
                flex: 1 1 auto;
                background: transparent;
                border: 2px solid var(--quinta-cor);
                font-family: var(--fonte-primaria);
                font-weight: 400;
                display: block;
                font-size: 1.2rem;
                text-transform: uppercase;
                cursor: pointer;
                padding: 1rem .8rem;
                transition: all .3s ease-in-out;
                color: var(--branco);
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 50px;
                    height: 5px;
                    background: var(--quinta-cor);
                }
                &:hover {
                    background: var(--quinta-cor);
                    color: var(--terceira-cor);
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        p {
            max-width: 90%;
        }
        form {
            max-width: 100%;
        }
    }
`;

export default ContainerContato;
