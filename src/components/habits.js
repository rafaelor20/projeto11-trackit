import styled from "styled-components";

export default function Habits() {
    return (
        <HabitDiv>
            <TopBarHabits>
                <FontTopBarHabits>Meus hábitos</FontTopBarHabits>
                <CreateHabit>
                    <PlusText>+</PlusText>
                </CreateHabit>
            </TopBarHabits>
            <AddHabitDiv>
                <InputHabitName placeholder="nome do hábito" />
                <daysBox>
                    <dayBox>
                        <p>D</p>
                    </dayBox>
                    <dayBox>
                        <p>S</p>
                    </dayBox>
                    <dayBox>
                        <p>T</p>
                    </dayBox>
                    <dayBox>
                        <p>Q</p>
                    </dayBox>
                    <dayBox>
                        <p>Q</p>
                    </dayBox>
                    <dayBox>
                        <p>S</p>
                    </dayBox>
                    <dayBox>
                        <p>S</p>
                    </dayBox>
                </daysBox>
                <AddHabitButtons>
                    <AddHabitCancel>Cancelar</AddHabitCancel>
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
                <img />
                <p>Ler 1 capítulo de livro</p>
                <daysBox>
                <daysBox>
                    <dayBox>
                        <p>D</p>
                    </dayBox>
                    <dayBox>
                        <p>S</p>
                    </dayBox>
                    <dayBox>
                        <p>T</p>
                    </dayBox>
                    <dayBox>
                        <p>Q</p>
                    </dayBox>
                    <dayBox>
                        <p>Q</p>
                    </dayBox>
                    <dayBox>
                        <p>S</p>
                    </dayBox>
                    <dayBox>
                        <p>S</p>
                    </dayBox>
                </daysBox>
                </daysBox>
            </Habit>
        </HabitDiv>
    );
}

const HabitDiv = styled.div`
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
font-size: 23px;
line-height: 29px;
color: #126BA5;
`
const CreateHabit = styled.div`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 5px;
`

const PlusText = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 27px;
line-height: 34px;
text-align: center;
color: #FFFFFF;
`

const AddHabitDiv = styled.div`
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
width: 84px;
height: 35px;
p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #52B6FF;
}
`
const AddHabitButton = styled.div`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 5px;
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

const Habit = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;
};
img{
    width:15px;
    height:13px;
};
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
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
}
`


const NoHabitWarning = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
`