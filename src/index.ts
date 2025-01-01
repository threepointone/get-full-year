export default async function getFullYear() {
  const response = await fetch("https://getfullyear.com/api/year");
  const data = await response.json();
  return data;
}
