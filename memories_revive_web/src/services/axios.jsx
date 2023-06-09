import axios from "axios";

export const baseURL = "http://localhost:8080";
//export const baseURL = "https://api.memoriesrevive.timour.me"

const instance = axios.create({
	baseURL: `${baseURL}/api/`,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000,
});

export const set_instance_token = (token) => {
	instance.defaults.headers.authorization = `Bearer ${token}`;
};

export const unset_instance_token = () => {
	instance.defaults.headers.authorization = "";
};

export default instance;
