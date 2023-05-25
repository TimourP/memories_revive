import React, { useContext, useEffect } from "react";
import "./style.scss";
import black_marble from "../../../assets/frame/marbre-noir.jpg";
import CustomisationContext from "../../../contexts/CustomisationContext";
import {
	frame_selector,
	models,
	style_selector,
} from "../../../constants/frame";

const move_with_mouse = (e) => {
	const width = e.target.offsetWidth;
	const height = e.target.offsetHeight;
	const main_frame = document
		.getElementById("main-frame")
		.getBoundingClientRect();
	const move_frame = document.getElementById("move-frame");
	const current_scroll =
		document.documentElement.scrollTop || document.body.scrollTop;
	let start_x = e.pageX - main_frame.left;
	let start_y = e.pageY - main_frame.top - current_scroll;
	if (start_x < 0) start_x = 0;
	else if (start_x > width) start_x = width;
	else if (start_y < 0) start_y = 0;
	else if (start_y > height) start_y = height;
	const move_elem = document.getElementById("move_elem");
	move_elem.style.transformOrigin = `${start_x * 2 - 100}px ${
		start_y * 2 - 100
	}px`;
	move_frame.style.top = `${e.pageY - current_scroll - 100}px`;
	move_frame.style.left = `${e.pageX - 100}px`;
};

const add_opacity = () => {
	const move_frame = document.getElementById("move-frame");
	move_frame.classList.remove("hide");
};

const remove_opacity = () => {
	const move_frame = document.getElementById("move-frame");
	move_frame.classList.add("hide");
};

const Frame = ({ is_from_zoom }) => {
	const { frame } = useContext(CustomisationContext);

	return (
		<div
			id={!is_from_zoom ? "main-frame" : "move-frame"}
			className={`main-frame ${is_from_zoom ? "absolute hide" : ""}`}
		>
			<div
				id={!is_from_zoom ? "main_elem" : "move_elem"}
				className="frame-content"
			>
				{frame_selector[frame.frame].color ? (
					<div
						className="background"
						style={{
							backgroundColor: frame_selector[frame.frame].color,
						}}
					></div>
				) : (
					<img
						className="background"
						src={frame_selector[frame.frame].image}
					/>
				)}
				<div className="frame-container">
					<div
						className={`frame type-${frame.style} ${
							models[frame.model].key
						}`}
						style={{
							backgroundColor: style_selector[frame.style].color,
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

const Render = ({ is_home }) => {
	const { frame, set_frame } = useContext(CustomisationContext);

	useEffect(() => {
		if (is_home) return;
		const main_view = document.getElementById("main-customizer");
		const main_frame = document.getElementById("main-frame");
		main_view.addEventListener("mousemove", move_with_mouse);
		main_frame.addEventListener("mouseenter", add_opacity);
		main_frame.addEventListener("mouseleave", remove_opacity);

		return () => {
			main_view.removeEventListener("mousemove", move_with_mouse);
			main_frame.removeEventListener("mouseenter", add_opacity);
			main_frame.removeEventListener("mouseleave", remove_opacity);
		};
	}, []);

	return (
		<div id="render-frame" className={`${is_home ? "home" : ""}`}>
			<div className="frame-header">
				<div className="pointer-container">
					<div className="pointer">
						<span className="title">Cadre</span>
						<span className="choice">
							{frame_selector[frame.frame].title}
						</span>
					</div>
					<div className="pointer style">
						<span className="title">Style</span>
						<span className="choice">
							{style_selector[frame.style].title}
						</span>
					</div>
				</div>
			</div>
			<div id="main-customizer">
				<Frame is_from_zoom={false} />
				{!is_home ? <Frame is_from_zoom={true} /> : null}
			</div>
		</div>
	);
};

export default Render;
