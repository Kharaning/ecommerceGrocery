import Index from "./components/index";
import Login from "./components/Login";
import Signup from "./components/signup";
import Profile from "./components/userprofile";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./assets/firebase";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser({ email: usr.email, uid: usr.uid });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index user={user} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile userC={user} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
