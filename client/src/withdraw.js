import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { UserContext, Card } from "./context";
import { Link } from "react-router-dom";

function Withdraw() {
  let ctx = useContext(UserContext);
  let [validTransaction, setValidTransaction] = useState(false);
  let [deposit, setDeposit] = useState(0);
  let [balance, setBalance] = useState(ctx.account.balance);
  let [status, setStatus] = useState("");

  const handleChange = (event) => {
    if (isNaN(event.target.value)) {
      setStatus(`Error: inserted quantity is not a number`);
      setTimeout(() => setStatus(""), 3000);
      setValidTransaction(false);
      return;
    }
    if (event.target.value > balance) {
      setStatus(`Error: inserted quantity is bigger than your account balance`);
      setTimeout(() => setStatus(""), 3000);
      setValidTransaction(false);
      return;
    }
    setValidTransaction(true);
    setDeposit(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    let newTotal = balance - Math.abs(deposit);
    ctx.account.balance = newTotal;
    setBalance(newTotal);
    event.preventDefault();
  };

  const getCard = () => {
    if (Object.entries(ctx.account).length > 0) {
      return (
        <Card
          backgroundColor="info"
          txtcolor="black"
          header="Withdraw"
          title={`Hi ${ctx.account.name}!`}
          text={`Current Balance: ${balance}`}
          status={status}
          body={
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="number-input">
                  How much do you want to withdraw?
                </Form.Label>
                <br />
                <Form.Control
                  id="number-input"
                  type="number"
                  width="200"
                  onChange={handleChange}
                ></Form.Control>{" "}
                <br />
              </Form.Group>
              <button
                disabled={!validTransaction}
                type="submit"
                className="btn btn-light"
                id="submit-input"
              >
                Withdraw
              </button>
            </Form>
          }
        />
      );
    }
    return (
      <>
        <Card
          backgroundColor="info"
          tcolor="black"
          header="Withdraw"
          title="Withdraw"
          text="Please log in"
          body={
            <>
              <Link to="/login">
                <button type="submit" className="btn btn-light">
                  Login
                </button>
              </Link>
            </>
          }
        />
      </>
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

export default Withdraw;
