 
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    const content = project.querySelector('.content');
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

document.querySelectorAll('.content').forEach(content => {
  content.addEventListener('click', e => {
    e.stopPropagation();
  });
});

const form = document.querySelector('form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function () {
  message.style.display = 'block';
});

