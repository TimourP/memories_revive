import React, { useContext, useEffect } from "react";
import "./style.scss";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
	const { is_login, user, logout } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!is_login()) {
			navigate("/");
		}
	}, [user]);

	return (
		<div id="account">
			<h1>{user.email}</h1>
			<div onClick={logout}>Logout</div>
		</div>
	);
};

export default Account;
