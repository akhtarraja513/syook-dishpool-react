import React, { useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Home from "./components/Home";
import Polling from './components/Polling';
import Result from './components/Result'
import axios from 'axios'
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {

  const [show, setShow] = useState(true);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("pollData", JSON.stringify(res.data))
      })
  }, []);

  return (
    <div className="App">
      {show ? (<>
        <div className="note">
        <strong>Note : </strong> After enter the username and password please go through with start polling box after that rank the items by 
        1,2 and 3 (one time you can rate maximum three items) then scroll up and click submit poll after click you can see the rating table.
      </div>
      <Login setShow={setShow}/>
      </>) : (
        <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/polling" element={<Polling />} />
        </Route>

        <Route exact path="/login" element={<Login />} />
        <Route path="/result" element={<Result />} />

      </Routes>
      )}
      
    </div>
  );
}

export default App;
