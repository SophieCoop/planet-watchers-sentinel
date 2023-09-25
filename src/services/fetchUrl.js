import { AUTH_ENCODING, images_api, ALL_FILTERED_PRODUCTS_URL } from "../constants/api_consts";

export const fetchAllData = () => {    
    return fetch(ALL_FILTERED_PRODUCTS_URL, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Authorization': AUTH_ENCODING
        }
    })
    .then(data => data.json());
}

export const fetchImage = (imageId) => {
    return fetch(images_api(imageId), {
        headers: {
            'Authorization': AUTH_ENCODING
        }
    })
    .then(data => data);
}