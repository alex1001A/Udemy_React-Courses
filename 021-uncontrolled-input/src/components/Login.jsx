import React from "react";

function Login() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const user = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    alert(JSON.stringify(user));
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">
          Username:
          <input type="text" value={} name="username" />
        </label>
        <label htmlFor="">
          Password:
          <input type="password" value={} name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
