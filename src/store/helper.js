export const getHostInformation = () => '';

export const POSTCORS = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const CORS = {
  headers: {
    "Content-Type": "application/json",
  },
};

 