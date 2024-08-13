const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.fetchPackages = functions.https.onRequest(async (req, res) => {
  // Set CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    // Stop the function if the request is an OPTIONS request
    res.status(204).send('');
    return;
  }

  const url = "https://aio.server9.nelios.com/";
  const token = "QcKjgrWuKr0mYaavwwtpSvk7MyWhyWh3k0Secv";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Failed to fetch data"
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching packages:", error);
    return res.status(500).json({
      error: "Internal Server Error"
    });
  }
});
