

import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {IoMdArrowDropdown} from 'react-icons/io'
import Rating from "../../common/svg/rating";
import { GetAllBuyerReservations } from "../../../Features/reservations/reservationsReducer";
import { Table } from "../../common/styles";
import TableCard from "../../common/TableCard";


export default function HostReservationsIndex() {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((store) => store.user);
  const { Reservations } = useSelector((store) => store.reservations);

    useEffect(() => {
      dispatch(GetAllBuyerReservations());
    }, []);

  return (
    <>
      <HostReservationsIndexPlaceContainer className="flex item-center justify-center">
        <div className="w-90 auto top item-start justify-center flex column">
          {Reservations?.length > 0 ? (
            <div className="w-100 flex column gap-2">
              <h3 className="fs-30 text-extra-bold">Reservations</h3>

              <Table>
                <div className="TableContainer">
                  <table className="tableWrapper">
                    <thead>
                      <tr>
                        <th>Rooms</th>
                        <th>Guests</th>

                        <th>STATUS</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Price</th>
                        <th>Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Reservations?.map((x) => {
                        return (
                          <TableCard type={"reservations"} x={x} key={x?._id} />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Table>
            </div>
          ) : (
            <div className="top_center flex column gap-3 item-start">
              <h2
                style={{ fontWeight: "700" }}
                className="fs-35 text-start text-extra-bold"
              >
                Reservations
                <span
                  className="fs-18 flex item-center"
                  style={{ gap: ".2rem" }}
                >
                  All listings <IoMdArrowDropdown fontSize={"20px"} />
                </span>
              </h2>
              <div className="rating_content flex item-center column gap-1 justify-center">
                <div
                  className="w-85 auto flex item-center column justify-center"
                  style={{ gap: ".3rem" }}
                >
                  <h4 className="fs-20">You have no upcoming reservations</h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </HostReservationsIndexPlaceContainer>
    </>
  );
}

const HostReservationsIndexPlaceContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  h2 {
    @media (max-width: 980px) {
      font-size: 30px;
    }
  }
  .rating_content {
    padding: 4rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .top {
    width: 95%;
  }
`;
