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

(async () => {
  const profileData = await fetchProfileData();
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
})();
