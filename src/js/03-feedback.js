import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(handleFormInput, 500));

window.addEventListener('DOMContentLoaded', populateFormFields);

form.addEventListener('submit', handleSubmit);

function handleFormInput() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormFields() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
}
