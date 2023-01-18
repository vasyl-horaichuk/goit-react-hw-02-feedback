import styled from 'styled-components'

export const List = styled.ul`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 700;
    list-style: none;
    color: #555555;
`

export const Item = styled.li`
justify-items: center;
justify-content: center;
align-items: center;
:first-child > span {
    color: green;
}

:nth-child(2) > span {
    color: orange;
}

:nth-child(3) > span {
    color: red;
}

:nth-child(4) > span {
    color: black;
    font-size: 25px;
}

:last-child {
    font-size: 40px;
    color: green;
}

`