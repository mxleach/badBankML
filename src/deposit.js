import './app.css';
import React, {useContext, useState} from 'react';
import {Card, UserContext} from './context';

function Deposit(){
    const [show, setShow] = useState(true);
    const [deposit, setDeposit] = useState('');
    const [status, setStatus] = useState('');
  
    const ctx = useContext(UserContext);
   
    let lastUser = ctx.users.length -1;
    let balance = parseInt(ctx.users[lastUser].balance);
  
    function validate(field, label){
      if (isNaN(deposit) || deposit === " ") {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }     if (deposit < 0) {
        setStatus('Error: Negative number');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
  
    function handleDeposit () {
      if (!validate(deposit, 'Number required'))     
      return;

      let newBalance = balance + parseInt(deposit);
      let addedFunds = `${ctx.users[lastUser].name} deposited: ${deposit}`
      setShow(false)
      return ( ctx.users[lastUser].balance = newBalance, ctx.submissions.push(addedFunds)
      )
    }
  
    function clearForm(){
      setDeposit(0);
      setShow(true);
      console.log(ctx)
    }
  
    return (
      <div id="depositBack">
        <div className="depositCard"> 
          <Card
          backgroundColor="success"
          header="Deposit Funds"
          status={status}
          body= {show ? (
            <>
            <h5>Hello {ctx.users[lastUser].name},</h5>
            <h6>Account Balance = $ {ctx.users[lastUser].balance}</h6><br/>
            <input type="input" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /> <br/>
            
            <button type="submit" className="btn btn-light" disabled={deposit === 0 || deposit === ''? true : false} onClick={handleDeposit}>Deposit Amount</button> <br/>
            </> ) : (<> 
            <h6>New Balance = $ {balance}</h6> <br/>
            <p>Transaction successful!</p>
            <button type="submit" className="btn btn-light"  onClick={clearForm}>Make another deposit</button> <br/>
            </>
            )
          }
          />
        </div>
      </div>
      )
  }

  export default Deposit;