import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [authenticated, setAuthenticated] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication
    if (loginData.username === 'user' && loginData.password === '123') {
      setAuthenticated(true);
      console.log('Login successful!');
    } else {
      console.error('Login failed!');
    }
  };

  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      {authenticated ? (
        <div>
          <Typography variant="h2" gutterBottom>
            {navigate('/authorCreatePost')}
          </Typography>
          {/* Add authenticated content here */}
        </div>
      ) : (
        <div>
          <Typography variant="h2" gutterBottom sx={{ marginTop:"20px"}}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="User Name"
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" sx={{marginLeft: "476px", marginTop:"20px"}}>
              Login
            </Button>
            <Link to="/authorRegisteruser">Registration</Link>
          </form>
        </div>
      )}
    </Container>
  );
};

export default Login;
