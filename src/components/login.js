import styled from "styled-components";
import { Link } from 'react-router-dom'
import logo from "./assets/logo.png"

export default function Login() {
    return (
        <LoginDiv>
            <Logo src={logo} />
            <FontTitle>TrackIt</FontTitle>
            <InputBox placeholder="email"></InputBox>
            <InputBox placeholder="senha"></InputBox>
            <Link to='/habitos'>
                <LoginButton ><FontButton>Entrar</FontButton></LoginButton>
            </Link>
            <Link to="/cadastro">
                <OtherPage>Não tem uma conta? Cadastre-se!</OtherPage>
            </Link>
        </LoginDiv>
    );
}

const LoginDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`

const Logo = styled.img`
width: 155px;
height: 100px;
margin: 68px 0px 0px 0px;
`

const FontTitle = styled.p`
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 69px;
line-height: 86px;
color: #126BA5;
margin: 0px 0px 30px 0px;
`

const InputBox = styled.input`
box-sizing: border-box;
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
padding: 0px 10px;
margin: 5px 0px;
::placeholder{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color: #DBDBDB;
}
`

const LoginButton = styled.button`
width: 303px;
height: 45px;
background: #52B6FF;
border-color: #52B6FF;
border-radius: 5px;
display: flex;
justify-content:center;
align-items:center;
`
const FontButton = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
text-decoration:none;
`

const OtherPage = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
margin: 20px 0px;
`
