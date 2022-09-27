import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://reqres.in/api/users");
      setUser(res.data.data);
      console.log(res.data.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.avatar} alt="a face" />
            <p>
              {user.first_name} {user.last_name}
            </p>
            <a href="mailto:" {...user.email}>
              Contact
            </a>
          </div>
        ))}
    </div>
  );
}

export default App;
