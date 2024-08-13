export async function fetchPackages() {
  const firebaseFunctionUrl = "https://us-central1-abby-49058.cloudfunctions.net/fetchPackages";

  try {
    const response = await fetch(firebaseFunctionUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from Firebase Function");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw error;
  }
}
