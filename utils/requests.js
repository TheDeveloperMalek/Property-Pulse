const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
async function fetchProperty() {
  try {
    if (!apiDomain) return [];
    const res = await fetch(`${apiDomain}/properties`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchProperties() {
  try {
    if (!apiDomain) return null;
    const res = await fetch(`${apiDomain}/properties/`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperty, fetchProperties };
