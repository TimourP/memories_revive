import React, { useContext, useRef, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import "./style.scss";
import login_image from "../../../assets/log/login-picture.png";
import { Icon } from "@iconify/react";

const Login = () => {
	const { needLog, login, setNeedLog, register } = useContext(AuthContext);
	const click_inside = useRef(false);
	const [logData, setLogData] = useState({
		is_login: true,
		email: "",
		password: "",
		first_name: "",
		last_name: "",
	});

	if (!needLog) {
		document.body.style.overflowY = "unset";
		return null;
	}

	document.body.style.overflowY = "hidden";

	const main_log = () => {
		if (logData.is_login) {
			login(logData.email, logData.password);
		} else {
			register(
				logData.email,
				logData.password,
				logData.first_name,
				logData.last_name
			);
		}
	};

	return (
		<div
			className="main-log"
			onClick={() => {
				if (!click_inside.current) {
					setNeedLog(false);
					click_inside.current = false;
				} else {
					click_inside.current = false;
				}
			}}
		>
			<div
				className="center-log"
				onClick={() => (click_inside.current = true)}
			>
				<div className="form-container">
					<ul className="log-header">
						<li
							className="absolute-close"
							onClick={() => setNeedLog(false)}
						>
							<Icon icon="material-symbols:close" />
						</li>
						<li
							onClick={() =>
								setLogData({ ...logData, is_login: true })
							}
							className={
								logData.is_login ? "selected click" : "click"
							}
						>
							Connexion
						</li>
						<li className="divider"></li>
						<li
							onClick={() =>
								setLogData({ ...logData, is_login: false })
							}
							className={
								!logData.is_login ? "selected click" : "click"
							}
						>
							Inscription
						</li>
					</ul>
					<div className="form-content">
						<form>
							<div className="input-label">
								<label htmlFor="email-input">Email</label>
								<input
									defaultValue={logData.email}
									onChange={(e) =>
										setLogData({
											...logData,
											email: e.target.value,
										})
									}
									placeholder="Entrez votre email"
									id="email-input"
									type="email"
									autoComplete="email"
								/>
							</div>
							{logData.is_login ? null : (
								<div className="input-row">
									<div className="input-label">
										<label htmlFor="name-input">Nom</label>
										<input
											onChange={(e) =>
												setLogData({
													...logData,
													last_name: e.target.value,
												})
											}
											defaultValue={logData.last_name}
											placeholder="Entrez votre nom"
											id="name-input"
											type="text"
										/>
									</div>
									<div className="input-label">
										<label htmlFor="name-input">
											Prénom
										</label>
										<input
											onChange={(e) =>
												setLogData({
													...logData,
													first_name: e.target.value,
												})
											}
											defaultValue={logData.first_name}
											placeholder="Entrez votre prénom"
											id="name-input"
											type="text"
										/>
									</div>
								</div>
							)}
							<div className="input-label">
								<label htmlFor="password-input">
									Mot de passe
								</label>
								<input
									onChange={(e) =>
										setLogData({
											...logData,
											password: e.target.value,
										})
									}
									defaultValue={logData.password}
									placeholder="Entrez votre mot de passe"
									id="password-input"
									type="password"
								/>
							</div>
						</form>
						<div className="row">
							<div className="checkbox-container">
								<input type="checkbox" id="remember-input" />
								<label htmlFor="remember-input">
									Se souvenir de moi
								</label>
							</div>
							<span>Mot de passe oublié</span>
						</div>
						<div className="log-button">
							<span onClick={main_log}>
								{logData.is_login
									? "Se connecter"
									: "Créer un compte"}
							</span>
						</div>
					</div>
				</div>
				<div className="log-image-container">
					<img src={login_image} />
				</div>
			</div>
		</div>
	);
};

export default Login;
