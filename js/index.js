document.addEventListener('DOMContentLoaded', updateBio);

let fullName, jobTitle, companyName, OneLine;

fullName = document.querySelector('#fullName');
jobTitle = document.querySelector('#jobTitle');
companyName = document.querySelector('#companyName');
oneLine = document.querySelector('#oneLine');

function updateBio() {
  let jsonForm = window.localStorage.getItem('form');
  if (jsonForm) {
    const form = JSON.parse(jsonForm);
    fullName.textContent = form.fullName;
    jobTitle.textContent = form.jobTitle;
    companyName.textContent = form.companyName;
    oneLine.textContent = form.oneLine;
  } else {
    fullName.textContent = 'John Nolan';
    jobTitle.textContent = 'Back-end developer';
    companyName.textContent = 'Listri Digital';
    oneLine.textContent =
      '“Experience is the name everyone gives to their mistakes.”';
  }
}
