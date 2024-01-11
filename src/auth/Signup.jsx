import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const register = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          history("/signin");
        })
        .catch((error) => console.log(error));
    } else {
      setPassword("");
      setPasswordConfirm("");
    }
  };

  return (
    <div className="max-w-72 m-auto h-auto mt-20 text-center">
      <p className="text-2xl mb-8">Sign Up</p>
      <p className="text-sm m-4">
        계정이 있으신가요?{" "}
        <span>
          <a className="font-bold underline" href="/signin">
            로그인
          </a>
        </span>
      </p>
      <form className="flex flex-col justify-center mt-5" onSubmit={register}>
        <input
          className="border p-1 mb-2"
          name="email"
          value={email}
          required
          placeholder="이메일을 입력하세요"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-1 mb-2"
          name="password"
          value={password}
          required
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="border p-1 mb-2"
          name="passwordConfirm"
          value={passwordConfirm}
          required
          type="password"
          placeholder="비밀번호를 확인하세요"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button className="mt-10 p-2 border rounded-3xl">회원가입</button>
      </form>
    </div>
  );
}

export default Signup;
