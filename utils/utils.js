import axios from "axios";

export const baseUrl = "https://api.sportsdata.io/v3/nba/scores/json";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY,
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/x-www-form-urlencoded'

    },
    withCredentials: false,
  });

  return data;
};
