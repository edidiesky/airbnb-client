import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { AnimatePresence } from "framer-motion";
import Message from "../../loaders/Message";
import LoaderIndex from "../../loaders";
import Star from "../../common/svg/star";
import { AiOutlineCheck } from "react-icons/ai";

export default function ProfileLeftIndex({ id }) {
  const { review } = useSelector((store) => store.review);
  const { userDetails } = useSelector((store) => store.user);

  return (
    <div>
      {/* <Message
        showAlert={ReservationsUpdateIsSuccess}
        alertText={"Your reservation has been successfully updated"}
        handleClearAlert={dispatch(clearReservationsAlert())}
      /> */}
      <div className="w-100 profileleft flex column gap-1">
        <div className="authCenter flex item-start gap-1 justify-center w-90 auto shadow">
          <div className="authC_right flex gap-1 column flex-1">
            <img src={userDetails?.image} alt="" className="avatar" />
            <h3 style={{fontWeight:"800"}} className="fs-24 family1 text-center text-extra-bold text-dark">
              {userDetails?.firstname}
              <span className="block fs-14 text-light text-center family2">
                Superhost
              </span>
            </h3>
          </div>{" "}
          <div className="authC_right flex column flex-1">
            <div className="list1 fs-24 text-extra-bold text-dark">
              {review?.length || 0}{" "}
              <span className="block fs-12 text-light text-dark">Reviews</span>
            </div>
            {/* <div className="list1 fs-24 text-extra-bold text-dark">
              <div className="flex item-center gap-1 ">
                {review?.length || 0} <Star />
              </div>{" "}
              <span className="block fs-12 text-light text-dark">Rating</span>
            </div> */}
            <div className="list1 fs-24 text-extra-bold text-dark">
              1{" "}
              <span className="block fs-10 text-light text-dark">
                Year hosting
              </span>
            </div>
          </div>
        </div>
        <div className="authBottom flex item-start gap-1 column w-90 auto">
          <div className="authC_right flex gap-1 column flex-1">
            <h3 className="fs-24 family1 text-start text-bold text-dark">
              {userDetails?.username}'s confirmed information
            </h3>
          </div>{" "}
          <div className="authC_right flex column w-100 gap-1 ">
            <div className=" fs-24 flex item-center gap-1 text-light text-dark">
              <AiOutlineCheck/>
              <span className="fs-18">Identity</span>
            </div>
            <div className=" fs-24 flex item-center gap-1 text-light text-dark">
              <AiOutlineCheck/>
              <span className="fs-18">Email address</span>
            </div>
            <div className=" fs-24 flex item-center gap-1 text-light text-dark">
              <AiOutlineCheck/>
              <span className="fs-18">Phone number</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
