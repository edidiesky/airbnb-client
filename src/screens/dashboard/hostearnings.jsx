import styled from "styled-components";
import React from "react";
import HostEarningIndex from "../../components/dashboard/earnings";
import Footer from "../../components/common/Footer";

export default function HostEarnings() {
  return (
    <>
      <HostEarningsPlaceContainer className="flex column item-center justify-center">
        <div style={{minHeight:"100vh"}} className="wrapper w-90 auto flex column gap-1">
          <HostEarningIndex />
        </div>
        <Footer/>
      </HostEarningsPlaceContainer>
    </>
  );
}

const HostEarningsPlaceContainer = styled.div`
  width: 100%;
  .wrapper {
    /* width: 90%; */
  }
  /* overflow: hidden; */
  /* min-height: 70vh; */
`;
