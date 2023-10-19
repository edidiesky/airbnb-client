import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "./index.css";

import "aos/dist/aos.css";
import {
  Layout,
  Home,
  Single,
  // Login,
  // Register,
  ProtectRoute,
  Wish,
  Overview,
  AboutPlace,
  DescriptionOfplace,
  LocationOfplace,
  BasicInfoAboutPlace,
  Exception,
  BasicOfferOfPlace,
  PhotosAboutPlace,
  TitleOfPlace,
  InformationOfplace,
  PriceOfplace,
  ReviewOfplace,
  Payment,
  Reservations,
  Profile,
  DurationsOfplace,
  UserOrder,
  Chat,
  Contact
} from "./screens";
import {
  HostEarnings,
  HostGuests,
  HostInbox,
  HostLayout,
  HostListings,
  HostOrders,
  HostProfile,
  HostReviews,
  HostReservations,
} from "./screens/dashboard";
import AccountIndex from "./screens/account/account";
import LoaderIndex from "./components/loaders";
import HomeLoader from "./components/loaders/homeloader";
const HomeWrapper = lazy(() => import("./screens/Home"));
const ProfileInfoIndex = lazy(() => import("./screens/account/profile_info"));
const SecurityIndex = lazy(() => import("./screens/account/Security"));
const LayoutSecurity = lazy(() => import("./screens/account/Layout"));

export default function App() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  // // console.log(process.env.map_box_token)
  // const apiKey = import.meta.env.map_box_token;

  // console.log(apiKey);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<HomeLoader />}>
                <HomeWrapper />
              </Suspense>
            }
          />
          <Route path="/rooms/:id" element={<Single />} />
          <Route path="/users/show/:id" element={<Profile />} />
          <Route path="wishlists" element={<Wish />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="/:id/payment" element={<Payment />} />
          <Route path="/:id/order" element={<UserOrder />} />
          <Route path="/order" element={<UserOrder />} />
        </Route>
        {/* message */}
        <Route path={"/guest/inbox/"} element={<Layout type={"Message"} />}>
          <Route exact path="" element={<Chat />} />
        </Route>
         {/* Contact */}
         <Route path={"/contact_host/:id"} element={<Layout type={"Message"} />}>
          <Route exact path="" element={<Contact />} />
        </Route>
        {/* host listing routes */}
        <Route path={"/become-a-host"} element={<Layout type={"hosting"} />}>
          <Route path="overview" element={<Overview />} />
          <Route path=":selllerid/about-your-place" element={<AboutPlace />} />
          <Route path=":selllerid/structure" element={<DescriptionOfplace />} />
          <Route path=":id/location" element={<LocationOfplace />} />
          <Route path=":id/floor-plan" element={<BasicInfoAboutPlace />} />
          <Route path=":id/stand-out" element={<Exception />} />
          {/* <Route path=":id/amenities" element={<BasicOfferOfPlace />} /> */}
          <Route path=":id/photos" element={<PhotosAboutPlace />} />
          <Route path=":id/title" element={<TitleOfPlace />} />
          <Route path=":id/description" element={<InformationOfplace />} />
          <Route path=":id/duration" element={<DurationsOfplace />} />
          <Route path=":id/price" element={<PriceOfplace />} />
          <Route path=":id/reviews" element={<ReviewOfplace />} />
        </Route>
        {/* host dashboard routes */}
        <Route path={"/dashboard/hosting/"} element={<HostLayout />}>
          <Route exact path="earning" element={<HostEarnings />} />
          <Route exact path="profile" element={<HostProfile />} />
          <Route exact path="inbox" element={<HostInbox />} />
          <Route exact path="orders" element={<HostOrders />} />
          <Route exact path="guests" element={<HostGuests />} />
          <Route exact index element={<HostListings />} />
          <Route exact path="reviews" element={<HostReviews />} />
          <Route exact path="reservations" element={<HostReservations />} />
          {/* <Route path="listings" element={<host />} /> */}
        </Route>
        {/* account */}
        <Route
          path={"/account-settings/"}
          element={
            <Suspense fallback={<LoaderIndex />}>
              <LayoutSecurity />
            </Suspense>
          }
        >
          <Route
            exact
            path="login-and-security"
            element={
              <Suspense fallback={<LoaderIndex />}>
                <SecurityIndex />
              </Suspense>
            }
          />
          <Route
            exact
            path="personal-info"
            element={
              <Suspense fallback={<LoaderIndex />}>
                <ProfileInfoIndex />
              </Suspense>
            }
          />
          <Route index element={<AccountIndex />} />
        </Route>
      </Routes>
    </div>
  );
}
