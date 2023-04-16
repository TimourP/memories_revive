import React, { useEffect, useRef }  from 'react'
import { createContext, useState } from 'react';

const CustomisationContext = createContext();

export const CustomisationProvider = (props) => {

	const [frame, setFrame] = useState({
        model: ""
    })

	return (
		<CustomisationContext.Provider value={{ 
			frame,
		}}>
			{ props.children }
		</CustomisationContext.Provider>
	);
};

export default CustomisationContext;
