import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './compoents/topBar.js'
import BottomBar from './components/bottomBar'
import Login from './components/login'
import Register from './components/register'
import Habits from "./components/habits"
import Today from './components/today'
import Records from './components/records'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Content>
          <TopBar/>
          <BrowserRouter>
            <Routes>
              <Route path="/" elemennt={<Login/>}/>
              <Route path="cadastro" elemennt={<Register/>}/>
              <Route path="habitos" element={<Habits/>}/>
              <Route path="hoje" element={<Today/>}/>
              <Route path="historico" element={<Records/>}/>
            </Routes>
          </BrowserRouter>
          <BottomBar/>
        </Content>
      </header>
    </div>
  );
}

export default App;


const Content = styled.div`
background-color: #E5E5E5;
padding: 20px 20px;
`