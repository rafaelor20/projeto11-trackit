import styled from "styled-components";
import TopBar from './topBar.js'
import BottomBar from './bottomBar'
import checked from './assets/checked.png'


export default function Today() {
    return (
        <TodayStyle>
            <TopBar />
            <Content>
                <TodayTitle>
                    Segunda, 17/05
                </TodayTitle>
                <HabitsDone>
                    Nenhum hábito concluído ainda
                </HabitsDone>
                <Habit>
                    <p class="title">Ler 1 capítulo de livro</p>
                    <p class="item">Sequência atual:<span class="answer"> 3 dias</span></p>
                    <p class="item">Seu recorde:<span class="answer"> 5 dias</span></p>
                    <img src={checked} alt="" />
                </Habit>
            </Content>

            <BottomBar />
        </TodayStyle>
    );
}

const TodayStyle = styled.div`
box-sizing: border-box;
`

const Content = styled.div`
box-sizing: border-box;
background-color: #E5E5E5;
display:flex;
flex-direction:column;
min-height: 560px;
padding: 15px 15px;
`

const TodayTitle = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 29px;
color: #126BA5;
margin: 30px 0px 5px 10px;
`

const HabitsDone = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #BABABA;
margin: 0px 0px 30px 10px;
`

const Habit = styled.div`
width: 95%;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
align-items: center
margin: 30px 10px;
padding: 10px 10px;
position: relative;
.title{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color: #666666;
}

.item{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #666666;
}

.answer{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #666666;
}

img{
    background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
width: 69px;
height: 69px;
position: absolute;
top: 10px;
right: 10px;
}
`

