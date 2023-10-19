import React from "react";
import styled from "styled-components";
import User from "../../components/common/svg/user";
import Payment from "../../components/common/svg/payment";
import Profile from "../../components/common/svg/Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const tabs = [
  {
    text: "Personal Info",
    desc: "Provide personal details and how we can reach you",
    icon: <User />,
    path:"/personal-info"
  },
  {
    text: "Login & Security",
    desc: "Update your pasword and secure your account",
    icon: <Payment />,
    path:"/login-and-security"
  },
  {
    text: "Payments & Payouts",
    desc: "Review payment, payouts, coupons, ",
    icon: <Payment />,
    path:""
  },
];

export default function AccountIndex() {
  const { userInfo } = useSelector((store) => store.user);

  return (
    <>
      <AccountContainer>
        <div style={{ minHeight: "100vh" }} className="w-100">
          <div className="w-85 top auto flex column">
            <h2 className="fs-40">
              Account
              <span className="block py-1 text-bold fs-20">
                {userInfo?.firstname} {userInfo?.lastname},{" "}
                <span className="text-light text-light fs-16">{userInfo?.email}</span>{" "}
              </span>
            </h2>
            <div className="wrapper">
              {tabs.map((x) => {
                return (
                  <Link
                    to={`/account-settings${x.path}`}
                    className="flex tabcard w-100 column"
                  >
                    <span style={{ marginBottom: "1.6rem" }}>{x.icon}</span>
                    <h4 className="fs-18 text-bold">
                      {x.text}
                      <span
                        style={{
                          fontWeight: "300",
                          fontSize: "15px",
                          marginTop: "9px",
                        }}
                        className="block text-light tex-grey"
                      >
                        {x.desc}
                      </span>
                    </h4>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </AccountContainer>
    </>
  );
}

const AccountContainer = styled.div`
  width: 100%;
  margin: 8rem auto;
  overflow: hidden;
  .top {
    width: 75%;
  }
  .wrapper {
    display: grid;
    width: 100% !important;
    gap: 1.4rem;
    margin-top: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    .tabcard {
      padding: 2rem;
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12) !important;
      border-radius: 12px;
      
    }
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
`;
