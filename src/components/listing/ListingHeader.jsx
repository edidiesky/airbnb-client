import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import Logo2 from "../common/svg/Logo12";
import { Link, NavLink } from "react-router-dom";
import Logo from "../common/svg/Logo";
import Dropdown from "../common/Dropdown";
import { useSelector } from "react-redux";

const sidebarData = [
  {
    id: 1,
    title: "Listings",
    path: "",
  },
  {
    id: 2,
    title: "Reviews",
    path: "Reviews",
  },
  { id: 4, title: "Reservations", path: "reservations" },

  { id: 5, title: "Earnings", path: "earning" },
  { id: 6, title: "Inbox", path: "Profile" },
  { id: 6, title: "Order", path: "orders" },
];
export default function ListingHeader({ type }) {
  const [drop, setDrop] = useState(false);
  const {userInfo} = useSelector(store=> store.user)

  if (type === "dashboard") {
    return (
      <>
        <ListingHeaderContainer className="type">
          <div className="aboutCenter flex item-center gap-3 justify-center w-90 auto">
            <Link to={"/"}>
              <Logo2 />
            </Link>
            <div
              style={{ gap: ".1rem" }}
              className="flex list w-100 justify-center item-center"
            >
              {sidebarData.map((x) => {
                return (
                  <NavLink
                    className="nav-link text-bold"
                    activeClassName="active"
                    to={`/dashboard/hosting/${x.path}`}
                    key={x.id}
                  >
                    <span className="span"> {x.title}</span>
                  </NavLink>
                );
              })}
            </div>
            <div className="flex top item-center gap-1 justify-end">
              <AnimatePresence
                initial="false"
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {drop && (
                  <Dropdown setDrop={setDrop} drop={drop} type={"type"} />
                )}
              </AnimatePresence>
              <div
                onClick={() => setDrop(!drop)}
                style={{
                  width: "2.7rem",
                  height: "2.7rem",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,.1)",
                  color: "#Fff",
                }}
                className="profile_wrapper flex item-center justify-center"
              >
                <div
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    borderRadius: "50%",
                    background: "#000",
                    color: "#Fff",
                    border: "2px solid #fff",
                  }}
                  className="fs-16 text-white flex item-center justify-center"
                >
                  {userInfo?.firstname.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </ListingHeaderContainer>
      </>
    );
  }
  if (type === "account") {
    return (
      <>
        {drop && (
          <div
            onClick={() => setDrop(false)}
            className="backdrop_dropdown absolute"
            style={{
              height: "100vh",
              width: "100vw",
              position: "absolute",
              zIndex: "1",
            }}
          ></div>
        )}
        <ListingHeaderContainer className="type">
          <div className="aboutCenter flex item-center gap-3 justify-space w-85 auto">
            <Link to={"/"}>
              <Logo />
            </Link>
            <div className="flex top item-center gap-1 justify-end">
              <Dropdown setDrop={setDrop} drop={drop} type={"type"} />
              <div
                onClick={() => setDrop(!drop)}
                style={{
                  width: "2.7rem",
                  height: "2.7rem",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,.1)",
                  color: "#Fff",
                }}
                className="profile_wrapper flex item-center justify-center"
              >
                <div
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    borderRadius: "50%",
                    background: "#000",
                    color: "#Fff",
                    border: "2px solid #fff",
                  }}
                  className="fs-16 text-white flex item-center justify-center"
                >
                  {userInfo?.firstname.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </ListingHeaderContainer>
      </>
    );
  }
  return (
    <>
      <ListingHeaderContainer>
        <div className="aboutCenter flex item-center gap-3 justify-center w-85 auto">
          <Logo2 />
          <div className="flex top item-center gap-1 justify-end w-100">
            
            <div className="headBtn fs-14 text-dark text-bold">Questions</div>
            <div className="headBtn fs-14 text-dark text-bold">Save & Exit</div>
          </div>
        </div>
      </ListingHeaderContainer>
    </>
  );
}

const ListingHeaderContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  top: 0;
  position: fixed;
  z-index: 300;
  background-color: #fff;
  .list {
    @media (max-width: 780px) {
      display: none;
    }
  }
  .dropdown {
    position: absolute;
    right: 3%;
    background-color: #fff;
    min-width: 240px;
    padding: 0.5rem 0;
    z-index: 200000;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    @media (min-width: 1807px) {
      right: 17%;
    }
    li {
      padding: 0.7rem 1.3rem;
      cursor: pointer;
      border-radius: inherit;
      &:hover {
        background-color: #f7f7f7;
      }
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.07); */
    }
  }

  .nav-link {
    padding: 7px 14px;
    font-size: 14.5px;
    color: var(--dark-1);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    border-radius: 40px;
    position: relative;

    &:hover {
      background-color: #f7f7f7;
      color: var(--dark-1);
      /* font-weight: 700; */
    }
    &.active {
      /* background-color: #000; */
      /* color: #fff; */
      background-color: #f7f7f7;
      /* 
          &::after {
            position: absolute;
            right: -6%;
            content: "";
            width: 4px;
            height: 100%;
            background-color: var(--red);
            @media (max-width: 980px) {
              display: none;
            }
          } */
    }
  }
  &.type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .profile_wrapper {
    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .top {
    position: relative;
    @media (max-width: 780px) {
      justify-content: flex-start;
    }
  }
  .aboutCenter {
    @media (max-width: 780px) {
      /* flex-direction: column; */
      /* align-items: flex-start; */
      gap: 1rem;
      justify-content: space-between;
    }
  }

  .headBtn {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 0.6rem 1.7rem;
    border-radius: 40px;
  }
`;
