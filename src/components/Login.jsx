import "./login.scss";
import { Link,useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../assets/firebase";
import {useState} from "react"
function Login() {
  const [wrongPassword,setWrongPassword] = useState(false)
  const navigate = useNavigate();
  const sub = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      e.target.username.value,
      e.target.password.value
    )
      .then((userCredential) => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        setWrongPassword(true)
      });
  };
  return (
    <div className="loginContainer">
      <div className="bgCont"></div>

      <div className="formContainer">
        <form onSubmit={sub}>
          <span className="name">Grocerly</span>
          <input type="text" id="username" placeholder="Username" />
          <input
            type="password"
            id="password"
            autoComplete="on"
            placeholder="Password"
          />
          {wrongPassword ? <p>Wrong Password</p> : <p></p>}
          <button className="btn" type="submit">
            Log In
          </button>
        </form>
        <p>Dont you have account yet ? </p>
        <Link to="/signup">
          <h4 className="btn">REGISTER</h4>
        </Link>
      </div>
    </div>
  );
}
export default Login;
