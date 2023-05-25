import React, { useEffect, useRef } from "react";
import { createContext, useState } from "react";

const CustomisationContext = createContext();

export const CustomisationProvider = (props) => {
	const [frame, setFrame] = useState({
		model: 0,
		style: 0,
		frame: 2,
	});

	const set_frame = (edit) => {
		setFrame({ ...frame, ...edit });
	};

	return (
		<CustomisationContext.Provider
			value={{
				frame,
				set_frame,
			}}
		>
			{props.children}
		</CustomisationContext.Provider>
	);
};

export default CustomisationContext;
