import React from "react";
import styled from "styled-components";
import ProfileInfo from "../../components/account/profile_info";

export default function ProfileInfoIndex() {
  return (
    <>
      <ProfileInfoContainer>

        <div style={{ minHeight: "100vh" }} className="w-100">
          <ProfileInfo />
        </div>
      </ProfileInfoContainer>
    </>
  );
}

const ProfileInfoContainer = styled.div`
  width: 100%;
`;
