const currentUrl = window.location.href;

const menuLinks = document.querySelectorAll('header li a');

menuLinks.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});

