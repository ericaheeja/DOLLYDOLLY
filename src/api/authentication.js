import { useEffect, useState } from "react";
import { app, auth } from "./firebase";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Authentication = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      listenAuth();
    };
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => console.log("signed out"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {!user && <Link to="/signin">Sign in</Link>}
      {user && <button onClick={logout}>Sign Out</button>}
    </>
  );
};

export default Authentication;
