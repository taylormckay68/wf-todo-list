import styled from 'styled-components';

export const NavWrapper = styled.div`
    width: 100vw;
    height: 200px;
    background-color: pink;
`

export const AddButton = styled.button`
    width: 75px;
    height: 25px;
    background-color: gray;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    cursor: pointer;
    &:focus {
        outline:0;
    }
`