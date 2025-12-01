import React, { useState } from "react";

function Login({ setCurrentUser, switchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const match = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!match) {
      alert("Invalid email or password");
      return;
    }

    setCurrentUser(email);
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account?{" "}
        <button onClick={switchToSignup}>Sign up</button>
      </p>
    </div>
  );
}

export default Login;