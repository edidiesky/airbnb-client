import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import {
  offWishDeleteModal,
  removewishItem,
} from "../../Features/wish/wishSlice";
import { clearReservationsEroror } from "../../Features/reservations/reservationsSlice";
export default function ErrorModal({ errorMessage }) {
  // dispatch
  const dropin = {
    hidden: {
      y: "-100vh",
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 26,
        stiffness: 600,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const dispatch = useDispatch();

  return (
    <ErrorModalStyles
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
    >
      <div
        className="backdrop"
        onClick={() => dispatch(clearReservationsEroror())}
      ></div>
      <motion.div
        variants={dropin}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"erorrModal shadow"}
      >
        <div className="w-85 formwraper auto flex column gap-1">
          <h4 className="fs-14 text-erorr uppercase text-start text-bold">
            {errorMessage || "Erorr was found"}
          </h4>

          <div className="flex column gap-1 w-100">
            <div
              onClick={() => dispatch(clearReservationsEroror())}
              className="btn w-100 auto btn-1 fs-14 text-center text-white text-extra-bold"
            >
              Cancel
            </div>
          </div>
        </div>
      </motion.div>
    </ErrorModalStyles>
  );
}

const ErrorModalStyles = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 4800;
  align-items: center;
  justify-content: center;
  top: 0;
  .formwraper {
    padding: 2rem 0;
    width: 70%;
  }
  .btn.btn-2 {
    background-color: var(--red);
    padding: 0.9rem 1rem !important;
    border-radius: 40px;
    cursor: pointer;
  }

  .text-erorr {
    color: var(--red);
  }
  .btn.btn-1 {
    padding: 0.9rem 1rem !important;
    border-radius: 40px;

    background-color: transparent !important;
    color: var(--dark-1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      background-color: var(--grey-hover) !important;
    }
  }
  .label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
    font-size: 1.3rem;
    color: var(--dark-1);
    font-weight: 700;
    text-transform: capitalize;
    position: relative;

    span {
      font-size: 1.3rem;
      color: #c61212;
      font-weight: 600;
      display: none;
    }
  }

  .option {
    width: 100%;
    position: relative;
    text-align: center;
    padding: 0 1.4rem;
    font-size: 16px;
    color: var(--grey-1);
    &::after {
      width: 45%;
      height: 0.4px;
      content: "";
      background-color: var(--border);
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      width: 45%;
      height: 0.4px;
      content: "";
      background-color: var(--border);
      right: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .btn {
    padding: 1rem 2rem !important;
    opacity: 1 !important;
  }
  .authBtn {
    border: 1px solid var(--border);
    padding: 0.9rem 4rem;
    border-radius: 40px;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: var(--dark-grey-hover) !important;
    }
  }
  .LoginBottom {
    position: relative;
    padding: 0 1rem;
    /* padding-bottom: 1.6rem; */

    .option {
      width: 100%;
      position: relative;
      text-align: center;
      padding: 0 1.4rem;
      font-size: 14px;
      color: var(--dark-1);
      &::after {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .backdrop {
    background: rgba(0, 0, 0, 0.4);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .Logintop {
    z-index: 3000;
    position: sticky;
    left: 0;
    top: 0;
    top: 0;
    background-color: var(--top);
    z-index: 30;
    backdrop-filter: blur(12px);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .erorrModal {
    max-width: 600px;
    width: 360px;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px,
      rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
    position: relative;
    border-radius: 20px;
    border-top-right-radius: 20px;
    @media (max-width: 980px) {
      width: 70%;
    }
    @media (max-width: 580px) {
      width: 90%;
    }
  }
  .deleteCard_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 20px;
    position: relative;
  }
  .center_content {
    background: var(--white);
    position: relative;
  }
`;
