import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app, auth, googleLogin } from "../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Signin() {
  const history = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        history("/");
      })
      .catch((error) => console.log(error));
  };

  // const handleGoogleLogin = () => {
  //   googleLogin().then(setUser);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   createUserWithEmailAndPassword(auth, email, password).then((data) => {
  //     console.log(data, "authData");
  //     history("/");
  //   });
  // };
  return (
    <div className="max-w-72 m-auto h-screen mt-10 text-center">
      <p className="text-2xl mb-8">Sign In</p>
      <p className="text-sm m-4">
        계정이 없으시다면?{" "}
        <span>
          <a className="font-bold underline" href="/signup">
            회원가입
          </a>
        </span>
      </p>
      <form className="flex flex-col justify-center" onSubmit={login}>
        <input
          className="border p-1 mb-2"
          name="email"
          value={email}
          placeholder="이메일을 입력하세요"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-1 mb-2"
          name="password"
          value={password}
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="mt-5 p-2 border rounded-3xl">로그인</button>
      </form>
      <div className="mt-5 p-2 border rounded-3xl">
        <button onClick={googleLogin}>구글로그인</button>
      </div>
    </div>
  );
}

export default Signin;
