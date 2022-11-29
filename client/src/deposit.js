import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Card, UserContext } from "./context";
import "./styles/app.css";
import { Link } from "react-router-dom";

function Deposit() {
  const ctx = useContext(UserContext);

  const [deposit, setDeposit] = useState(0);
  const [status, setStatus] = useState("");
  const [validator, setValidation] = useState(false);
  const [balance, setBalance] = useState(ctx.account.balance);

  function validate(event, label) {
    if (isNaN(deposit) || deposit === " ") {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      setValidation(false);
      return;
    }
    if (deposit < 0) {
      setStatus("Error: Negative number");
      setTimeout(() => setStatus(""), 3000);
      setValidation(false);
      return false;
    }
    setValidation(true);
    setDeposit(Number(event.target.value));
  }

  function makeDeposit(event) {
    const newTotal = balance + deposit;
    ctx.account.balance = newTotal;
    setBalance(newTotal);
    event.preventDefault();
  }

  const depositFunds = () => {
    if (Object.entries(ctx.account).length > 0) {
      return (
        <Card
          backgroundColor="success"
          txtcolor="black"
          title={`Hi ${ctx.account.name}!`}
          text={`Balance: ${balance}`}
          status={status}
          body={
            <Form onSubmit={makeDeposit}>
              <Form.Group>
                <Form.Label htmlFor="number-input">
                  How much would you like to deposit?
                </Form.Label>
                <br />
                <Form.Control
                  id="number-input"
                  type="number"
                  width="200"
                  onChange={validate}
                ></Form.Control>{" "}
                <br />
              </Form.Group>
              <button
                disabled={!validator}
                type="submit"
                className="btn btn-light"
                id="submit-input"
              >
                Deposit
              </button>
            </Form>
          }
        />
      );
    }
    return (
      <>
        <Card
          backgroundColor="success"
          txtcolor="black"
          header="Deposit"
          title="Deposit"
          text="Please log in"
          body={
            <Link to="/login">
              <button type="submit" className="btn btn-light">
                Login
              </button>
            </Link>
          }
        />
      </>
    );
  };

  return (
    <>
      <div id="depositBack">
        <div className="depositCard">
          <div>{depositFunds()}</div>
        </div>
      </div>
    </>
  );
}

export default Deposit;
