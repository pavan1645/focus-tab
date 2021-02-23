const fetch = require('node-fetch');

exports.handler = async (event) => {
  const urlSearchParams = new URLSearchParams();
  const clientKey = process.env.ACCESS_KEY;
  const baseUrl = new URL('https://api.unsplash.com/collections/64567259/photos');
  urlSearchParams.append('client_id', clientKey);
  baseUrl.search = urlSearchParams;
  
  const res = await fetch(baseUrl.toString())
  
  const response = {
      statusCode: 200,
      body: res.json(),
  };
  return response;
};
