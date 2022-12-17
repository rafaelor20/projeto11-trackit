import styled from "styled-components";

export default function BottomBar(){
    return(
        <BottomBarDiv>
            <FontBottom>Hábitos</FontBottom>
            <TodayButton/>
            <FontBottom>Histórico</FontBottom>
        </BottomBarDiv>
    );
}

const BottomBarDiv = styled.div`
position: absolute;
left: 0px;
bottom: 0px;
width: 375px;
height: 70px;
background: #FFFFFF;
display: flex;
justify-content: space-around;
align-items: center;
`

const TodayButton = styled.img`
position: absolute;
width: 91px;
height: 91px;
left: 142px;
top: 566px;
background: #52B6FF;
`

const FontBottom = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
`

