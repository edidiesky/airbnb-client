import React from "react";
import moment from "moment";
import Location from "../common/svg/Location";
import Date from "../common/svg/Date";
import Kitchen from "../common/svg/kitchen";
import Room from "../common/svg/room";
import Pet from "../common/svg/pet";
import Tv from "../common/svg/tv";
import Fridge from "../common/svg/fridge";
import Sound from "../common/svg/sound";
import Carbon from "../common/svg/carbon";
import DateInput from "../forms/Date";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Key from "../common/svg/key";
const offerdata = [
  {
    image: <Kitchen />,
    text: "Kitchen",
  },
  {
    image: <Room />,
    text: "Dedicated workspace",
  },
  {
    image: <Pet />,
    text: "Pets allowed",
  },
  {
    image: <Tv />,
    text: "TV",
  },
  {
    image: <Fridge />,
    text: "Refrigerator",
  },
  {
    image: <Sound />,
    text: "Sound system",
  },
  {
    image: <Date />,
    text: "Long term stays allowed",
  },
  {
    image: <Carbon />,
    text: "Carbon Monoxide",
  },
];

const LeftCenter = ({ handleSelect, dateRange }) => {
  const { GigsDetails } = useSelector((store) => store.gigs);
  const startDate = moment(dateRange.selection.startDate).format(
    "MMMM Do YYYY"
  );
  const endDate = moment(dateRange.selection.endDate).format("MMMM Do YYYY");

  const differnceinDays = Math.round(
    (moment(dateRange.selection.endDate, "DD/MM/YYYY") -
      moment(dateRange.selection.startDate, "DD/MM/YYYY")) /
      (1000 * 3600 * 20)
  );
  return (
    <div className="flex column gap-2">
      {/* date picker  */}
      <div className="flex column w-100 gap-2">
        <div className="flex w-100 bottom justify-space item-center">
          <h3 className="fs-24 text-extra-bold">
            Contact {GigsDetails?.listing_host_Id?.username}
            <span
              style={{ marginTop: "10px" }}
              className="block fs-18 text-light text-grey"
            >
              Typically responds within an hour
            </span>
          </h3>
          <div className="flex justify-end">
            <img
              src={GigsDetails?.listing_host_Id?.image}
              alt=""
              className="avatar"
            />
          </div>
        </div>
        <div className="flex w-100 bottom column flex item-start gap-2">
          <h3 className="fs-24 text-bold">Most travelers ask about</h3>
          <div className="flex column gap-1">
            <h4 className="fs-18 text-extra-bold">Getting there</h4>
            <ul className="w-85 fs-18 auto flex column">
              <li style={{ listStyleType: "disc", fontWeight: "300" }}>
                Free parking on the premises.
              </li>
              <li style={{ listStyleType: "disc", fontWeight: "300" }}>
                Check-in for this home is between 3:00 PM and 11:00 PM and
                checkout is at 10:00 AM.
              </li>
            </ul>
          </div>
          <div className="flex column gap-1">
            <h4 className="fs-18 text-extra-bold">House details and rules</h4>
            <ul className="w-85 fs-18 auto flex column">
              <li style={{ listStyleType: "disc", fontWeight: "300" }}>
                No smoking. No parties or events. No pets.
              </li>
            </ul>
          </div>
          {/* prices */}
          <div className="flex column gap-1">
            <h4 className="fs-18 text-extra-bold">Price and availability</h4>
            <ul className="w-85 fs-18 auto flex column">
              <li style={{ listStyleType: "disc", fontWeight: "300" }}>
                {GigsDetails?.listing_host_Id?.username}’s home is available
                from Dec 8 – 13. Book soon.
              </li>
              <li style={{ listStyleType: "disc", fontWeight: "300" }}>
                Cancel up to 5 days before check-in and get a full refund. After
                that, cancel before check-in and get a 50% refund, minus the
                first night and service fee.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-100 bottom column item-start gap-2">
          <h3 className="fs-24 text-bold">
            Still have questions? Message the Host
          </h3>
          <div className="flex w-100 auto item-center justify-center gap-1">
            <textarea
              className="area flex item-center fs-16"
              placeholder="Type a message"
            ></textarea>
          </div>
          <div className="w-100 flex item-start">
            <div className="bookBtn item-center fs-18">Send Message</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCenter;
