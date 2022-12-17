import styled from "styled-components";

export default function Records() {
    return (
        <>
            <Title>Histórico</Title>
            <Text>
                Em breve você poderá ver o histórico
                dos seus hábitos aqui!
            </Text>
        </>
    );
}

const Title = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 29px;
color: #126BA5;`

const Text = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #666666;
`