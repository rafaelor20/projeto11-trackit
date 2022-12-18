import styled from "styled-components";
import TopBar from './topBar.js'
import BottomBar from './bottomBar'
import trash from './assets/trash.png'


export default function Habits() {
    return (
        <HabitDiv>
            <TopBar />
            <Content>
                <TopBarHabits>
                    <FontTopBarHabits>Meus hábitos</FontTopBarHabits>
                    <CreateHabit>
                        <PlusText>+</PlusText>
                    </CreateHabit>
                </TopBarHabits>
                <AddHabitDiv>
                    <InputHabitName placeholder="nome do hábito" />
                    <DaysBox>
                        <DayBox>
                            <p>D</p>
                        </DayBox>
                        <GreyDayBox>
                            <p>S</p>
                        </GreyDayBox>
                        <DayBox>
                            <p>T</p>
                        </DayBox>
                        <GreyDayBox>
                            <p>Q</p>
                        </GreyDayBox>
                        <DayBox>
                            <p>Q</p>
                        </DayBox>
                        <GreyDayBox>
                            <p>S</p>
                        </GreyDayBox>
                        <DayBox>
                            <p>S</p>
                        </DayBox>
                    </DaysBox>
                    <AddHabitButtons>
                        <AddHabitCancel><p>Cancelar</p></AddHabitCancel>
                        <AddHabitButton>
                            <p>Salvar</p>
                        </AddHabitButton>
                    </AddHabitButtons>
                </AddHabitDiv>
                <NoHabitWarning>
                    Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!
                </NoHabitWarning>
                <Habit>
                    <div class="box">
                        <p>Ler 1 capítulo de livro</p>
                        <img src={trash} alt="Apagar" />
                    </div>
                    <DaysBox>
                        <DayBox>
                            <p>D</p>
                        </DayBox>
                        <GreyDayBox>
                            <p>S</p>
                        </GreyDayBox>
                        <DayBox>
                            <p>T</p>
                        </DayBox>
                        <GreyDayBox>
                            <p>Q</p>
                        </GreyDayBox>
                        <DayBox>
                            <p>Q</p>
                        </DayBox>
                        <GreyDayBox>
                            <p>S</p>
                        </GreyDayBox>
                        <DayBox>
                            <p>S</p>
                        </DayBox>
                    </DaysBox>
                </Habit>
            </Content>

            <BottomBar />
        </HabitDiv>
    );
}

const HabitDiv = styled.div`
box-sizing: border-box;
`
const Content = styled.div`
box-sizing: border-box;
background-color: #E5E5E5;
display:flex;
flex-direction:column;
align-items: center;
min-height: 560px;
padding: 15px 15px;
`

const TopBarHabits = styled.div`
width: 95%;
margin: 20px 0px;
display: flex;
justify-content: space-between;
align-items: center;
`

const FontTopBarHabits = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 29px;
color: #126BA5;
`
const CreateHabit = styled.div`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 5px;
display: flex;
justify-content: center;
align-items:center;
`

const PlusText = styled.p`
font-size: 27px;
color: #FFFFFF;
`

const AddHabitDiv = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
width: 95%;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
padding: 10px 10px;
`

const AddHabitButtons = styled.div`
display:flex;
justify-content:end;
`

const AddHabitCancel = styled.div`
margin: 70px 0px 0px 0px;
width: 84px;
height: 35px;
display:flex;
justify-content:center;
align-items:center;
p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #52B6FF;
}
`;

const AddHabitButton = styled.div`
margin: 70px 0px 0px 0px;
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 5px;
display:flex;
justify-content:center;
align-items:center;
p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #FFFFFF;    
}
`


const InputHabitName = styled.input`
box-sizing: border-box;
width: 303px;
height: 45px;
background: #FFFFFF;
border: 2px solid #D5D5D5;
border-radius: 5px;
padding: 0px 10px;
::placeholder{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color: #DBDBDB;
}
`

const Habit = styled.div`
width: 95%;
height: 91px;
padding: 10px 10px;
display: flex;
flex-direction:column;
background: #FFFFFF;
border-radius: 5px;
.box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color: #666666;
};
img{
    top: 10px;
    right: 10px;
    width:15px;
    height:13px;
};
`

const DaysBox = styled.div`
width:100%;
display: flex;
flex-direction:row;
height: 32px;
margin: 10px 0px;
`

const DayBox = styled.div`
box-sizing: border-box;
width: 30px;
height: 30px;
background: #FFFFFF;
border: 2px solid #D5D5D5;
border-radius: 5px;
margin: 6px 3px 0px 0px;
display: flex;
justify-content: center;
align-items: center;
p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color: #DBDBDB;
text-align:center;
}
`

const GreyDayBox = styled(DayBox)`
background: #CFCFCF;
p{
    color: #FFFFFF;
}
`


const NoHabitWarning = styled.p`
display: flex;
width:95%;
margin: 30px 0px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #666666;
`