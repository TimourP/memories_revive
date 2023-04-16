export const storeData = (key, value) => {
    localStorage.setItem(key, value);
}

export const getData = () => {
	let get_dict = {
		token: null,
	}
	for (var key in get_dict) {
		const jsonValue = localStorage.getItem(key);
		get_dict[key] = jsonValue !== null ? jsonValue : null;
	}
	return get_dict;
}
