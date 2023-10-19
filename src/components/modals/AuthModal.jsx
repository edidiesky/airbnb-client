import React, { useEffect, useState } from "react";
import { useController, useForm } from "react-hook-form";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {
  clearUserAlertError,
  offAuthModal,
} from "../../Features/user/userSlice";
import Input from "../forms/Input";
import { slideUp } from "../../utils/framer";
import {
  UpdateProfile,
  loginCustomer,
  registerByGoogle,
  registerCustomer,
} from "../../Features/user/userReducer";
import LoaderIndex from "../loaders";
import Message from "../loaders/Message";
import FomickInput from "../forms/formick";
import useValidate from "../../hooks/useValidate";
import { inputData, inputData2 } from "../../utils/formdata";

export default function AuthModal({ type, click }, props) {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate()

  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    username: "",
  });
  const { email, password, firstname, lastname } = formdata;

  // dispatch
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const {
    userAlert,
    loginSuccess,
    alertType,
    usernamemodal,
    isLoading,
    showAlert,
    alertText,
    registerIsSuccess,
  } = useSelector((store) => store.user);
  const onSubmit = (e) => {
    e.preventDefault();
    if (auth) {
      // dispatch(loginCustomer(formdata));
      dispatch(loginCustomer({ email, password }));
      // console.log("login");
    } else {
      dispatch(registerCustomer({ email, firstname, lastname, password }));
      // console.log("registration");
    }
  };

  useEffect(() => {
    if (loginSuccess || registerIsSuccess) {
      setTimeout(() => {
        dispatch(offAuthModal());
      }, 5000);
      return () =>
        clearTimeout(
          setTimeout(() => {
            dispatch(offAuthModal());
          }, 5000),
          5000
        );
    }
  }, [loginSuccess, dispatch, registerIsSuccess]);
  // open modal if type  === users

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        dispatch(clearUserAlertError());
      }, 5000);
      return () => clearTimeout(dispatch(clearUserAlertError()), 4000);
    }
  }, [showAlert]);

  const handleOauth = ()=> {
    window.location.href = "http://localhost:5000/auth/google/login";
  }

  return (
    <DeleteContainer
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
    >
      <div className="backdrop" onClick={() => dispatch(offAuthModal())}></div>
      {isLoading && <LoaderIndex />}
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow"}
      >
        <div className="w-100 authTop fs-16 text-extra-bold text-dark flex item-center justify-space">
          <div className="w-90 auto flex item-center justify-space text-center">
            {" "}
            <div
              onClick={() => dispatch(offAuthModal())}
              className="icon flex item-center justify-center"
            >
              <RxCross2 fontSize={"20px"} />
            </div>{" "}
            <span className="text-center text-extra-bold w-100">
              Login or Sign up
            </span>
          </div>
        </div>

        <div className="w-90 authBottom auto flex column">
          <Message
            alertType={alertType}
            alertText={alertText}
            showAlert={showAlert}
          />
          <h3 className="fs-24 py-1 text-dark text-bold">Welcome to Airbnb</h3>

          <form
            onSubmit={onSubmit}
            style={{ gap: ".2rem" }}
            className="flex column"
          >
            {!auth ? (
              <>
                {inputData2.slice(0, 3).map((input) => {
                  return (
                    <Input
                      label={input.text}
                      onChange={onChange}
                      type={input.type}
                      name={input.name}
                      value={formdata[input.name]}
                      input={input}
                      key={input.id}
                      required={input.required}
                      pattern={input.pattern}
                      errorMessage={input.errorMessage}
                    />
                  );
                })}
                <Input
                  label={inputData2[4].text}
                  onChange={onChange}
                  type={inputData2[4].type}
                  name={inputData2[4].name}
                  value={formdata[inputData2[4].name]}
                  input={inputData2}
                  key={inputData2[4].id}
                  required={inputData2[4].required}
                  pattern={inputData2[4].pattern}
                  errorMessage={inputData2[4].errorMessage}
                />
              </>
            ) : (
              <>
                {inputData.slice(1, 3)?.map((input) => {
                  return (
                    <Input
                      label={input.text}
                      onChange={onChange}
                      type={input.type}
                      name={input.name}
                      value={formdata[input.name]}
                      input={input}
                      key={input.id}
                      required={true}
                      pattern={input.pattern}
                      errorMessage={input.errorMessage}
                    />
                  );
                })}
              </>
            )}

            <h5
              style={{ margin: ".4rem auto", lineHeight: "1" }}
              className="fs-10 text-light text--grey"
            >
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
              <span className="fs-12 text-dark text-extra-bold">
                Privacy Policy
              </span>
            </h5>
            <button
              type="submit"
              className="btn w-100 text-bold fs-14 text-white text-center"
            >
              {" "}
              {!auth ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <div className="flex column gap-1" style={{ marginTop: "1rem" }}>
            <div className="option">or</div>

            <div className="flex column gap-1">
              <div
                onClick={handleOauth}
                className="authBtn flex fs-14 text-dark item-center justify-space"
              >
                <FcGoogle fontSize={"20px"} />{" "}
                <div className="w-100 text-bold text-center">
                  Continue with Google
                </div>{" "}
              </div>
            </div>
            <div className="w-100 fs-12 text-light text-grey text-center">
              {!auth ? "Already a member?" : "Not a member?"}{" "}
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => setAuth(!auth)}
                className="text-red fs-12 text-bold"
              >
                {auth ? "Sign Up" : "Sign In"}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </DeleteContainer>
    // <h2>hello</h2>
  );
}

const DeleteContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;

  display: flex;
  z-index: 800;
  align-items: center;
  justify-content: center;
  top: 0;
  .btn {
    outline: none;
    border: none;
    background-image: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    );
    color: #fff;
    padding: 0.8rem 2rem;
    border-radius: 10px;
    /* margin: 1rem 0; */
    &:hover {
      opacity: 0.8;
    }
  }
  .authBtn {
    border: 1px solid rgba(0, 0, 0, 1);
    padding: 0.8rem 2rem;
    border-radius: 8px;
  }
  .icon {
  }
  .icon:hover {
    background-color: #ccc;
  }
  .authBottom {
    position: relative;
    padding: 0 1rem;
    padding-bottom: 1.6rem;

    .option {
      width: 100%;
      position: relative;
      text-align: center;
      padding: 0 1.4rem;
      font-size: 14px;
      color: var(--grey-1);
      &::after {
        width: 45%;
        height: 0.2px;
        content: "";
        background-color: rgba(0, 0, 0, 0.1);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.1);
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .backdrop {
    background: rgba(0, 0, 0, 0.3);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .authTop {
    padding: .7rem 0;
    font-size: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .deleteCard {
    width: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    gap: 1rem;
    border-radius: 10px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
    @media (max-width: 980px) {
      width: 60%;
    }
    @media (max-width: 780px) {
      width: 80%;
    }
    .cross {
      position: absolute;
      right: 10px;
      top: 20px;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: var(--grey-4);
      }
      svg {
        font-size: 17px;
      }
    }
  }
`;
