import React, { useEffect, useRef }  from 'react'
import { createContext, useState } from 'react';
import { getData, storeData } from '../functions/store_data';
import axios, { set_instance_token, unset_instance_token } from "../services/axios"

const AuthContext = createContext();

export const AuthProvider = (props) => {

	const [ user, setUser ] = useState({
		first_name: "Anonymous",
		last_name: "User",
		token: null,
	});
    const [needLog, setNeedLog] = useState(false);

	const login = async (email, password) => {
	}

	const setup = async () => {
		const app_data = getData();
	}

	useEffect(() => {
		setup();
	}, [])
	

    const register = async (email, password) => {
        
    }

	const logout = async () => {
		localStorage.clear();
		unset_instance_token();
		setUser({
			first_name: "Anonymous",
			last_name: "User",
			token: "",
		});
	}

	return (
		<AuthContext.Provider value={{ 
			user,
			login,
            register,
			logout,
            needLog,
            setNeedLog
		}}>
			{ props.children }
		</AuthContext.Provider>
	);
};

export default AuthContext;
