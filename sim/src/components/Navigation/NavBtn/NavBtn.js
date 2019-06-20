import React from "react";
import "./NavBtn.css";

const NavBtn = props => (
	<button {...props} className="btn btn-outline-dark navButton">
		{props.children}
	</button>
);

export default NavBtn;
