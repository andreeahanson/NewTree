import { x_app_id, x_app_key } from '../apiKey.js';

export const example = async () => {
  const url = `https://trackapi.nutritionix.com/v2/search/instant?query=branded`;
  try {
    const options = {
      method: "GET",
      headers: { 
        "x-app-id": x_app_id,
        "x-app-key": x_app_key
       }
    }
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Error uploading, response not ok");
    }
    const example = await response.json();
    console.log(example)
    // return example;
  } catch (error) {
    throw new Error(error.message);
  }
}