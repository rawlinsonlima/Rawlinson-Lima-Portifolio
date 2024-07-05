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

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
          <li>
              <h3 ${project.github ? 'class="github"' : ""}>${project.name}</h3>
              <a href="${project.url}" target="_blank">${project.url}</a>
          </li>
      `;
    })
    .join("");
}

function updateprofessionalExperience(profileData) {
  const professionalExperience = document.getElementById(
    "profile.professionalExperience"
  );
  professionalExperience.innerHTML = profileData.professionalExperience
    .map((job) => {
      return `
            <h3 class="title">${job.name}</h3>
            <p class="job-time">${job.period}</p>
            <ul class="job-description">
              <li>${job.description}</li>
            </ul>    
      `;
    })
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  // updatePortfolio(profileData);
  updateprofessionalExperience(profileData);
})();
