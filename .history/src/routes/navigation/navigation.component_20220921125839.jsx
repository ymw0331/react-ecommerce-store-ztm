import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";

import "./navigation.style.scss";

const Navigation = () => {
  // tell navigation comp, whenever there is a change when inside the value
  // we rerender it
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);

  // hook up context with the firebase signout auth
  const signOutHandler = async () => {
    const res = await signOutUser();
    console.log(res);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {/* if currentUser, we show sign up, else show sign in */}
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
