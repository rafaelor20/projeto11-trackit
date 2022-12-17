import styled from "styled-components";

export default function Habits(){
    return (
        <HabitDiv>
            <TopBarHabits>
                <FontTopBarHabits>Meus hábitos</FontTopBarHabits>
                <AddHabit/>
                <PlusText>+</PlusText>
            </TopBarHabits>
            <NoHabitWarning>
                Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!
            </NoHabitWarning>
        </HabitDiv>
    );
}

const HabitDiv = styled.div`
width: 100%;
background-color: #cdcdcd;
align-items: center;
`

const TopBarHabits = styled.div`
margin: 20px 20px;
display: flex;
justify-content: space-around;
align-items: center;
`

const FontTopBarHabits = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`
const AddHabitButton = styled.img`
width: 40px;
height: 35px;
`

const PlusText = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26.976px;
line-height: 34px;
text-align: center;
color: #FFFFFF;
`

const AddHabitDiv = styled.p`
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
align-items:center;
padding: 10px 10px;
`

const AddHabitButtons = styled.div`
display:flex;
justify-content:end;
`

const AddHabitCancel = styled.div`

`
const ConfirmAddHabitButton = styled.button`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
`


const HabitName = styled.input`
box-sizing: border-box;
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
::placeholder{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
}
`

const daysBox = styled.div`
display: flex;
height: 32px;
`

const dayBox = styled.div`
box-sizing: border-box;
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
display: :flex;
justify-content: center;
align-items:center;
margin: 0px 2px 0px 0px;
`


const NoHabitWarning = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
`