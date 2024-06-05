// Få den aktuelle URL
const currentUrl = window.location.href;

// Få alle links i menuen
const menuLinks = document.querySelectorAll('header li a');

// Loop gennem hvert link
menuLinks.forEach(link => {
  // Tjek om linkets href matcher den aktuelle URL
  if (link.href === currentUrl) {
    // Tilføj aktiv klasse
    link.classList.add('active');
  }
});