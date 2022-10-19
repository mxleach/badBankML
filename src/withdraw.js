import React, {useContext, useState} from 'react';
import {Card, UserContext} from './context';
import './app.css';

function Withdraw(){
    const [show, setShow] = useState(true);
    const [withdraw, setWithdraw] = useState('');
    const [status, setStatus] = useState('');
  
    const ctx = useContext(UserContext);
   
    let lastUser = ctx.users.length -1;
    let balance = parseInt(ctx.users[lastUser].balance);
  
    function validate(field, label){
      if (isNaN(withdraw) || withdraw === " ") {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }     if (withdraw < 0) {
        setStatus('Error: Negative number');
        setTimeout(() => setStatus(''),3000);
        return false;
      } if (withdraw > balance) {
        setStatus('Error: Insufficient funds');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
  
    function handleWithdraw () {
      if (!validate(withdraw, 'Number required'))     
      return;

      let newBalance = balance - parseInt(withdraw);
      let deductedFunds = `${ctx.users[lastUser].name} withdrew: ${withdraw}`
      setShow(false)
      return ( ctx.users[lastUser].balance = newBalance, ctx.submissions.push(deductedFunds)
      )
    }
  
    function clearForm(){
      setWithdraw(0);
      setShow(true);
      console.log(ctx)
    }
  
    return (
      <div id="withdrawBack">
        <div id="withdrawCard"> 
          <Card
          backgroundColor="info"
          header="Withdraw Funds"
          status={status}
          body= {show ? (
            <>
            <h5>Hello {ctx.users[lastUser].name},</h5>
            <h6>Account Balance = $ {ctx.users[lastUser].balance}</h6><br/>
            <input type="input" className="form-control" id="withdraw" placeholder="Enter amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /> <br/>
            
            <button type="submit" className="btn btn-light" disabled={withdraw === 0 || withdraw === ''? true : false} onClick={handleWithdraw}>Withdraw Amount</button> <br/>
            </> ) : (<> 
            <h6>New Balance = $ {balance}</h6> <br/>
            <p>Transaction successful!</p>
            <button type="submit" className="btn btn-light"  onClick={clearForm}>Make another withdraw</button> <br/>
            </>
            )
          }
          />
        </div>
      </div>
      )
  }

  export default Withdraw;