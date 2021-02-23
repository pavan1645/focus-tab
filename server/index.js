const fetch = require('node-fetch');

exports.handler = async (event) => {
  const urlSearchParams = new URLSearchParams();
  const clientKey = process.env.ACCESS_KEY;
  const baseUrl = new URL('https://api.unsplash.com/collections/64567259/photos');
  urlSearchParams.append('client_id', clientKey);
  baseUrl.search = urlSearchParams;
  
  const res = await (await fetch(baseUrl.toString())).json();
  const body = res.map(photo => ({
    id: photo.id,
    image: photo.urls.full,
    name: photo.user.name,
    link: photo.user.links.html
  }))
  
  const response = {
      statusCode: 200,
      body: body,
  };
  return response;
};
