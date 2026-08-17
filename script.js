const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Light Mode';
  } else {
    toggleButton.textContent = 'Dark Mode';
  }
});

const form = document.getElementById('contact-form');
const messageInput = document.getElementById('message');
const charCount = document.getElementById('char-count');
const confirmation = document.getElementById('confirmation');

messageInput.addEventListener('input', () => {
  const length = messageInput.value.length;
  charCount.textContent = ${length} characters;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  confirmation.textContent = 'Thank you! Your message has been sent.';
  form.reset();
  charCount.textContent = '0 characters';
});