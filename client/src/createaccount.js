import { useContext, useState } from "react";
import { Card, UserContext } from "./context";
import "./styles/app.css";
import { useNavigate } from "react-router";

function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(UserContext);

  const [form, setForm] = useState({
    name: "",
    account: "",
    email: "",
    password: "",
    balance: "",
  });
  const navigate = useNavigate();

  function createForm() {
    console.log(name, email, password);
    if (!validate(name, "Name required")) return;
    if (!validate(email, "Email required")) return;
    if (!validate(password, "Password required")) return;
    if (password.length < 8) {
      setStatus(`Error: Password must be at least 8 characters.`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    ctx.users.push({
      name: "",
      email: "",
      password: "",
      balance: "100",
    });
    setShow(false);
  }

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newAccount = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAccount),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", account: "", email: "", password: "", balance: "" });
    navigate("/");
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  // refactored into a function
  function shouldDisableSubmit(event) {
    return email === "" || name === "" || password === "";
  }

  return (
    <div>
      <div>
        <Card
          backgroundColor="primary"
          title="Create Account"
          status={status}
          body={
            show ? (
              <>
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={form.name}
                      onChange={(e) => updateForm({ name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      value={form.email}
                      onChange={(e) => updateForm({ email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      value={form.password}
                      onChange={(e) => updateForm({ password: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <br></br>
                    <button
                      type="submit"
                      className="btn btn-success"
                      id="submit-input"
                      onClick={createForm}
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div>
                <h5>Thank you for choosing Bad Bank!</h5>
                <p>
                  <button
                    type="submit"
                    className="btn btn-light"
                    onClick={clearForm}
                    disabled={shouldDisableSubmit()}
                  >
                    Add another account
                  </button>
                </p>
                <hr />
              </div>
            )
          }
        />
      </div>
    </div>
  );
}

export default CreateAccount;
