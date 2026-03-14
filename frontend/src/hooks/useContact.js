import { useCallback, useState } from "react";
import { sendContactMessage } from "../services/contact.service";

export const useContact = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const submitContact = useCallback(async (payload) => {
        setLoading(true);
        setSuccess(false);
        setError(null);
        try {
            const data = await sendContactMessage(payload);
            setSuccess(true);
            return data;
        } catch (err) {
            setError(err?.response?.data?.message || err.message || "Failed to send message");
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const resetContactState = useCallback(() => {
        setLoading(false);
        setSuccess(false);
        setError(null);
    }, []);

    return {
        loading,
        success,
        error,
        submitContact,
        resetContactState,
    };
};
