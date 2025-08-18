import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const success = await login(email, password);
      if (success) {
        // Chuyển hướng về trang chủ sau khi đăng nhập thành công
        navigate('/');
      } else {
        alert('Email hoặc mật khẩu không đúng!');
      }
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
      alert('Có lỗi xảy ra khi đăng nhập!');
    }
  };

  const handleRegisterClick = () => {
    // Chuyển hướng đến trang đăng ký
    navigate('/register');
  };

  return (
    <Login 
      onLogin={handleLogin}
      onRegisterClick={handleRegisterClick}
    />
  );
};

export default LoginPage;
