import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app, auth } from "../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        history("/signin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-72 m-auto h-screen mt-10 text-center">
      <p className="text-2xl mb-8">Sign Up</p>
      <p className="text-sm m-4">
        계정이 있으신가요?{" "}
        <span>
          <a className="font-bold underline" href="/signin">
            로그인
          </a>
        </span>
      </p>
      <form className="flex flex-col justify-center" onSubmit={register}>
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
        <button className="mt-5 p-2 border rounded-3xl">회원가입</button>
      </form>
      <div className="mt-5 p-2 border rounded-3xl">
        <button>구글 회원가입</button>
      </div>
    </div>
  );
}

export default Signup;
