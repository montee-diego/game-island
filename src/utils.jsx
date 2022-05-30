export const resizeImage = (imageURL, size) => {
  let image = "";

  if (imageURL) {
    image = imageURL.match(/media\/screenshots|games/)
      ? imageURL.replace("/media/", `/media/resize/${size}/-/`)
      : imageURL;
  }

  return image;
};
