import styled from "styled-components";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Rating from "../../common/svg/rating";
import { listingReviews } from "../../../data/reviewdata";

export default function HostReviewsIndex() {
  return (
    <>
      <HostReviewsIndexPlaceContainer className="flex item-center justify-center">
        <div className="w-90 auto top item-start justify-center flex column">
          <div className="top_center flex column gap-3 item-start">
            <h2
              style={{ fontWeight: "700" }}
              className="fs-35 text-start text-extra-bold"
            >
              Reviews
              <span className="fs-18 flex item-center" style={{ gap: ".2rem" }}>
                All listings <IoMdArrowDropdown fontSize={"20px"} />
              </span>
            </h2>

            {listingReviews?.length > 0 ? (
              <div className="rating_content auto wrapper reviews flex item-center column gap-1 justify-center">
                {listingReviews?.slice(0.3)?.map((x) => {
                  return (
                    <div className="reviewCard flex column gap-1">
                      <div className="flex item-center justify-start gap-1">
                        <img src={x.image} alt="" className="avatars" />
                        <h4 className="fs-18 family1">
                          Tonya
                          <span className="block fs-14 text-light">
                            {x.date}
                          </span>
                        </h4>
                      </div>
                      <h4 style={{fontSize:"17px"}} className="fs-16 text-light">"{x.comments}"</h4>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rating_content auto  grid gap-1 justify-center">
                <Rating />
                <div
                  className="w-85 auto flex item-center column justify-center"
                  style={{ gap: ".3rem" }}
                >
                  <h4 className="fs-20">Your first review will show up here</h4>
                  <span className="fs-16 text-light text-grey">
                    We’ll let you know when guests leave feedback.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </HostReviewsIndexPlaceContainer>
    </>
  );
}

const HostReviewsIndexPlaceContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  h2 {
    @media (max-width: 980px) {
      font-size: 30px;
    }
  }
  .reviewCard {
    padding: 2rem;
    border-radius: 6px;
  }
  .rating_content {
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 50%;
    @media (max-width: 980px) {
      width: 80%;
    }
    @media (max-width: 480px) {
      width: 95%;
    }
    &.wrapper {
      display: grid;
      width: 100% !important;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

      grid-gap: 1.5rem;
      @media (max-width: 980px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
    }
    /* &.reviews {
      border: none;
      padding: 0;
    } */
  }

  .avatars {
    width: 3rem !important;
    height: 3rem !important;
    border-radius: 50%;
    margin: 0 !important;
  }
  .top {
    width: 50%;
    @media (max-width: 980px) {
      width: 80%;
    }
    @media (max-width: 480px) {
      width: 95%;
    }
  }
`;
