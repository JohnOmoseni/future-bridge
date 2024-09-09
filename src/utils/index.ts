export const handleApiError = (error: any, message?: string) => {
	console.error(`API Error - ${message}:`, error);
	if (error.response) {
		// Server returned a responnse not in the 200 range
		console.error("Response data:", error.response.data);
		console.error("Response status:", error.response.status);
	} else if (error.request) {
		console.error("Request data:", error.request);
	} else {
		// No response from server - 404
		console.error("Error message:", error.message);
	}
	throw error;
};

export const wait = (ms: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};
