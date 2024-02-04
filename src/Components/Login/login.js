import { useContext, useState } from "react";
import "./login.css";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUserInfo } = useContext(UserContext);

  async function login(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/user/login", {
      method: "Post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.status === 200) {
      alert("Logged in successfully");
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("Login failed, wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="Loginbox">
      <form className="login" onSubmit={login}>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Enter your email-id"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Enter your password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        ></input>

        <a href="/signup">New User? signup Here</a>
        <hr />

        <button className="loginBtn">Login</button>
      </form>
    </div>
  );
}