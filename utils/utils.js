import axios from "axios";

export const baseUrl = "https://api.sportsdata.io/v3/nba/scores/json";
export const injUrl = "https://api.sportsdata.io/v3/nba/projections/json";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY,
    },
    
  });

  return data;
};
