import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/logo.png";
import { loginPostUrl, loginPostSendObj, loginPostReceiveObj } from './apiUrls.js'

export default function RenderLogin() {
    const navigate = useNavigate();
    const [login, setLogin] = useState(loginPostSendObj);
    const [user, setUser] = useState(loginPostReceiveObj);
    const loginProps = { login: login, setLogin: setLogin };
    const userProps = { user: user, setUser: setUser };
    return (
        <LoginDiv>
            <Logo src={logo} />
            <FontTitle>TrackIt</FontTitle>
            <InputBox placeholder="email" onChange={e => updateEmail(e.target.value, loginProps)}></InputBox>
            <InputBox placeholder="senha" onChange={e => updatePassword(e.target.value, loginProps)}></InputBox>
            <LoginButton onClick={() => { Login(loginProps, userProps, navigate) }}>
                <FontButton>
                    Entrar
                </FontButton>
            </LoginButton>
            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                <OtherPage>Não tem uma conta? Cadastre-se!</OtherPage>
            </Link>
        </LoginDiv>
    );
}

function Login(loginProps, userProps, navigate) {
    console.log(loginProps);
    const request = axios.post(loginPostUrl, loginProps.login);
    const setUser = userProps.setUser;
    //request.then(server => { 
    //    setUser(server.data)});
    request.then(()=>{navigate('/habitos')});
    request.catch((error)=>error.response.data);
}

function updateEmail(email, loginProps) {
    const setLogin = loginProps.setLogin;
    const login = loginProps.login;
    setLogin(
        {
            email: email,
            password: login.password
        }
    );
}

function updatePassword(password, loginProps) {
    const setLogin = loginProps.setLogin;
    const login = loginProps.login;
    setLogin(
        {
            email: login.email,
            password: password
        }
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
