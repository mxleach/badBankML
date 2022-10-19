import './app.css';
import React, { useState, useContext } from 'react';
import {UserContext, Card} from './context';
import {Link} from 'react-router-dom';

function CreateAccount(){
    const [show, setShow]         = useState(true);
    const [status, setStatus]     = useState('');
    const [name, setName]         = useState('');
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);  
  
    
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        } 
        return true;
    }
  
    function handleCreate(){
      console.log(name,email,password);
      if (!validate(name,     'Name required'))     return;
      if (!validate(email,    'Email required'))    return;
      if (!validate(password, 'Password required')) return;
      if (password.length < 8) {
        setStatus(`Error: Password must be at least 8 characters.`);
        setTimeout(() => setStatus(''), 3000);
        return false
    }
      ctx.users.push({name,email,password,balance:100});
      setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }

  return (
    
    <div id="createActCard">
    <div  id="card2">
      <Card
        backgroundColor = "primary"
        header="Create Account"
        status={status}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter full name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" disabled={name === '' || email==='' || password==='' ? true : false} onClick={handleCreate}>Create Account</button>
                </>
              ):(
              <>
                  <h5>Success!</h5>
                  <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                  <hr/>
                  <Link to="/deposit"><button type="submit" className="btn btn-light" id="toDepositBtn">Make a deposit!</button></Link>
                  </> 
              )}
      />
    </div>
  </div>
)
}

export default CreateAccount;
