import { useContext } from "react";
import { UserContext, Card } from "./context";

function Balance() {
  let { account } = useContext(UserContext);

  const getCard = () => {
    if (Object.entries(account).length > 0) {
      return (
        <Card
          backgroundColor="secondary"
          txtcolor="black"
          header="BadBank Balance Module"
          title={`Hi ${account.name}! Welcome to the bank`}
          text={`This is your balance: ${account.balance}`}
          body=""
        />
      );
    }
    return (
      <Card
        backgroundColor="secondary"
        txtcolor="black"
        header="BadBank Balance Module"
        title="You are not logged in"
        text="Please log in to check your account balance."
        body=""
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

export default Balance;
