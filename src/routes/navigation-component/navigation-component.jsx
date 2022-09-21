import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "../navigation-component/navigation.styles.scss";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crownlogo className="logo" />
        </Link>
        <div className="navigation-link-container">
          <Link className="navigation-link" to="shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
