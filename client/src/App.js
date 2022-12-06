import { useEffect, useState } from 'react';
import { accessToken, logout } from './spotify';
import { Login, Profile, About, Kongzi, Zhuangzi, HanFeizi, Mozi } from './pages';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './css/Card.css'; 
import './css/Main.css';

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, [])

  return (
    <div className="App">
      <div id="header">
        <h1 id="title" className="mainFont">Philosopher's License</h1>
        <Router>
          <nav>
            <Link className="link" to="/">License</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/kongzi">Kongzi</Link>
            <Link className='link' to='/zhuangzi'>Zhuangzi</Link>
            <Link className='link' to='/hanfeizi'>Han Feizi</Link>
            <Link className='link' to='/mozi'>Mozi</Link>
            {token &&
              <button id="logout" className="link mainFont" onClick={logout}>log out</button>
            }
          </nav>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/kongzi" element={<Kongzi />} />
            <Route path="/zhuangzi" element={<Zhuangzi />} />
            <Route path="/hanfeizi" element={<HanFeizi />} />
            <Route path="/mozi" element={<Mozi />} />
            {!token ? (
              <Route path="/" element={<Login />} />
            ) : (
              <Route path="/" element={<Profile />} />
            )}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
