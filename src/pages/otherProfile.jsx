import UserProfile from "../components/userProfile/userProfile";

export const OtherProfile = ({ isLogin, setIsLogin }) => {
  return <UserProfile isLogin={isLogin} setIsLogin={setIsLogin} />;
};
