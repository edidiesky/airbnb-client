import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export default function SecurityInfo({ type }) {
  return (
    <>
      <SecurityInfoContainer>
        <div className="aboutCenter flex item-center gap-3 justify-center w-85 auto"></div>
      </SecurityInfoContainer>
    </>
  )
  
}

const SecurityInfoContainer = styled.div`
  width: 100%;

  .headBtn {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 0.6rem 1.7rem;
    border-radius: 40px;
  }
`;
