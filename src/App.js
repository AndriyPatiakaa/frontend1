import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
// import Login from './pages/Login/Login'; // можеш видалити або закоментувати
// import Register from './pages/Register/Register'; // за бажанням

function App() {
  useEffect(() => {
    // Автоматичний логін як admin
    localStorage.setItem('TOKEN', 'fake-token-for-admin');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Якщо треба: <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> <-- це видаляй або закоментуй */}
      </Routes>
    </Router>
  );
}

export default App;
