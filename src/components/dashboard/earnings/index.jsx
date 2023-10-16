import styled from "styled-components";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Charts from "../common/charts";
import { Card } from "../../common";
import { getAllGigs } from "../../../Features/listing/listingReducer";
import { useDispatch } from "react-redux";
import { clearGigsAlert } from "../../../Features/listing/listingSlice";
import Widget from "../common/Widget";
import { Table } from "../../common/styles";
import TableCard from "../../common/TableCard";
import Checks from "../../common/svg/checks";
import { BiPlus, BiSearch } from "react-icons/bi";

export default function HostEarningIndex() {
  const { Gigs } = useSelector((store) => store.gigs);
  const { order, showAlert, alertText } = useSelector((store) => store.order);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsAlert());
    dispatch(getAllGigs());
  }, []);

  return (
    <>
      <HostEarningIndexPlaceContainer className="">
        <div className="w-100 auto flex column gap-4">
          <div className="flex column gap-1">
            <h3 className="family2 w-90 text-bold auto flex-1 fs-30 text-dark">
              Your Sales Balance is
              <span className="block text-grey3 text-bold w-50">
                $400,4000
              </span>
            </h3>
          </div>
          <div className="flex w-90 auto column" style={{ gap: ".8rem" }}>
            <Widget/>
            <Charts />
          </div>
        </div>
      </HostEarningIndexPlaceContainer>
    </>
  );
}

const HostEarningIndexPlaceContainer = styled.div`
  padding-top: 7rem;
  h3 {
    font-size: 60px;
    font-weight: 700;
    font-family: "Big Shoulders Text", cursive !important;

    span {
      color: var(--green);
    }
  }
`;