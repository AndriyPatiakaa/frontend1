 import { useEffect, useState } from 'react';
import { isAuth } from "../../api/isAuth";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuth()) {
      navigate('/');
    }
  }, []);

  const login = async () => {
    setIsLoading(true);
    setError('');

    // Проста перевірка логіна і пароля
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('auth', 'true'); // можна зберегти у localStorage, щоб isAuth() працювало
      navigate('/');
    } else {
      setError('Невірний логін або пароль');
    }

    setIsLoading(false);
  };

  return (
    <div className="login">
      <div className="login__modal" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
        {isLoading ? (
          <div className="login__modal-loading">
            Loading...
          </div>
        ) : (
          <>
            <h1>Login</h1>
            <h3>Username</h3>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <h3>Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button
              onClick={login}
              style={{ marginTop: '16px' }}
              disabled={!username || !password}
            >
              Login
            </button>
            <h5>
              Don't have an account?{' '}
              <Link to='/register'>
                <p>Register</p>
              </Link>
            </h5>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
