export default async function getUser({ params }) {
  try {
    let result = await fetch(`/data/${params.username}.json`);
    return result.json();
  } catch (error) {
    console.log("GET USER ERROR:", error);
    return false;
  }
}
