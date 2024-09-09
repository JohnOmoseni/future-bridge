import { AxiosResponse } from "axios";
import { handleApiError } from "@/utils";
import { ContactUsType, RegisterSchoolType } from "@/types/server";
import API_URLS from "../apiUrls";
import api from "../interceptors";

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
