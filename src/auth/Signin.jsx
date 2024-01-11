import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../api/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Signin() {
  const history = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        history("/");
      })
      .catch((error) => console.log(error));
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        history("/");
      })
      .catch(console.error);
  };

  return (
    <div className="max-w-72 m-auto h-auto mt-20 text-center">
      <p className="text-2xl mb-8">Sign In</p>
      <p className="text-sm m-4">
        계정이 없으시다면?{" "}
        <span>
          <a className="font-bold underline" href="/signup">
            회원가입
          </a>
        </span>
      </p>
      <form className="flex flex-col justify-center mt-5" onSubmit={login}>
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
        <button className="mt-10 p-2 border rounded-3xl">로그인</button>
      </form>
      <div className="mt-5 p-2 border rounded-3xl text-white bg-black cursor-pointer">
        <button onClick={googleLogin}>구글로그인</button>
      </div>
    </div>
  );
}

export default Signin;
