import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'; 
import './Auth.css';


function Auth() {
  const [cookies, setCookie] = useCookies(['Username', 'AuthToken']);
  const [isLogIn, setIsLogin] = useState(false); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const authToken = cookies.AuthToken;
    if (authToken) {
      navigate('/home');
    }
  }, [cookies, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const endpoint = isLogIn ? 'login' : 'signup';

    if (!isLogIn && password !== confirmPassword) {
      setError('Salasanat eivät täsmää');
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_ADDRESS}/api/users/${endpoint}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Virheellinen käyttäjänimi tai salasana');
        return;
      }

      const data = await response.json();
      setCookie('Username', data.username, { path: '/' });
      setCookie('AuthToken', data.token, { path: '/' });
      setCookie('userId', data.userId, { path: '/' }); // Tallenna käyttäjän ID evästeisiin

      navigate('/home');
    } catch (error) {
      setError('Virhe tapahtui kirjautumisen/rekisteröinnin aikana');
      console.error(error);
    }
  };
const viewLogin = (status) => { 
    setError(null);
    setIsLogin(status);
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogIn ? "Please log in" : "Please sign up"}</h2>
          <input
            type="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogIn && (
            <input
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <input
            type="submit"
            className="create"
            onClick={(e) => handleSubmit(e, isLogIn ? "login" : "signup")}
          />
          {error && <p>{error}</p>} 
        </form>
        <div className="auth-options">
          <button className='auth-button'
            onClick={() => viewLogin(false)}
            style={{
              backgroundColor: !isLogIn
                ? "rgb(255, 255, 255)"
                : "rgb(188, 188, 188)",
            }}
          >
            Sign up
          </button>
          <button className='auth-button'
            onClick={() => viewLogin(true)}
            style={{
              backgroundColor: isLogIn
                ? "rgb(255, 255, 255)"
                : "rgb(188, 188, 188)",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;