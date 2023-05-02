import React, { useEffect, useRef }  from 'react'
import { createContext, useState } from 'react';
import { getData, storeData } from '../functions/store_data';
import axios, { baseURL, set_instance_token, unset_instance_token } from "../services/axios"
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/slices/products';
import { fetchBasket } from '../store/slices/basket';

const AuthContext = createContext();

const default_user = {
	first_name: "Anonymous",
	last_name: "User",
	email: "",
	token: null,
}

export const AuthProvider = (props) => {

	const [ user, setUser ] = useState({
		first_name: "Anonymous",
		last_name: "User",
		email: "",
		token: null,
	});
	const dispatch = useDispatch();
    const [needLog, setNeedLog] = useState(false);

	const login = async (email, password) => {
		unset_instance_token();
		const resp = await axios.post(`${baseURL}/api/auth/login`, {
			email: email,
			password: password
		})
			.then(e => e.data)
			.catch(e => null)
		if (resp) {
			setUser({...user, ...resp.user, token: resp.token});
			set_instance_token(resp.token)
			storeData("token", resp.token)
			setNeedLog(false);
		}
	}

	const profile = async (token) => {
		const resp = await axios.post(`${baseURL}/api/me/profile`)
			.then(e => e.data)
			.catch(e => null)
		if (resp) {
			setUser({...user, ...resp, token: token});
			set_instance_token(token)
			storeData("token", token)
		} else {
			unset_instance_token();
			setUser(...default_user);
			localStorage.removeItem("token");
		}
	}

	const setup = async () => {
		const app_data = getData();
		if (app_data.token) {
			set_instance_token(app_data.token);
			profile(app_data.token);
		}
	}

	useEffect(() => {
		if (user.token) {
			dispatch(fetchBasket());
		}
	}, [user])
	

	useEffect(() => {
		setup();
		dispatch(fetchProducts());
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
