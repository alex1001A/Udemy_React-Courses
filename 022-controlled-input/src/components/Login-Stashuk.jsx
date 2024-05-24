import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({ username: "", password: "" });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value })
    // Запись [name] используется для динамического доступа к свойству объекта.
    // Эта техника позволяет обрабатывать несколько полей ввода с помощью одной функции,
    // что делает код более компактным и легко поддерживаемым.
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">
          Username:
          <input
            type="text"
            value={data.username}
            // для того, чтобы передать функцию с аргументами 
            // ее надо обернуть в стрелочную функцию
            onChange={(event) => handleInputChange(event, 'username')}
          />
        </label>
        <label htmlFor="">
          Password:
          <input
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
