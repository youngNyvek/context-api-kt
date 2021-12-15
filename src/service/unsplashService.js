import axios from "axios";

export const getImages = async () => {
  return axios
    .get(
      "https://api.unsplash.com/search/photos?query=clothes&client_id=-E0O_p7xRIvQt02pKx8bvPY4PpRh10l8jDFqYZ1Zw8c"
    )
    .then(res =>
      res.data.results.map(image => ({
        id: image.id,
        url: image.urls.small,
        text: image.alt_description,
      }))
    );
};
