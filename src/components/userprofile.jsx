import { signOut, getAuth, updatePassword } from "firebase/auth";
import { auth } from "../assets/firebase";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import "./userProfile.scss";
import { useState } from "react";
const Profile = ({ userC }) => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const navigate = useNavigate();

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleNewPasswordRepeat = (e) => {
    setNewPasswordRepeat(e.target.value);
  };
  const auth = getAuth();
  const user = auth.currentUser;

  function changePassword(e) {
    e.preventDefault()
    if (newPassword.length > 0 && newPassword === newPasswordRepeat) {
      updatePassword(user, newPasswordRepeat)
        .then(() => {
          
          navigate(0);
        })
        .catch((error) => {
          console.log(error);
        });
      
    }
  }
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="userProfileContainer">
      <div className="profileContainer">
        <FaUserAlt className="pfpIcon" />
        <span>{userC.email}</span>
        <button onClick={handleLogout}>Sign Out</button>
      </div>
      <div className="changePasswordContainer">
        <span>Change Password</span>
        <div className="changePasswordForm">
          <form>
            <input
              id="newPassword"
              placeholder="New Password"
              onChange={handleNewPassword}
              type="password"
            />
            <input
              id="newPasswordRepeat"
              type="password"
              placeholder="Repeat New Password"
              onChange={handleNewPasswordRepeat}
            />
            {newPasswordRepeat.length > 0 &&
            newPassword != newPasswordRepeat ? (
              <p className="error">New Passwords Does Not Match</p>
            ) : (
              <h1></h1>
            )}

            <button type="submit" onClick={changePassword}>
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
