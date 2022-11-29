import { useContext, useState } from "react";
import { Card, UserContext } from "./context";
import { Link } from "react-router-dom";

function Login() {
  let [status, setStatus] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let ctx = useContext(UserContext);
  let [account, setAccount] = useState(ctx.account);

  function validate(field, label, message) {
    if (!field) {
      setStatus(`Error: ${label} ${message}`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    console.log(email, password);
    if (!validate(email, "email", "was left blank")) return;
    if (!validate(password, "password", "was left blank")) return;
    let result = ctx.users.filter((x) => {
      return x.email === email && x.password === password;
    });
    console.log("logged user: ", result);
    if (result.length === 0) {
      setStatus(`Error! Wrong user or password`);
      setTimeout(() => setStatus(""), 3000);
      return;
    }
    ctx.account = result[0];
    console.log("setted context: ", ctx.account);
    setAccount(ctx.account);
  }

  function blurEmail(event) {
    validate(email, "email", "can't be blank");
  }

  function blurPassword(event) {
    validate(password, "password", "can't be blank");
    console.log(password.length);
    if (password.length < 8) {
      setStatus(`Error: password must be 8 characters`);
      setTimeout(() => setStatus(""), 3000);
    }
  }

  function shouldDisableSubmit(event) {
    return email === "" || password === "";
  }

  const getCard = () => {
    if (Object.entries(account).length > 0) {
      return (
        <Card
          backgroundColor="primary"
          title="Login"
          body={
            <>
              <p>Welcome to the Bad Bank!</p>
              <Link className="btn btn-link" to="/withdraw">
                <button type="submit" className="btn btn-light">
                  Withdraw
                </button>
              </Link>

              <Link className="btn btn-link" to="/deposit">
                <button type="submit" className="btn btn-light">
                  Deposit
                </button>
              </Link>
            </>
          }
        />
      );
    }
    return (
      <Card
        backgroundColor="primary"
        title="Login"
        status={status}
        body={
          <>
            Email address
            <br />
            <input
              type="input"
              onBlur={blurEmail}
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              onBlur={blurPassword}
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              disabled={shouldDisableSubmit()}
              className="btn btn-light"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        }
      />
    );
  };

  return (
    <>
      <div className="home">
        <div className="container home__layout">
          <div className="home__content">{getCard()}</div>
        </div>
      </div>
    </>
  );
}

export default Login;
