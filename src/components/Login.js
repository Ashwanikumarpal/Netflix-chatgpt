import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMesage] = useState(null);
  const navigate = useNavigate();

  const UserName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitButton = () => {
    //validate form data

    //console.log(email.current.value);
    //console.log(password.current.value);

    const msg = checkvalidData(email.current.value, password.current.value);
    setErrorMesage(msg);
    if (msg) return;

    if (!isSignInForm) {
      //sign up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: UserName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMesage(error.message);
            });
          //console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMesage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMesage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-3/12  p-12 absolute bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold  text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={UserName}
            type="text"
            placeholder="User Name"
            className="p-4 my-4 w-full bg-gray-700 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="E-Mail Address"
          className="p-4 my-4 w-full bg-gray-700 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 "
        />
        <p className="text-red-600 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={handleSubmitButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix. Sign up Now"
            : "Already Registered! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
