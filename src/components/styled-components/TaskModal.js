import styled, {keyframes} from 'styled-components';

const slideIn = keyframes`
    0% {
    transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`

export const ModalWrapper = styled.div`
    height: 50vh;
    width: 50vw;
    background-color: blue;
    position: fixed;
    top: calc(50vh/2);
    left: calc(50vw/2);
    animation: .5s ${slideIn} ease-out;

`