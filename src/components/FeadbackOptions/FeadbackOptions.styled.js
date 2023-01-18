import styled from "styled-components";

export const Button = styled.button`
padding: 10px 70px;
min-width: 300px;
font-weight: 600;
font-size: 14px;
border-radius: 5px;
border-style: hidden;
color: #ffffff;

:first-child {
    background-color: green;
}

:nth-child(2) {
    background-color: orange;
}

:last-child {
    background-color: red;
}

:hover {
    background-color: white;
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgb(0 0 0 / 20%) 0px 10px 10px -5px;
}

:active {
    box-shadow: rgb(0 0 0 / 30%) 0px 10px 10px -2px;
}
`
export const ListBtn = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
/* justify-items: center; */
justify-content: space-evenly;
margin: 30px 0px;

`