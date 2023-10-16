import React from "react";
import styled from "styled-components";
import Security from "../../components/account/login";
import ListingHeader from "../../components/listing/ListingHeader";

export default function SecurityIndex() {
  return (
    <>
      <SecurityContainer>
        <div style={{ minHeight: "100vh" }} className="w-100">
          <Security />
        </div>
      </SecurityContainer>
    </>
  );
}

const SecurityContainer = styled.div`
  width: 100%;
`;
