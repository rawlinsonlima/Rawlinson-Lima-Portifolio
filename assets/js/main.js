function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softskills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardskills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map((skill) => `<li><img src="${skill.logo}" alt="${skill.name}"></li>`)
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updatePortifolio(profileData) {
  const portifolio = document.getElementById("profile.portifolio");
  portifolio.innerHTML = profileData.portifolio
    .map((project) => {
      return `
        <li>
            <h3 ${project.github ? 'class = "github"' : ""}>${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>
        `;
    })
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortifolio(profileData);
})();
