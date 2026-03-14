import { api, API_URL } from "./api";

export const sendContactMessage = async (payload) => {
    const { data } = await api.post(API_URL.CONTACT, payload);
    return data;
};
