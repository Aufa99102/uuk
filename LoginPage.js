import { useNavigate } from 'react-router-dom';
import gpt from './Gptlogo.png';
import './App.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/next-page'); // Pindah ke halaman lain
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={gpt} className="App-logo" alt="logo" />
        <p className='LoginMember'>LOGIN MEMBER</p>
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button className='btnlogin' onClick={handleClick}>LOGIN</button>
        <a className="forgot-password">Forgot Password?</a>
        <a className="register">Don't have an account?</a>
        <a className="signup" onClick={handleClick}>signup</a>
      </header>
    </div>
  );
}

export default LoginPage;
