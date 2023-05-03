import React, { useEffect, useRef }  from 'react'
import { createContext, useState } from 'react';
import "./popup.scss"

const PopupContext = createContext();

let timout = null;

export const PopupProvider = (props) => {

	const [justAdd, setJustAddState] = useState(null);
    const [hide, setHide] = useState(true);

    const click_inside = useRef(false)

    const close = () => {
        if (!click_inside.current) {
            clearTimeout(timout)
            setHide(true);
        }
        click_inside.current = false;
    }

    const setJustAdd = (data) => {
        setJustAddState(data);
        setHide(false);
        timout = setTimeout(() => {
            setHide(true);
        }, 4000);
    }

    console.log(justAdd?.picture)

	return (
		<PopupContext.Provider value={{ 
			justAdd,
            setJustAdd
		}}>
            {
                <div onClick={close} id={`just-add-popup`} className={`${hide ? "remove": ""}`}>
                    <div onClick={() => click_inside.current = true} className={`just-add-content`}>
                        <img src={justAdd?.picture}/>
                        <p><span>{justAdd?.amount}×</span> {justAdd?.title} ajouté au panier</p>
                    </div>
                </div>
            }
			{ props.children }
		</PopupContext.Provider>
	);
};

export default PopupContext;
