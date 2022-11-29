/* eslint-disable no-undef */
import React, { useEffect, useState, useContext } from "react";
import { UserContext, Card } from "../context";
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.email}</td>
    <td>{props.record.password}</td>
    <td>{props.record.balance}</td>
    {/* <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td> */}
  </tr>
);

function RecordList() {
  const [records, setRecords] = useState([]);
  let ctx = useContext(UserContext);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  const getAllUsers = () => {
    let users = ctx.users.map((item, index) => {
      return (
        <table
          style={{ width: 50, height: "auto" }}
          className="table table-bordered table-striped"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Balance</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      );
    });
    return (
      <>
        <p>{users}</p>
      </>
    );
  };

  return (
    <>
      <div className="home">
        <div className="container home__layout">
          <div className="home__content">
            <Card
              backgroundColor="info"
              txtcolor="black"
              header="BadBank Users"
              title="BadBankers"
              body={<>{getAllUsers()}</>}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecordList;
