import styled from "styled-components";
import React from "react";
import HostLsitingsIndex from "../../components/dashboard/listings";

export default function HostListings() {
  return (
    <>
      <HostListingsPlaceContainer className="flex column item-center justify-center">
        <div
          style={{ minHeight: "100vh" }}
          className="wrapper w-90 auto flex column gap-1"
        >
          <HostLsitingsIndex />
        </div>
      </HostListingsPlaceContainer>
    </>
  );
}

const HostListingsPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
  padding-top: 1rem;
`;
