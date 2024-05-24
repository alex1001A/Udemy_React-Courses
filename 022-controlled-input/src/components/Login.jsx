import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({ username: "", password: ""});

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(data);
  }

  function handleInputChange(event, name) {
    setData({...data, [name]: event.target.value})
  }


  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="login">
          Username:
          <input 
          id="login"
          type="text" 
          value={data.username}
          onChange={(event) => handleInputChange(event, 'username')}/>
        </label>
        <label htmlFor="password">
          Password:
          <input 
          id="password"
          type="password" 
          value={data.password}
          onChange={(event) => handleInputChange(event, 'password')}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
