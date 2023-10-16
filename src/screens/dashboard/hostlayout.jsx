import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import ListingHeader from "../../components/listing/ListingHeader";
const LayoutWrapper = styled.div`
  background: #fff;
  height: 100vh;
  overflow: auto;
  width: 100%;
  display: flex;

  .LayoutContainer {
    width: 100%;
    font-family: inherit;
    .OutletWrapper {
      width: 100%;
      @media (max-width: 980px) {
        transform: translateY(0);
        z-index: 9000;
      }
    }
  }
  h2 {
    @media (max-width: 1080px) {
      font-size: 2.8rem;
    }
    @media (max-width: 480px) {
      font-size: 2.4rem;
    }
  }
`;

export default function HostLayout() {
  return (
    <LayoutWrapper>
      {/* <Header /> */}
      <div className="LayoutContainer">
        <ListingHeader type={'dashboard'}/>
        <div className="OutletWrapper flex column">
          <Outlet />
        </div>
      </div>
    </LayoutWrapper>
  );
}
