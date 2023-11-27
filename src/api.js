import axios from 'axios';
const UNSPLASH_CLIENT_ID = process.env.REACT_APP_UNSPLASH_CLIENT_ID;

const searchImages = async (term) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${term}`, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_CLIENT_ID}`,
      }
    });
    console.log(response.data.results);
    return response.data.results;
}

export default searchImages;