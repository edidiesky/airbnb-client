import React, { useEffect } from "react";
import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileLeftIndex from "./left";
import ProfileRightIndex from "./right";
import { getSingleCustomer } from "../../Features/user/userReducer";
import { getAllReviews } from "../../Features/reviews/reviewReducer";
import {
  getAllGigs,
  getHostListing,
} from "../../Features/listing/listingReducer";
import { getUserId } from "../../Features/listing/listingSlice";

export default function ProfileIndex() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { sellerId } = useSelector((store) => store.gigs);

  useEffect(() => {
    if (id) {
      dispatch(getSingleCustomer(id));
      dispatch(getAllReviews(id));
      dispatch(getUserId(id));
    }
  }, [id]);

  useEffect(() => {
    dispatch(getAllGigs());
  }, [sellerId]);

  return (
    <ProfileIndexContent>
      <div className="w-90 auto flex column">
        <div className="w-100 auto grid grid-auto grid-gap4">
          <ProfileLeftIndex />
          <ProfileRightIndex />
        </div>
      </div>
    </ProfileIndexContent>
  );
}

const ProfileIndexContent = styled.div`
  width: 100%;
  /* padding-top: 2rem; */
  .edit {
    cursor: pointer;
  }
  .border {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 1.4rem;
    border-radius: 15px;
  }
  .list1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 1rem;
    @media (max-width: 750px) {
      padding-bottom: 0.5rem;
    }
  }
  .avatar {
    width: 7rem !important;
    margin: 0 auto;
    height: 7rem !important;
  }
  .profileleft {
    position: sticky;
    top: 10%;
    @media (max-width: 980px) {
      flex-direction: row;
    }
    @media (max-width: 580px) {
      flex-direction: column;
    }
  }
  .authBottom {
    padding: 2rem;
    width: 350px;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin: 1.4rem auto;
    @media (max-width: 780px) {
      width: 70%;
    }
    @media (max-width: 450px) {
      width: 90%;
    }
  }
  .authCenter {
    padding: 3rem 2rem;
    width: 350px;
    box-shadow: 0 19px 39px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin: 1.4rem auto;
    background-color: #fff;
    @media (max-width: 780px) {
      width: 70%;
    }
    @media (max-width: 450px) {
      padding: 3rem 1rem;
      width: 96%;
      gap: 1rem;
    }
  }
  .grid-auto {
    display: grid;
    padding: 3rem;
    grid-template-columns: auto 1fr;
    grid-gap: 4rem;
    @media (min-width: 1500px) {
      grid-template-columns: auto 1fr;
    }
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      display: flex;
      padding: 3rem 0;
      flex-direction: column;
    }
  }
`;
