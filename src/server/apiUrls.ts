export const API_DOMAIN =
	import.meta.env.VITE_API_ENDPOINT || "http://localhost:3000";

if (!API_DOMAIN) {
	throw new Error("API_DOMAIN is not defined in the environment variables.");
}

export default {
	// Auth Requests
	LOGIN: `${API_DOMAIN}/auth/login`,

	// POST Requests
	REGISTERSCHOOL: `${API_DOMAIN}/api/schoolsignup`,
	CONTACTUS: `${API_DOMAIN}/api/contactus`,
};
