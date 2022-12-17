import styled from "styled-components"

export default function TopBar(){
    return(
        <TopBarElem>
            <FontTopBar></FontTopBar>
            <ImgTopBar/>
        </TopBarElem>
    )
}

const TopBarElem = styled.div`
width: 100%;
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
justify-content:space-between;
align-items:center;
padding: 0px 18px;
`

const FontTopBar = styled.p`
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
`

const ImgTopBar = styled.img`
width: 51px;
height: 51px;
background: url(image.png);
border-radius: 98.5px;
`