import styled from "styled-components";
import React from "react";
import HostReservationsIndex from "../../components/dashboard/reservations";
import Footer from "../../components/common/Footer";

export default function HostReservations() {
  return (
    <>
      <HostListingsPlaceContainer className="flex column item-center justify-center">
        <div
          className="w-100"
          style={{ minHeight: "100vh", paddingTop: "8rem" }}
        >
          <HostReservationsIndex />
        </div>
        <Footer />
      </HostListingsPlaceContainer>
    </>
  );
}

const HostListingsPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
  /* padding-top: 3rem; */
`;
