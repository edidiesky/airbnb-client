import React, { useEffect, useState } from "react";
// import '../index.css';
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/common/Footer";
import ListingHeader from "../../components/listing/ListingHeader";

export default function LayoutSecurity({ type }) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".layout");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);


  return (
    <LayoutContainer className="layout" style={{ height }}>
      <ListingHeader type={'account'} />
      <div style={{minHeight:"100vh"}} className="">
      <Outlet />
      </div>
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  .hostingbottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding-top: 1rem;
    z-index: 300;
    background-color: #fff;
    padding-bottom: 1rem;
  }
  .hostbtn {
    padding: 0.4rem 2rem;
    background-image: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    );
    /* padding: 0.8rem 2rem; */
    min-height: 3rem;
    display: grid;
    place-items: center;
    border-radius: 10px;
    color: #fff !important;
    border: none;
    outline: none;
    /* padding: 0.8rem 2rem; */
    border-radius: 10px;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
    &:hover {
      opacity: 0.6;
    }
    color: #fff;
    border-radius: 10px;

    &:hover {
      background-color: #e3dddd;
      color: var(--dark-1);
    }
    &.grey {
      background: transparent;
      color: var(--dark-1) !important;
      text-decoration: underline;
    }
  }
  .outletWrapper {
    padding-top: 4rem;
  }
  .layoutListing {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`;
