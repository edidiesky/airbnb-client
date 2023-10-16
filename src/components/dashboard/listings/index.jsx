import styled from "styled-components";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Charts from "../common/charts";
import { Card } from "../../common";
import { getAllGigs } from "../../../Features/listing/listingReducer";
import { useDispatch } from "react-redux";
import { clearGigsAlert, getUserId } from "../../../Features/listing/listingSlice";
import Widget from "../common/Widget";
import { Table } from "../../common/styles";
import TableCard from "../../common/TableCard";
import Checks from "../../common/svg/checks";
import { BiPlus, BiSearch } from "react-icons/bi";
export default function HostLsitingsIndex() {
  const { Gigs, sellerId } = useSelector((store) => store.gigs);
  const { order, showAlert, alertText } = useSelector((store) => store.order);
  const { userInfo } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  //
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    
    if (userInfo?._id) {
      dispatch(getAllGigs());
      dispatch(getUserId(userInfo?._id));
    }
  }, [userInfo]);
  //
  useEffect(() => {
    dispatch(getAllGigs());
  }, [sellerId]);

  return (
    <>
      <HostLsitingsIndexPlaceContainer className="">
        <div className="w-90 auto flex column gap-4">
          <div className="flex column gap-1">
            <h3
              style={{ fontSize: "30px" }}
              className="fs-30 text-dark text-bold"
            >
              Welcome back, {userInfo?.firstname}
            </h3>
          </div>
          <div className="flex column" style={{ gap: ".8rem" }}>
            <div className="flex item-center justify-space w-100">
              <div className="flex item-start column gap-1">
                <h4
                  style={{ fontSize: "27px" }}
                  className="fs-30 text-dark text-bold"
                >
                  Your reservations
                </h4>
                <div className="w-100 flex item-center gap-2">
                  {/* <label htmlFor="search"></label> */}
                  <div className="flex item-center form">
                    <BiSearch />
                    <input
                      type="text"
                      placeholder="Search Listings"
                      className="search_input"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{ gap: ".5rem" }}
                className="headBtn flex item-center fs-14 text-dark text-bold"
              >
                <BiPlus fontSize={"17px"} /> Create Listing
              </div>
            </div>
            <div className="w-100">
              {Gigs?.length > 0 && (
                <Table>
                  <div className="TableContainer">
                    <table className="tableWrapper">
                      <thead>
                        <tr>
                          <th>Rooms Name</th>
                          <th>TODO</th>
                          <th>STATUS</th>
                          <th>bedroom</th>
                          <th>baths</th>
                          <th>beds</th>
                          <th>Price</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Gigs?.map((x) => {
                          return <TableCard x={x} key={x?._id} />;
                        })}
                      </tbody>
                    </table>
                  </div>
                </Table>
              )}
            </div>
            {/* {usernoOfpage > 0 && <Pagination type="users" />}
            </div>
            <div className="reservation_list">
              <div className="w-100 flex item-center gap-1 justify-center column gap-1">
                <Checks />
                <h5 style={{width:"20%"}} className="fs-16 auto text-center text-light">
                  You don’t have any guests checking out today or tomorrow.
                </h5>
              </div>
            </div>
          </div>
          {/* <Charts /> */}

            {/* booking history */}
            {/* <div className="grid wrapper">
            <div className="flex w-100 column gap-1">
              <div className="transaction_wrapper flex column gap-4">
                <h3 className="fs-20 text-extra-bold">Analytics</h3>
                <div className="flex column w-100 gap-1 py-2">
                  <Charts />
                </div>
              </div>
            </div>
            <div className="flex w-100 column gap-2">
              <Widget />
              <div className="transaction_wrapper flex column gap-4">
                <h3 className="fs-20 text-extra-bold">Booking History</h3>
                <div className="flex column w-100 gap-1 py-2">
                  {Gigs?.slice(0, 3)?.map((x) => {
                    return (
                      <div className="booking_card flex item-center gap-1 justify-space">
                        <div className="flex item-center gap-1">
                          <div
                            style={{ width: "5rem", borderRadius: "10px" }}
                            className="flex"
                          >
                            <img
                              style={{ borderRadius: "10px" }}
                              src={x?.listing_image[0]}
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="flex column" style={{ gap: ".4rem" }}>
                            <h4 className="text-bold fs-14">
                              Tente Glamping du Desert 3
                              <span className="block text-light fs-12">
                                03 August - 5 August
                              </span>
                            </h4>
                          </div>
                        </div>
                        <div className="flex booking_card_right justify-end">
                          <div className="listing_status text-bold fs-10 text-dark">
                            pending
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div> */}
            {/* orders */}
          </div>
        </div>
      </HostLsitingsIndexPlaceContainer>
    </>
  );
}

const HostLsitingsIndexPlaceContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 6rem;
  .form {
    width: 400px;
    /* background-color: red; */
    position: relative;
    svg {
      /* transform: translateX(170%); */
      font-size: 20px;
      position: absolute;
      left: 4%;
      color: var(--grey-1);
    }
    .search_input {
      width: 100%;
      border: none;
      outline: none;
      background-color: #f7f7f7;
      padding: 0.4rem 3rem;
      border: 2px solid rgba(0, 0, 0, 0.1);
      border-radius: 40px;
      font-family: inherit;
      font-size: 14px;
      color: var(--dark-1);
      &:hover {
        border: 2px solid rgba(0, 0, 0, 1);
      }
    }
  }
  .headBtn {
    border: 1px solid rgba(0, 0, 0, 1);
    padding: 0.6rem 1.7rem;
    border-radius: 40px;
    cursor: pointer;
    &:hover {
      background-color: #f7f7f7;
    }
  }

  .booking_card {
    display: flex;
    justify-content: space-between;
    @media (max-width: 680px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .reservation_list {
    padding: 3rem;
    background-color: #f7f7f7;
    border-radius: 5px;
  }
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .booking_card_right {
    display: flex;
    justify-content: flex-end;
  }
  .listing_status {
    padding: 10px;
    flex: 1;
    color: #000;
    border-radius: 10px;
    background: #fff4f4;
    font-weight: 600;
  }
  .transaction_wrapper {
    padding: 30px;
    background: #fff;
    display: flex;
    gap: 10px;
    width: 100%;
    border-radius: 10px;
    transition: all 0.3s;
    /* background-color: #fafafa; */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  .wrapper_2 {
    display: grid;
    width: 100%;
    grid-template-columns: 0.7fr 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 1.4rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }

  .wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: 30vw 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 1.4rem;
    place-items: start;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
`;
