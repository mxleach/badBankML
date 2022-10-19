import {Link} from 'react-router-dom'
import './app.css';

function Home(){
    return (
      <div id="home-card">
        <div className="card" id="card1" style={{position: 'absolute', textAlign: 'center'}}>
        <h5 className="card-title"  style={{fontSize: 30 + "px", fontWeight: 'bold', color: "brown"}}>Welcome to Bad Bank</h5>
          <p className="card-text" style={{fontSize: 12 + "px", fontStyle: 'italic', color: "brown" }}>Thanks for choosing us!</p>
         
          <img src="/images/bank.png" className="card-img-top" alt="globe" id="homeImg" style={{width: 500 + 'px', position: 'relative',}}/>
        <div className="card-body" id="homeBody">
    
          <Link to="/create-account"><button type="submit" className="btn btn-primary" id="createAcctBtn" style={{fontSize: 20 + "px", fontWeight: 'bold', backgroundColor: "brown", opacity: .85}}>Sign up today!</button></Link>
        </div>
        </div>
      </div>
    );  
}
  
export default Home;
