import './app.css';
import React from 'react';
import { UserContext } from './context';

function AllData(){
  const ctx = React.useContext(UserContext);
  const data = ctx.users;
  const tableCells = data.map((item) =>
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
      <td>{item.balance}</td>
    </tr>
  );
  return (
    <>
    <h5>All Data in Store</h5>
    <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {tableCells}
        </tbody>
      </table>
    </>
  );
}
export default AllData;
