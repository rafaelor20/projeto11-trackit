export const registerPost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

/*
send format:
{
	email: "...",
	name: "...",
	image: "...",
	password: "..."
}
*/

export const loginPost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

/*
send format:
{
	email: "...",
	password: "..."
}

get format:
{
    "id": 3,
    "name": "Joe",
    "image": "https://http.cat/411.jpg",
    "email": "joe@respondeai.com.br",
    "password": "123456",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIxMjg0NzExfQ.b8e3bYm7TnU5p6pfrCPPbzboax6gvh_gGNFR4T51FxY"
}
*/

export const habitPost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
/*
send format:
{
	name: "Nome do hábito",
	days: [1, 3, 5] // segunda, quarta e sexta
}
{ headers: { Authorization: `Bearer ${token}` } }

get format:
{
	id: 1,
	name: "Nome do hábito",
	days: [1, 3, 5]
}
*/

export const habitsListGet = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
/*
get format:
[
	{
		id: 1,
		name: "Nome do hábito",
		days: [1, 3, 5]
	},
	{
		id: 2,
		name: "Nome do hábito 2",
		days: [1, 3, 4, 6]
	}
]
*/

export const deleteDelete = 
"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO",
/*{ headers: { Authorization: `Bearer ${token}` } }*/


export const habitsTodayGet = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
/*{ headers: { Authorization: `Bearer ${token}` } }*/

/*
[
    {
        "id": 3,
        "name": "Acordar",
        "done": true,
        "currentSequence": 1,
        "highestSequence": 1
    }
]
*/

export const habitDonePost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/check"
/*{ headers: { Authorization: `Bearer ${token}` } }*/

export const habitUndonePost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/uncheck"
/*{ headers: { Authorization: `Bearer ${token}` } }*/

export const historicGet = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily"
/*{ headers: { Authorization: `Bearer ${token}` } }*/