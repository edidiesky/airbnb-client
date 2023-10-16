import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Header, Meta } from "../components/common";
import HomeIndex from "../components/home";
import styled from "styled-components";
import ProfileModal from "../components/modals/ProfileModal";
import { AnimatePresence } from "framer-motion";
import {
  clearGigsAlert,
  getAdults,
  getChildren,
  getEndDate,
  getLocation,
  getStartDate,
} from "../Features/listing/listingSlice";
import { getAllGigs } from "../Features/listing/listingReducer";
import HomeLoader from "../components/loaders/homeloader";
import SearchModal from "../components/modals/search/SearchModal";
import { useSearchParams } from "react-router-dom";
import { BsMap } from "react-icons/bs";
import Map from "../components/common/svg/map";
import Maps from "../components/process/Map";
import Message from "../components/loaders/Message";

export default function Home() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState(false);
  const [map, setMap] = useState(false);
  const [tab, setTab] = useState(-1);
  let [searchParams, setSearchParams] = useSearchParams();

  const [dateRange, setDateRange] = useState({
    selection: {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  });
  const [children, setChildren] = useState(0);
  const [location, setLocation] = useState("");
  const [infants, setInfants] = useState(0);
  const [adults, setAdults] = useState(0);
  const handleSelect = (ranges) => {
    // console.log(ranges);
    setTab(1);
    const selectedStartDate = ranges?.selection
      ? ranges?.selection?.startDate
      : ranges?.range1?.startDate;
    const selectedendDate = ranges?.selection
      ? ranges?.selection?.endDate
      : ranges?.range1?.endDate;

    setDateRange({
      ...ranges.selection,
      selection: {
        startDate: selectedStartDate,
        endDate: selectedendDate,
      },
    });
    setTab(3);
  };

  const startDate = moment(dateRange?.selection?.startDate).format(
    "MMMM Do YYYY"
  );
  const endDate = moment(dateRange?.selection?.endDate).format("MMMM Do YYYY");

  const { type, showAlert, alertText } = useSelector((store) => store.gigs);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsAlert());
    dispatch(getAllGigs());
  }, [type]);
  // actions
  const { profilemodal } = useSelector((store) => store.user);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [setLoader]);

   useEffect(() => {
     if (showAlert) {
       const timeout = setTimeout(() => {
         dispatch(clearGigsAlert())
       }, 6000);
       return () => clearTimeout(timeout);
     }
   }, [showAlert]);

  useEffect(() => {
    dispatch(getStartDate(startDate));
    dispatch(getEndDate(endDate));
    dispatch(getLocation(location));
    dispatch(getChildren(children));
    dispatch(getAdults(adults));
  }, [startDate, endDate, adults, dispatch, children, location]);

  return (
    <>
      {loader ? (
        <HomeLoader />
      ) : (
        <>
          <Meta />
          <Header
            adults={adults}
            children={children}
            infants={infants}
            startDate={startDate}
            endDate={endDate}
            setSearch={setSearch}
          />
          <AnimatePresence
            initial="false"
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {search && (
              <SearchModal
                startDate={startDate}
                endDate={endDate}
                dateRange={dateRange}
                adults={adults}
                setAdults={setAdults}
                children={children}
                infants={infants}
                setInfants={setInfants}
                setSearch={setSearch}
                handleSelect={handleSelect}
                setTab={setTab}
                tab={tab}
                location={location}
                setLocation={setLocation}
                setChildren={setChildren}
              />
            )}
          </AnimatePresence>

          <AnimatePresence
            initial="false"
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {profilemodal && <ProfileModal />}
          </AnimatePresence>
          <HomeContainer style={{ minHeight: "100vh" }}>
            {/* {map ? <Maps /> : <HomeIndex />} */}
            <Message showAlert={showAlert} alertText={alertText} />
            <HomeIndex />
            {/* 
            <div
              style={{ gap: ".6rem" }}
              onClick={() => setMap(!map)}
              className="showmapBtn fs-14 flex item-center"
            >
              {" "}
              {!map?'Show Map':"Hide Map"} <Map />
            </div> */}
          </HomeContainer>
        </>
      )}
    </>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 10rem;
  padding-bottom: 6rem;
  .showmapBtn {
    position: fixed;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, -10%);
    /* width:; */
    padding: 14px 22px;
    cursor: pointer;
    border-radius: 40px;
    z-index: 2000;
    background-color: #222;
    color: #fff;
    transition: all 0.5s;
    &:hover {
      transform: translate(-50%, -10%) scale(1.04);
    }
  }
`;
