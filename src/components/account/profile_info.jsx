// import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inputData, inputData2 } from "../../utils/formdata";
import FormInput from "../forms/Input";
import {
  UpdateProfile,
  getSingleCustomer,
} from "../../Features/user/userReducer";
import Message from "../loaders/Message";
import { clearUserAlertError } from "../../Features/user/userSlice";
import LoaderIndex from "../loaders";
import Auth from "../common/svg/auth";
import Cart from "../common/svg/cart";

export default function ProfileInfo({ type }) {
  const dispatch = useDispatch();
  const { userInfo, showAlert, alertText, alertType, isLoading } = useSelector(
    (store) => store.user
  );
  const rightlist = [
    {
      icon:<Auth/>,
      text:"Why isn’t my info shown here?",
      subtext:"We’re hiding some account details to protect your identity."
    },
    {
      icon:<Cart/>,
      text:"Which details can be edited?",
      subtext:"Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again the next time you book—or to continue hosting."
    },
    {
      icon:<Auth/>,
      text:"What info is shared with others?",
      subtext:"Airbnb only releases contact information for Hosts and guests after a reservation is confirmed."
    }
  ]

  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    username: "",
    country: "",
    street: "",
    city: "",
    state: "",
  });
  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const {
    firstname,
    lastname,
    phone,
    email,
    username,
    country,
    street,
    city,
    state,
  } = formdata;

  const data = {
    firstname,
    lastname,
    phone,
    email,
    username,
    address: {
      country,
      street,
      city,
      state,
    },
  };

  useEffect(() => {
    if (userInfo) {
      dispatch(getSingleCustomer(userInfo?._id))
      setFormData({
        firstname: userInfo?.firstname,
        lastname: userInfo?.lastname,
        phone: userInfo?.phone,
        email: userInfo?.email,
        username: userInfo?.username,
        country:userInfo?.address?.country,
        street:userInfo?.address?.street,
        city:userInfo?.address?.city,
        state:userInfo?.address?.state,
      });
    }
  }, [userInfo, setFormData]);

  useEffect(() => {
    if (showAlert) {
      const clearalert = setTimeout(() => {
        dispatch(clearUserAlertError());
      }, 6000);
      return () => clearTimeout(clearalert);
    }
  }, [showAlert]);
  const handleUpdateUserProfile = () => {
    dispatch(UpdateProfile(data));
  };
  return (
    <>
      {isLoading && <LoaderIndex />}
      <Message showAlert={showAlert} alertText={"Success"} />
      <ProfileInfoContainer>
        <div className="ProfileInfoCenter column gap-2 flex w-85 auto">
          <h2 className="fs-35">Personal info</h2>
          <div className="wrapper">
            {/* form data input */}
            <div className="flex column gap-1">
              {/* name lagal */}
              <div className="flex bottom column gap-1">
                <span className="text-dark text-bold fs-18">
                  Legal name
                  <span className="text-grey text-light block fs-16">
                    This is the name on your travel document, which could be a
                    license or a passport.
                  </span>
                </span>
                <div className="grid wrap1 justify-space w-100">
                  {inputData2?.slice(0, 2).map((input) => {
                    return (
                      <FormInput
                        label={input.text}
                        onChange={onChange}
                        type={input.type}
                        name={input.name}
                        value={formdata[input.name]}
                        input={input}
                        key={input.id}
                        required={input.required}
                        pattern={input.pattern}
                        errorMessage={input.errorMessage}
                      />
                    );
                  })}
                </div>
              </div>
              {/* email legal */}
              <div className="flex bottom column gap-1">
                <span className="text-dark text-bold fs-18">
                  Email
                  <span className="block text-light fs-16">
                    Use an address you’ll always have access to.
                  </span>
                </span>
                <div className="flex gap-1 item-center justify-space w-100">
                  <FormInput
                    label={inputData2[2].text}
                    onChange={onChange}
                    type={inputData2[2].type}
                    name={inputData2[2].name}
                    value={formdata[inputData2[2].name]}
                    input={inputData2[2]}
                    key={inputData2[2].id}
                    required={inputData2[2].required}
                    pattern={inputData2[2].pattern}
                    errorMessage={inputData2[2].errorMessage}
                  />
                </div>
              </div>
              {/* phone number */}
              <div className="flex bottom bottom1 column gap-1">
                <span className="text-dark text-bold fs-18">
                  Phone numbers
                  <span className="block text-light fs-16">
                    Add a number so confirmed guests and Airbnb can get in
                    touch. You can add other numbers and choose how they’re
                    used.
                  </span>
                </span>
                <div className="flex gap-1 item-center justify-space w-100">
                  <FormInput
                    label={inputData2[3].text}
                    onChange={onChange}
                    type={inputData2[3].type}
                    name={inputData2[3].name}
                    value={formdata[inputData2[3].name]}
                    input={inputData2[3]}
                    key={inputData2[3].id}
                    required={inputData2[3].required}
                    pattern={inputData2[3].pattern}
                    errorMessage={inputData2[3].errorMessage}
                  />
                </div>
              </div>
              <div className="flex bottom bottom1 column gap-1">
                <span className="text-dark text-bold fs-18">
                  Address
                  <span className="block text-light fs-16">
                    Use a permanent address where you can receive mail.
                  </span>
                </span>
                <div className="flex column gap-1 item-start justify-space w-100">
                  <div className="wrap1">
                    <FormInput
                      label={inputData2[5].text}
                      onChange={onChange}
                      type={inputData2[5].type}
                      name={inputData2[5].name}
                      value={formdata[inputData2[5].name]}
                      input={inputData2[5]}
                      key={inputData2[5].id}
                      required={inputData2[5].required}
                      pattern={inputData2[5].pattern}
                      errorMessage={inputData2[5].errorMessage}
                    />
                    <div className=""></div>
                  </div>
                  <div className="w-100">
                    <FormInput
                      label={inputData2[6].text}
                      onChange={onChange}
                      type={inputData2[6].type}
                      name={inputData2[6].name}
                      value={formdata[inputData2[6].name]}
                      input={inputData2[6]}
                      key={inputData2[6].id}
                      required={inputData2[6].required}
                      pattern={inputData2[6].pattern}
                      errorMessage={inputData2[6].errorMessage}
                    />
                  </div>
                  <div className="wrap1">
                    <FormInput
                      label={inputData2[7].text}
                      onChange={onChange}
                      type={inputData2[7].type}
                      name={inputData2[7].name}
                      value={formdata[inputData2[7].name]}
                      input={inputData2[7]}
                      key={inputData2[7].id}
                      required={inputData2[7].required}
                      pattern={inputData2[7].pattern}
                      errorMessage={inputData2[7].errorMessage}
                    />
                    <FormInput
                      label={inputData2[8].text}
                      onChange={onChange}
                      type={inputData2[8].type}
                      name={inputData2[8].name}
                      value={formdata[inputData2[8].name]}
                      input={inputData2[8]}
                      key={inputData2[8].id}
                      required={inputData2[8].required}
                      pattern={inputData2[8].pattern}
                      errorMessage={inputData2[8].errorMessage}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div
                  onClick={handleUpdateUserProfile}
                  className="edit btn_1 fs-16 text-white"
                >
                  Save
                </div>
              </div>
            </div>
            <div className="flex wrap2 column gap-1">
              {
                rightlist.map(x=> {
                  return <div className="flex column bottom gap-2">
                    <span>{x.icon}</span>
                    <h4 className="fs-24 text-bold">{x.text}
                    <span style={{marginTop:"12px"}} className="fs-18 text-light block text-grey">{x.subtext}</span>
                    </h4>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </ProfileInfoContainer>
    </>
  );
}

const ProfileInfoContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  margin: 7rem auto;
  @media (max-width: 980px) {
    margin: 5rem auto;
  }
  .ProfileInfoCenter {
    width: 85%;
    @media (max-width: 780px) {
      width: 90%;
    }
  }
  .bottom.bottom1 {
    border: none !important;
  }
  .edit {
    padding: 1rem 2rem;
    border-radius: 10px;
    cursor: pointer;
    color: #fff !important;
    background-color: #000;
    &:hover {
      opacity: 0.7;
    }
  }
  .wrap1 {
    display: grid;
    width: 100% !important;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .wrapper {
    display: grid;
    width: 100% !important;
    padding: 0;
    border: none;
    grid-gap: 6rem;
    place-items: start;
    grid-template-columns: 1fr 30vw;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
  .wrap2 {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 2rem 1.7rem;
    border-radius: 10px;
    @media (max-width: 980px)  {
      display: none;
    }
  }
`;
