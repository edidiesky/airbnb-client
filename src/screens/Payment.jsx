import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, Meta } from "../components/common";
import styled from "styled-components";
import PaymentIndex from "../components/payment";

export default function Payment() {
   const { GigsDetails } = useSelector(
     (store) => store.gigs
   );
  return (
    <>
      <Meta title={"Confirm and Pay"} />
      <Header type={"Confirm and Pay"} path={`rooms/${GigsDetails?._id}`} />
      <PaymentContainer>
        <PaymentIndex />
      </PaymentContainer>
    </>
  );
}

const PaymentContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  /* overflow: hidden; */
  /* padding-top: 12rem; */
  padding-top: 6rem;
  padding-top: 2rem;
  @media (max-width: 780px) {
    padding-top: 2rem;
  }
`;
