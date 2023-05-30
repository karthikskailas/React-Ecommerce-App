import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/crown.svg";
import "./navigation.styles.scss";
import { Fragment } from "react";

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<Logo />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
				</div>
			</div>
            <Outlet/>
		</Fragment>
	);
};

export default Navigation;