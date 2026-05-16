
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen   = document.getElementById('icon-open');
const iconClose  = document.getElementById('icon-close');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  iconOpen.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  iconOpen.classList.remove('hidden');
  iconClose.classList.add('hidden');
}


const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target); 
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));


function submitForm() {
  const name  = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const msg   = document.getElementById('contact-msg').value.trim();


  if (!name || !email || !msg) {
    [['contact-name', name], ['contact-email', email], ['contact-msg', msg]].forEach(([id, val]) => {
      if (!val) {
        const el = document.getElementById(id);
        el.style.borderColor = '#f87171';
        el.style.boxShadow   = '0 0 0 3px rgba(248,113,113,0.15)';
        setTimeout(() => {
          el.style.borderColor = '';
          el.style.boxShadow   = '';
        }, 2000);
      }
    });
    return; 
  }

  document.getElementById('contact-name').value = '';
  document.getElementById('contact-email').value = '';
  document.getElementById('contact-msg').value   = '';

  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}