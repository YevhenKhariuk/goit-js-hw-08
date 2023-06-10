import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(handleFormInput, 500));

window.addEventListener('DOMContentLoaded', populateFormFields);

form.addEventListener('submit', handleSubmit);

let formData = {};

function handleFormInput(e) {
  const { name, value } = e.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormFields() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return;
    formData = JSON.parse(savedData);
    Object.entries(formData).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch (err) {
    console.log(err.message);
  }
}

function handleSubmit(event) {
  event.preventDefault();

  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();

  console.log(formData);
  formData = {};
}
