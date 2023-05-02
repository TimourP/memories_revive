import React, { useEffect, useRef }  from 'react'
import { createContext, useState } from 'react';
import "./popup.scss"

const PopupContext = createContext();

let timout = null;

export const PopupProvider = (props) => {

	const [justAdd, setJustAddState] = useState({
        picture: "http://localhost:8000/media/product_images/produit_de_nettoyage.png",
        amount: 2,
        title: "PRODUIT DE NETTOYAGE",
        will_remove: true,
    });

    const click_inside = useRef(false)

    const close = () => {
        if (!click_inside.current) {
            clearTimeout(timout)
            setJustAddState({...justAdd, will_remove: true})
            setTimeout(() => {
                setJustAddState(null);
            }, 500);
        }
        click_inside.current = false;
    }

    const setJustAdd = (data) => {
        setJustAddState({...data, will_remove: false});
        timout = setTimeout(() => {
            setJustAddState({...justAdd, will_remove: true})
            setTimeout(() => {
                setJustAddState(null);
            }, 500);
        }, 4000);
    }

	return (
		<PopupContext.Provider value={{ 
			justAdd,
            setJustAdd
		}}>
            {
                <div onClick={close} id={`just-add-popup`} className={`${justAdd?.will_remove || !justAdd ? "remove": ""}`}>
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
