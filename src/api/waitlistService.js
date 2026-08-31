import axiosInstance from "./axiosInstance";

const roleMap = {
  Farmer: "FARMER",
  Buyer: "BUYER",
  Agent: "AGENT",
};

const formatNigerianPhone = (phone = "") => {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";

  if (digits.startsWith("234")) {
    return `+${digits}`;
  }

  const subscriberNumber = digits.startsWith("0") ? digits.slice(1) : digits;
  return `+234${subscriberNumber}`;
};

const getErrorMessage = (error) => {
  const responseData = error?.response?.data;
  const detail = responseData?.detail;

  if (Array.isArray(detail)) {
    const messages = detail
      .map((item) => item?.msg)
      .filter(Boolean)
      .join(". ");

    if (messages) return messages;
  }

  if (typeof detail === "string" && detail.trim()) {
    return detail;
  }

  if (
    typeof responseData?.message === "string" &&
    responseData.message.trim()
  ) {
    return responseData.message;
  }

  if (typeof responseData?.error === "string" && responseData.error.trim()) {
    return responseData.error;
  }

  if (error?.response?.status === 409) {
    return "This information has already been registered on the waitlist.";
  }

  if (error?.code === "ECONNABORTED") {
    return "The request timed out. Please check your connection and try again.";
  }

  if (!error?.response) {
    return "We couldn't reach AgroBridge right now. Please try again.";
  }

  return "We couldn't complete your waitlist request. Please try again.";
};

export const joinWaitlist = async (formData) => {
  const payload = {
    email: formData.email?.trim() || "",
    phone: formatNigerianPhone(formData.phoneNumber),
    fullName: formData.fullName?.trim() || "",
    role: roleMap[formData.role] ?? formData.role,
    location: formData.location?.trim() || "",
    source: "landing_page",
  };

  try {
    const response = await axiosInstance.post("/waitlist", payload);
    return response.data;
  } catch (error) {
    const normalizedError = new Error(getErrorMessage(error));
    normalizedError.status = error?.response?.status;
    normalizedError.cause = error;
    throw normalizedError;
  }
};
