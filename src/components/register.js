import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import { registerPostUrl, registerPostObj } from "./apiUrls.js";
import logo from "./assets/logo.png"

export default function RenderRegister() {
    const [user, setUser] = useState(registerPostObj);
    const userProps = {user: user, setUser: setUser}
    const navigate = useNavigate();

    return (
        <RegisterDiv>
            <Logo src={logo} />
            <FontTitle>TrackIt</FontTitle>
            <InputBox placeholder="email" onChange={e => updateEmail(e.target.value, userProps)}></InputBox>
            <InputBox placeholder="senha" onChange={e => updatePassword(e.target.value, userProps)}></InputBox>
            <InputBox placeholder="nome" onChange={e => updateName(e.target.value, userProps)}></InputBox>
            <InputBox placeholder="foto" onChange={e => updateImage(e.target.value, userProps)}></InputBox>
            <LoginButton onClick={()=>Register(userProps, navigate)}>
                    <FontButton>
                        Cadastrar    
                    </FontButton>
                </LoginButton>
            <Link to="/" style={{ textDecoration: 'none'}}>
                <OtherPage>Já tem uma conta? Faça login!</OtherPage>
            </Link>
        </RegisterDiv>
    );
}

function Register(userProps, navigate){
    console.log(userProps.user);
    const request = axios.post(registerPostUrl, userProps.user);
    request.then(()=>{navigate('/')});
    request.catch((error)=>error.response.data)
}

function updateEmail(email, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: email,
            name: user.name,
            image: user.image,
            password: user.password
        }
    );
}

function updatePassword(password, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: user.email,
            name: user.name,
            image: user.image,
            password: password
        }
    );
}

function updateName(name, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: user.email,
            name: name,
            image: user.image,
            password: user.password
        }
    );
}

function updateImage(image, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: user.email,
            name: user.name,
            image: image,
            password: user.password
        }
    );
}

const RegisterDiv = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
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
justify-content: center;
align-items: center;
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