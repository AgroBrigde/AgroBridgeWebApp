import axiosInstance from "./axiosInstance";

const partnershipTypeMap = {
  Investor: "INVESTOR",
  "Co-operative": "COOPERATIVE",
  "Agent Network": "AGENT_NETWORK",
  Logistics: "LOGISTICS",
  "Payment Provider": "PAYMENT_PROVIDER",
  Distributor: "DISTRIBUTOR",
  Other: "OTHER",
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

  if (typeof detail === "string" && detail.trim()) return detail;

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
    return "This partnership request has already been registered.";
  }

  if (error?.code === "ECONNABORTED") {
    return "The request timed out. Please check your connection and try again.";
  }

  if (!error?.response) {
    return "We couldn't reach AgroBridge right now. Please try again.";
  }

  return "We couldn't complete your partnership request. Please try again.";
};

export const submitPartnershipRequest = async (formData) => {
  const payload = {
    email: formData.email?.trim() || "",
    phone: formData.phone?.trim() || "",
    contactName: formData.contactPerson?.trim() || "",
    companyName: formData.orgName?.trim() || "",
    partnershipType:
      partnershipTypeMap[formData.partnerType] ?? formData.partnerType,
    message: formData.message?.trim() || "",
  };

  try {
    const response = await axiosInstance.post("/partner-waitlist", payload);
    return response.data;
  } catch (error) {
    const normalizedError = new Error(getErrorMessage(error));
    normalizedError.status = error?.response?.status;
    normalizedError.cause = error;
    throw normalizedError;
  }
};
