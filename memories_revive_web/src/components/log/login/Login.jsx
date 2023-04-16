import React, { useContext, useRef } from 'react'
import AuthContext from '../../../contexts/AuthContext';
import "./style.scss"

const Login = () => {
    const {needLog, login, setNeedLog} = useContext(AuthContext);
    const click_inside = useRef(false);

    if (!needLog) {
		document.body.style.overflowY = "unset";
		return null;
	}

    document.body.style.overflowY = "hidden";

    return (
        <div className='main-log' onClick={() => {if(!click_inside.current){setNeedLog(false);click_inside.current = false}else{click_inside.current = false}}}>
			<div className='center-log' onClick={() => click_inside.current = true}>

            </div>
        </div>
    )
}

export default Login