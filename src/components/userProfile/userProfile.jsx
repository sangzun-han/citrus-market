import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCookie } from "../../service/cookie";
import { getInfo, getProductList } from "../../service/fetcher";
import Nav from "../nav/nav";
import ProfileHeader from "../profile/profileHeader";
import Product from "./product";
import UserProfileInfo from "./userProfileInfo";

const UserProfile = ({ isLogin }) => {
  const { accountName } = useParams();
  const token = getCookie("token");
  const [info, setInfo] = useState("");
  const [products, setProducts] = useState([]);
  const [follow, setFollow] = useState(null);
  const [follower, setFollower] = useState(null);

  useEffect(() => {
    getInfo(accountName, token).then((res) => {
      setInfo(res.data.profile);
      setFollow(res.data.profile.isfollow);
      setFollower(res.data.profile.followerCount);
    });
    getProductList(accountName, token).then((res) => {
      setProducts(res.data.product);
    });
  }, [accountName, token]);

  if (!isLogin) return <Redirect to={"/email-login"} />;

  return (
    <>
      <ProfileHeader />
      <UserProfileInfo
        info={info}
        token={token}
        accountName={accountName}
        follow={follow}
        setFollow={setFollow}
        follower={follower}
        setFollower={setFollower}
      />
      <Product products={products} />
      <Nav />
    </>
  );
};

export default UserProfile;
