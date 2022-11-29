import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Balance from "./balance";
import NavBar from "./components/navbar";
import RecordList from "./components/recordlist";
import { UserContext } from "./context";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Home from "./home";
import Login from "./login";
import "./styles/app.css";
import Withdraw from "./withdraw";

function App() {
  let state = {
    users: [
      { name: "Max", email: "max@mit.edu", password: "secret", balance: 1000 },
    ],
    account: {},
  };

  return (
    <HashRouter>
      <UserContext.Provider value={state}>
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount/" element={<CreateAccount />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/balance/" element={<Balance />} />
            <Route path="/recordlist/" element={<RecordList />} />
          </Routes>
        </main>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
