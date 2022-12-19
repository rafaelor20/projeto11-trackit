import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RenderLogin from './components/login'
import RenderRegister from './components/register'
import Habits from "./components/habits"
import Today from './components/today'
import Records from './components/records'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RenderLogin />} />
          <Route path="/cadastro" element={<RenderRegister />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Records />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;