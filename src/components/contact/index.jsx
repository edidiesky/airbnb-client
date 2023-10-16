import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import LeftContact from "./left";
import RightContact from "./right";
import Selection from "../modals/SelectionModal";
import CalendarModal from "../modals/CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { CreateBuyerReservations } from "../../Features/reservations/reservationsReducer";
import { onAuthModal } from "../../Features/user/userSlice";

const ContactIndex = () => {
  const { GigsDetails } = useSelector((store) => store.gigs);
  const { userInfo } = useSelector((store) => store.user);
  const { ReservationsIsLoading } = useSelector((store) => store.reservations);
  const dispatch = useDispatch();
  const { selectmodal, calendarmodal } = useSelector((store) => store.gigs);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(0);
  const [adults, setAdults] = useState(2);
  // date
  const [dateRange, setDateRange] = useState({
    selection: {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  });

  const data = {
    children,
    infants,
    adults,
    startDate: moment(dateRange.selection.startDate).format("DD/MM/YYYY"),
    endDate: moment(dateRange.selection.endDate).format("DD/MM/YYYY"),
    qty: 1,
  };

  useEffect(() => {
    const backendStartDate = moment(GigsDetails?.listing_startDate).toDate();
    const backendEndDate = moment(GigsDetails?.listing_startDate)
      .add(GigsDetails?.listing_duration, "days")
      .toDate();
    setDateRange({
      selection: {
        startDate: backendStartDate,
        endDate: backendEndDate,
      },
    });
  }, [GigsDetails, setDateRange]);

  const handleSelect = (ranges) => {
    // console.log(ranges);
    const selectedStartDate = ranges.range1.startDate;
    const selectedendDate = ranges.range1.endDate;

    setDateRange({
      ...ranges.range1,
      selection: {
        startDate: selectedStartDate,
        endDate: selectedendDate,
      },
    });
  };

  const handleCreateReservation = () => {
    if (userInfo) {
      dispatch(CreateBuyerReservations(data));
    } else {
      dispatch(onAuthModal());
    }
  };

  let limit = adults + children + infants;
  return (
    <ContactWrapper className="w-85 auto">
      <div className="grid_auto w-90 auto">
        <LeftContact handleSelect={handleSelect} dateRange={dateRange} />
        <div className="rightwrapper flex column gap-2">
          <RightContact
            limit={limit}
            dateRange={dateRange}
            handleCreateReservation={handleCreateReservation}
          />
        </div>
      </div>
    </ContactWrapper>
  );
};
const ContactWrapper = styled.div`
  padding-top: 6rem;
  .bookBtn {
    border: 1px solid rgba(0, 0, 0, 1);
    padding: 1rem 2rem;
    border-radius: 10px;
    background-color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: all .5s;
    &:hover {
      background-color: #f7f7f7;
    }
  }
  .area {
    /* margin-bottom: 4rem; */
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    padding: 20px 30px;
    resize: none;
    /* padding-top: 4px; */
    height: 100%;
    width: 100%;
    font-family: inherit;
    height: 120px;
  }
  .grid_auto {
    display: grid;
    grid-gap: 6rem;
    grid-template-columns: 1fr auto;
    min-height: 70vh;
    @media (max-width: 1080px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }
  .listing_prop {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
  .Contact_left_top {
    @media (max-width: 580px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  /* place-items: start; */

  .rightwrapper {
    width: 100%;
  }
  .imageWrapper {
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      .imageGradient {
        opacity: 1;
      }
    }
    img {
      border-radius: inherit;
    }
    .imageGradient {
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: inherit;
      opacity: 0;
      z-index: 10;
      transition: all 0.4s;
    }
  }
`;
export default ContactIndex;
