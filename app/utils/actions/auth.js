import { ERR_SIGNUP, ERR_SIGNIN } from "utils/constants/messages";
import { BASE_URL, SCOPE } from "utils/constants/api_data";

function checkResponse(res, message) {
	if (!res.ok) {
		throw new Error(message);
	}
	return res.json();
}

export async function signUpApi(data) {
	const res = await fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'scope-key': SCOPE,
		},
		body: JSON.stringify(data),
	});

  return checkResponse(res, ERR_SIGNUP)
}

export async function signInApi(data) {
	const res = await fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'scope-key': SCOPE,
		},
		body: JSON.stringify(data),
	});

  return checkResponse(res, ERR_SIGNIN)
}
