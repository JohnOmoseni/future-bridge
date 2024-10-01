import { AxiosResponse } from "axios";
import { handleApiError } from "@/utils";
import { ContactUsType, RegisterSchoolType } from "@/types/server";
import api, { api_website_2 } from "../interceptors";
import API_URLS from "../apiUrls";

export const publicApi = {
	registerSchool: async (
		data: RegisterSchoolType
	): Promise<AxiosResponse["data"]> => {
		try {
			const response = await api.post(`${API_URLS.REGISTERSCHOOL}`, data);
			console.log("Regiter school response", response);
			return response.data;
		} catch (error) {
			handleApiError(error);
		}
	},

	postContactUs: async (data: ContactUsType): Promise<any> => {
		try {
			const response = await api.post(`${API_URLS.CONTACTUS}`, data);
			console.log("Contact us response", response);

			return response.data;
		} catch (error) {
			handleApiError(error, "Something went wrong");
		}
	},
};

export const publicApiWebsite2 = {
	// GET REQUESTS
	getRequestId: async (): Promise<AxiosResponse["data"]> => {
		try {
			const response = await api_website_2.get(`${API_URLS.GET_NEW_ADMISSION}`);
			console.log("[GET NEW REQUESTID]", response);

			return response.data;
		} catch (error) {
			handleApiError(error);
		}
	},

	getAdmissionDetails: async (id: string): Promise<AxiosResponse["data"]> => {
		try {
			const response = await api_website_2.get(
				`${API_URLS.GET_NEW_ADMISSION}/${id}`
			);
			console.log("[GET ADMISSION DETAILS]", response);

			return response.data;
		} catch (error) {
			handleApiError(error);
		}
	},

	// POST REQUESTS
	postNewAdmission: async (data: any): Promise<any> => {
		try {
			const response = await api_website_2.post(
				`${API_URLS.POST_NEW_ADMISSION}`,
				data
			);
			console.log("[POST NEW ADMSSION]", response);

			return response.data;
		} catch (error) {
			handleApiError(error);
		}
	},
};
