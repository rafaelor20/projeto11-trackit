import styled from "styled-components";

export default function Today(){
    return(
        <TodayStyle>
            <TodayTitle>
            Segunda, 17/05
            </TodayTitle>
            <HabitsDone>
            Nenhum hábito concluído ainda
            </HabitsDone>
            <Habit>
                <p class="title">Ler 1 capítulo de livro</p>
                <p class="item">Sequência atual:</p><p class="answer"> 3 dias</p>
                <p class="item">Seu recorde:</p><p class="answer"> 5 dias</p>
                <img src="" alt=""/>
            </Habit>
        </TodayStyle>
    );
}

const TodayStyle = styled.div``

const TodayTitle = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`

const HabitsDone = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #BABABA;
`

const Habit = styled.div`
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;

.title{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
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
}
`

