import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  console.log(user)
  return (
    <div className="container">

      <div className="login">
        <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={() => setUser(username)}>Login</button>
      </div>
     
    </div>
  );
}

export default App;
