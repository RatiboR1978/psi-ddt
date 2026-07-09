function toggleDD(id) {
  var el = document.getElementById(id);
  var isOpen = el.classList.contains('open');
  document.querySelectorAll('.nav-dd.open').forEach(function(n) {
    n.classList.remove('open');
    n.querySelector('.nav-dd-btn').setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    el.classList.add('open');
    el.querySelector('.nav-dd-btn').setAttribute('aria-expanded', 'true');
  }
}
document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav-dd')) {
    document.querySelectorAll('.nav-dd.open').forEach(function(n) {
      n.classList.remove('open');
      n.querySelector('.nav-dd-btn').setAttribute('aria-expanded', 'false');
    });
  }
});

var header = document.getElementById('siteHeader');
window.addEventListener('scroll', function() {
  header.classList.toggle('scrolled', window.scrollY > 32);
});

function toggleMobileNav() {
  var panel = document.getElementById('mobileNav');
  var backdrop = document.getElementById('mobileNavBackdrop');
  var btn = document.getElementById('burgerBtn');
  var isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  backdrop.classList.toggle('open', !isOpen);
  panel.setAttribute('aria-hidden', String(isOpen));
  btn.setAttribute('aria-expanded', String(!isOpen));
  document.body.style.overflow = !isOpen ? 'hidden' : '';
}

function toggleMobileDD(btn) {
  var item = btn.closest('.mobile-nav-dd');
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.mobile-nav-dd.open').forEach(function (n) {
    n.classList.remove('open');
    n.querySelector('.mobile-nav-dd-btn').setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 1100) {
    var panel = document.getElementById('mobileNav');
    if (panel.classList.contains('open')) toggleMobileNav();
  }
});

function toggleFaq(btn) {
  var item = btn.closest('.faq-item');
  var answer = item.querySelector('.faq-a');
  var isOpen = item.getAttribute('data-open') === 'true';
  document.querySelectorAll('.faq-item[data-open="true"]').forEach(function (el) {
    el.setAttribute('data-open', 'false');
    el.querySelector('.faq-a').style.maxHeight = null;
    el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    item.setAttribute('data-open', 'true');
    answer.style.maxHeight = answer.scrollHeight + 'px';
    btn.setAttribute('aria-expanded', 'true');
  }
}

function toggleRev(btn) {
  var card = btn.closest('.rev-card');
  var expanded = card.getAttribute('data-expanded') === 'true';
  card.setAttribute('data-expanded', expanded ? 'false' : 'true');
  btn.textContent = expanded ? 'читать ещё' : 'скрыть';
}
