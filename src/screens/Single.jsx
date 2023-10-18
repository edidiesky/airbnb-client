import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Meta } from "../components/common";
import styled from "styled-components";
import SingleIndex from "../components/single";
import { getSingleGigsDetails } from "../Features/listing/listingReducer";
import { useParams } from "react-router-dom";
import { clearGigsAlert } from "../Features/listing/listingSlice";

export default function Single() {
 
  // actions
  const dispatch = useDispatch();
  const {id} = useParams()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsAlert())
    dispatch(getSingleGigsDetails(id))
  }, [id]);
  return (
    <>
      <Meta />
      <Header type={''} path={''} />
      <SingleContainer style={{minHeight:"100vh"}}>
        <SingleIndex />
      </SingleContainer>
    </>
  );
}

const SingleContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  /* overflow: hidden; */
  padding-top: 8rem;
  @media (max-width: 580px) {
    padding-top: 6rem;
  }
`;
