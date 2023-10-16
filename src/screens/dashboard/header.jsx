import React, { useState } from "react";
import "./index.css";
import styled from "styled-components";
import { FiKey } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { BsCalendar3 } from "react-icons/bs";
import { MdDashboard, MdAddBusiness, MdSettings } from "react-icons/md";
import { FaPen, FaUsers } from "react-icons/fa";
import Heart from "../../components/common/svg/heart";
import Logo from "../../components/common/svg/Logo";
import { BiSearch } from "react-icons/bi";

const HeaderWrapper = styled.div`
  padding: 1rem 0;
  background-color: #fafafa;
  position: sticky;
  top: 0;
  z-index: 2000;
  color: #fff;
  .wrapper {
    width: 90%;
  }
  h3 {
    font-family: "Montserrat", sans-serif;
  }
  .text {
    @media (max-width: 580px) {
      font-size: 13px;
      span {
        font-size: 10px;
      }
    }
  }
  .avatar {
    width: 3rem !important;
    height: 3rem !important;
    @media (max-width: 580px) {
      width: 2.4rem !important;
      height: 2.4rem !important;
    }
  }
  .left {
    input {
      border: none;
      outline: none;
      font-family: inherit;
      font-size: 14px;
      color: var(--grey-1);
      background-color: transparent;
    }
  }
  .list {
    width: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 780px) {
      display: none;
    }
    .nav-link {
      padding: 13px 16px;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      font-family: "Montserrat", sans-serif;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      border-radius: 4px;

      &:hover {
        background-color: rgba(255, 219, 226, 0.211);
      }
      svg {
        font-size: 18px;
      }
      &.active {
        background-color: rgba(255, 255, 255, 0.156);
      }
    }
  }
`;

export const sidebarData = [
  {
    id: 1,
    icon1: <MdDashboard />,
    title: "Dashboard",
    path: "",
  },
  {
    id: 2,
    icon1: <FiKey />,
    title: "Rooms",
    path: "listings",
  },
  { id: 4, icon1: <BsCalendar3 />, title: "Bookings", path: "orders" },
  { id: 7, icon1: <FaUsers />, title: "Conclerge", path: "" },

  { id: 5, icon1: <HiUsers />, title: "Guests", path: "guests" },
  { id: 6, icon1: <MdSettings />, title: "Settings", path: "Profile" },
];

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="sidebarContainer wrapper auto flex item-center justify-space">
        <div className="left justify-center text-dark fs-20 gap-1 flex item-center">
          <BiSearch />
          <input type="text" placeholder="Search destinations" />
        </div>
        <div className="right flex item-center" style={{ gap: ".5rem" }}>
          <img src="/images/user_3.jpg" alt="" className="avatar" />
          <h5 className="fs-14 text text-bold text-dark">
            Edidiong Essien
            <span className="block text-light fs-12">
              essienedidong@gmail.com
            </span>
          </h5>
        </div>
      </div>
    </HeaderWrapper>
  );
}
