const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Typing Animation
const typingElement = document.querySelector('.typing');
const words = ['a Developer.', 'a Designer.', 'a Creator.'];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  if (wordIndex >= words.length) wordIndex = 0;
  currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000); // Wait before deleting
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;
  }

  setTimeout(type, isDeleting ? 100 : 150);
}
<script>
  const toggle = document.getElementById("theme-toggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    // Change icon
    if (document.body.classList.contains("light-theme")) {
      toggle.textContent = "☀️";
    } else {
      toggle.textContent = "🌙";
    }
  });
</script>

document.addEventListener('DOMContentLoaded', type);
document.addEventListener("DOMContentLoaded", () => {
  const text = "Developer";
  const typingElement = document.querySelector(".typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 150);  // Typing speed: 150ms per letter
    }
  }

  type();
});
