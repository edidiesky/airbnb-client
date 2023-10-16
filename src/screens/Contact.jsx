import React, { useEffect } from "react";
import styled from "styled-components";
import ContactIndex from "../components/contact";
import { Meta } from "../components/common";
import ListingHeader from "../components/common/Header";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Meta title={"Contact Bookipy - Airbnb"} />
      <ChatContainer className="chatContainer w-100 column gap-3 flex item-start">
        <ListingHeader type="chat" />
        <ContactIndex />
      </ChatContainer>
    </>
  );
}
const ChatContainer = styled.div`
  width: 100%;
  @media (max-width: 780px) {
    padding: 0;
    gap: 0;
  }
`;
