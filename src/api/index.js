export const fetchData = async (country) => {
  let url = "";
  if (country !== "Global") {
    url = `https://covid19.mathdro.id/api/countries/${country}`;
  } else {
    url = `https://covid19.mathdro.id/api`;
  }
  const data = await fetch(url);

  const { confirmed, recovered, deaths, lastUpdate } = await data.json();
  return { confirmed, recovered, deaths, lastUpdate };
};
export const fetchCountries = async () => {
  const data = await fetch("https://covid19.mathdro.id/api/countries");
  const { countries } = await data.json();
  return countries;
};
