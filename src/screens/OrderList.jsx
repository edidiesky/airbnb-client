import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Meta } from "../components/common";
import styled from "styled-components";

export default function Order() {
  const dispatch = useDispatch();

  return (
    <OrderListContainer>
      <Header type={""} path={''} />
      <OrderList />
    </OrderListContainer>
  );
}

const OrderListContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 5rem;
`;
