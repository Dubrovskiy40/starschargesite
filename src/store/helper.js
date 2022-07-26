export const getHostInformation = () => 'http://85.193.84.173:9164';

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
  // mode: 'no-cors',
  // method: "GET",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "http://localhost:3000",
    // "Origin": "http://localhost:3000"
  },
};

 