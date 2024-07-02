async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/rawlinsonlima/Rawlinson-Lima-Portifolio/main/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
