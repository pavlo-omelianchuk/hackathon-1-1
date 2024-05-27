export default async (request, context) => {
  console.log("context", context);
  const { searchParams } = new URL(request.url);
  const apiKey = "AIzaSyAGtrYV4g9feB2dZUQrVXKGkWQFnXgB3IU";
  const origins = searchParams.get("origins") || "Washington,DC";
  const destinations = searchParams.get("destinations") || "New York City,NY";

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origins
  )}&destinations=${encodeURIComponent(destinations)}&units=metric&key=${apiKey}`;

  // Handle OPTIONS method for preflight requests
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Failed fetching data" }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }
};