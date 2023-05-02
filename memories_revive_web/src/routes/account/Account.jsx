import React, { useContext, useEffect } from 'react'
import "./style.scss"
import AuthContext from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
	const {setNeedLog, user, logout} = useContext(AuthContext);
	const navigate = useNavigate()

	useEffect(() => {
		if (!user.token) {
			navigate("/")
		}
	}, [user])
	

	return (
		<div id="account">
			<h1>{user.email}</h1>
			<div onClick={logout}>Logout</div>
		</div>
	)
}

export default Account