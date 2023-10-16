import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellerOrder } from "../../../Features/order/orderReducer";
import { Table } from "../../common/styles";
import TableCard from "../../common/TableCard";

export default function HostOrderIndex() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getSellerOrder());
  }, []);
  const { order, showAlert, alertText } = useSelector((store) => store.order);

  return (
    <>
      <HostOrderIndexPlaceContainer className="flex item-start column gap-2 justify-center">
        <h3 className="fs-30 w-85 auto text-bold">My Orders</h3>
        <div className="w-85 auto">
          {order?.length > 0 ? (
            <Table>
              <div className="TableContainer">
                <table className="tableWrapper">
                  <thead>
                    <tr>
                      <th>Guest Info</th>
                      <th>Guest Location</th>
                      <th>Rooms Image</th>
                      <th>Rooms Title</th>
                      <th>Status</th>
                      <th>Paid</th>
                      <th>Check In</th>
                      <th>Check Out</th>
                      <th>Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.map((x) => {
                      return (
                        <TableCard type={"sellerorder"} x={x} key={x?._id} />
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
            </Table>
          ) : (
            <h3 className="fs-24 w-100">
              My Orders
              <span
                className=" w-100
             block fs-16 w-90 text-light text-grey"
              >
                You have no orders
              </span>
            </h3>
          )}
        </div>
      </HostOrderIndexPlaceContainer>
    </>
  );
}

const HostOrderIndexPlaceContainer = styled.div`
  width: 100%;
  padding: 7rem 0;
`;
