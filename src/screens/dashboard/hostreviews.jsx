import styled from "styled-components";
import React from "react";
import HostReviewsIndex from "../../components/dashboard/reviews";
import Footer from "../../components/common/Footer";

export default function HostReviews() {
  return (
    <>
      <HostReviewsPlaceContainer className="flex column item-center justify-center">
        {/* <HostReviewsPlace /> */}
        <div style={{minHeight:"100vh"}} className="w-100">
          <HostReviewsIndex />
        </div>
        <Footer />
      </HostReviewsPlaceContainer>
    </>
  );
}

const HostReviewsPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
  padding-top: 6rem;
  @media (max-width:680px) {
    padding-top: 6rem;
  }
`;
