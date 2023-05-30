
const labels = document.querySelectorAll('label');

labels.forEach(label => {
  const input = label.previousElementSibling;

  label.addEventListener('click', () => {
    if (input.checked) {
      label.classList.toggle('selected');
      input.classList.toggle('selected');
    }
  });

  input.addEventListener('change', () => {
    if (input.checked) {
      label.classList.add('selected');
      input.classList.add('selected');
    } else {
      label.classList.remove('selected');
      input.classList.remove('selected');
    }
  });
});

