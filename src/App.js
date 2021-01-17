import { auth, GoogleSignIn } from "./firebase";
import { ReactComponent as Login } from "./assets/signin.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // State for storing user data
  const [user, setUser] = useState(null);

  // Should be called when SignIn with google is clicked
  const handleSignIn = () => {
    auth
      .signInWithPopup(GoogleSignIn)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(`Failed to SignIn : ${error.message}`);
      });
  };

  // Should be called when SignOut is clicked (We are Yet to add that button)
  const handleSignOut = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <div className="app">
      {!user ? (
        <>
          <h4>SIGNIN</h4>
          <Login className="app__loginSvg" />
          <button onClick={handleSignIn} className="app__buttonDiv">
            <img
              className="app__loginImg"
              alt="Google sign-in"
              src="https://i.ibb.co/qNdyvc7/google.png"
            />
            <div>SignIn with Google</div>
          </button>
        </>
      ) : (
        <>
          <h4>Sign Out</h4>
          <p>{`Hello ${user?.displayName} 👋`}</p>
          <button className="app__buttonDiv">
            <div onClick={handleSignOut}>Sign Out</div>
          </button>
        </>
      )}
    </div>
  );
}

export default App;
