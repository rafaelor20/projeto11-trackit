import styled from "styled-components";

export default function Register(){
    return (
        <RegisterButton>
            <FontTitle>TrackIt</FontTitle>
            <InputBox placeholder="email"></InputBox>
            <InputBox placeholder="senha"></InputBox>
            <InputBox placeholder="nome"></InputBox>
            <InputBox placeholder="foto"></InputBox>
            <LoginButton placeholder="Entrar"></LoginButton>
            <FontButton>Já tem uma conta? Faça login!</FontButton>
        </RegisterButton>
    );
}

const RegisterDiv = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
`

const FontTitle = styled.p`
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 68.982px;
line-height: 86px;
text-align: center;
color: #126BA5;
`

const InputBox = styled.input`
box-sizing: border-box;
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
`

const LoginButton = styled.button`
width: 303px;
height: 45px;
background: #52B6FF;
border-radius: 4.63636px;
`
const FontButton = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
`

const OtherPage = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
`