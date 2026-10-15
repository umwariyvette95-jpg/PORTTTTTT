const body = document.body;
const toggleButton = document.getElementById('th');

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
  });
}
