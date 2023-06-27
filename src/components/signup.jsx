import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../assets/firebase";
import { useState } from "react";
export default function Signup() {
  const [passMatch, setPassMatch] = useState(true);

  const navigate = useNavigate();
  const sub = (e) => {
    e.preventDefault();
    if (e.target.password.value === e.target.password2.value) {
      setPassMatch(true);
      createUserWithEmailAndPassword(
        auth,
        e.target.mail.value,
        e.target.password.value
      )
        .then((userCredential) => {
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setPassMatch(false);
    }
  };

  return (
    <div className="loginContainer">
      <div className="bgCont"></div>

      <div className="formContainer">
        <form onSubmit={sub}>
          <span className="name">Grocerly</span>
          <input type="email" id="mail" placeholder="E-mail" required />
          <input
            type="password"
            id="password"
            autoComplete="on"
            placeholder="Password"
            required
          />
          <input
            type="password"
            id="password2"
            autoComplete="on"
            placeholder="Confirm password"
            required
          />
          <button className="btn" type="submit">
            Register
          </button>
          {passMatch ? <p> </p> : <p>Passwords does not match</p>}
        </form>
        <p>Already have account ? </p>
        <Link to="/login">
          <h4 className="btn">Log in</h4>
        </Link>
      </div>
    </div>
  );
}
