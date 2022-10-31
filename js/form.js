let fullName, jobTitle, companyName, oneLine;

fullName = document.querySelector('#full-name');
jobTitle = document.querySelector('#job-title');
companyName = document.querySelector('#company-name');
oneLine = document.querySelector('#one-line');

let inputs = Array.from(document.querySelectorAll('input'));

function onSubmit() {
  console.log('onSubmit called');
  let form = {};
  inputs.forEach((input) => {
    if (input.name == 'full-name') {
      form.fullName = input.value;
    } else if (input.name == 'job-title') {
      form.jobTitle = input.value;
    } else if (input.name == 'company-name') {
      form.companyName = input.value;
    } else if (input.name == 'one-line') {
      form.oneLine = `“${input.value}.”`;
    }
  });

  saveForm(form);
}

function saveForm(form) {
  let jsonForm = JSON.stringify(form);
  window.localStorage.setItem('form', jsonForm);
}
