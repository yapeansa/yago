import { styled } from "styled-components";

const ContainerContato = styled.div`
    margin: 3rem 0 0;
    line-height: 1.5;
    p {
        color: var(--branco);
        font-size: 1.3rem;
        max-width: 60%;
        margin: 0 auto;
    }
    a {
        color: var(--branco);
        font-size: 1.3rem;
        display: inline-block;
        margin: 30px 0;
        transition: all .3s ease-in;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            left: 50%;
            margin-left: -4.5rem;
            top: -.5rem;
            background: var(--terciaria);
            width: 9rem;
            height: 2px;
        }
        &::after {
            content: '';
            position: absolute;
            left: 50%;
            margin-left: -4.5rem;
            bottom: -.5rem;
            background: var(--terciaria);
            width: 9rem;
            height: 2px;
        }
    }
    form {
        max-width: 850px;
        margin: 60px auto 0;
        padding: 0 1.6rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input, textarea {
            font-family: var(--fonte-secundaria);
            font-size: 1rem;
            display: block;
            width: 100%;
            background: var(--quinaria);
            border: 2px solid #333;
            padding: 1.2rem 1rem;
            outline: none;
            color: var(--branco);
            transition: all .3s ease-in-out;
            &:focus {
                border-color: var(--ouro-escuro);
                border-style: dashed;
            }
            &::placeholder {
                opacity: 1;
                color: #999;
            }
        }
        textarea {
            resize: none;
        }
        input[type=reset], input[type=submit] {
            max-width: 140px;
            background: linear-gradient(to bottom, #FFA500, #ffc04c);
            border: none;
            border-radius: 16px;
            font-family: var(--fonte-primaria);
            font-weight: 400;
            font-size: 1.2rem;
            text-transform: uppercase;
            cursor: pointer;
            padding: 1.1rem 1rem;
            transition: all .3s ease-in;
            color: var(--preto);
            //border-radius: 16px;
            &:hover {
                background: linear-gradient(to top, #FFA500, #ffc04c);
            }
        }
        div {
            display: flex;
            justify-content: center;
            flex: 1;
            gap: 1.2rem;
        }
    }

    @media screen and (max-width: 768px) {
        p {
            max-width: 90%;
        }
    }
`;

export default ContainerContato;
