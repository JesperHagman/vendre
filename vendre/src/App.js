import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUser] = useState([]);

  const fetchUser = async () => {
    const res = await axios.get("https://reqres.in/api/users");
    setUser(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <div className="App">
        {users.map((user) => (
          <div key={user.id} className="User">
            <img src={user.avatar} alt="a face" className="Pic" />
            <p className="Name">
              {user.first_name} {user.last_name}
            </p>
            <a
              href={`mailto:${user.email}`}>
              Contact
            </a>
          </div>
        ))}
      </div>
      <div className="Container">
        <a href="/" className="Pages"> 1 </a>
        <a href="/Employees" className="Pages"> 2 </a>
      </div>
    </div>
  );
}

export default App;
