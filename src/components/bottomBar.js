import styled from "styled-components";
import { Link } from 'react-router-dom'
import elipse from './assets/Ellipse 2.png'

export default function BottomBar() {
    return (
        <BottomBarDiv>
            <Link to='/habitos'>
                <FontBottom>Hábitos</FontBottom>
            </Link>
            <Link to='/hoje'>
                <TodayDiv>
                    <Ellipse src={elipse} />
                    <FontToday>
                        Hoje
                    </FontToday>
                </TodayDiv>
            </Link>
            <Link to='/historico'>
                <FontBottom>Histórico</FontBottom>
            </Link>
        </BottomBarDiv>
    );
}

const BottomBarDiv = styled.div`
box-sizing: border-box;
position: sticky;
left: 0px;
bottom: 0px;
width: 100%;
height: 70px;
background: #FFFFFF;
display: flex;
justify-content: space-around;
align-items: center;
`

const TodayDiv = styled.div`
position: sticky;
`

const FontToday = styled.p`
position: sticky;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #FFFFFF;
`

const Ellipse = styled.img`

width: 91px;
height: 91px;
left: 142px;
top: 0px;
`

const FontBottom = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #52B6FF;
`

