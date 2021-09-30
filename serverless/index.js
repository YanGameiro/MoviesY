const { default: axios } = require("axios");
require("dotenv").config();

exports.handler = async function (event, context) {
  try {
    const themoviedb_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.THEMOVIEDB_API_KEY}`;
    const { data } = await axios.get(themoviedb_url);

    console.log("process.env.THEMOVIEDB_API_KEY");
    console.log(process.env.THEMOVIEDB_API_KEY);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);
  }
};
