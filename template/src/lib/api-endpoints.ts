import { checkResponse } from "./check-response";
import { BASE_URL } from "./constants";

export const getTestData = async () => {
  return fetch(`${BASE_URL}/posts`).then(checkResponse);
};
