/* eslint-env browser */
'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('visit__visible');
    } else {
      change.target.classList.remove('visit__visible');
    }
  });
}

const options = { threshold: [0.1] };
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.visit__photo');

for (const elm of elements) {
  observer.observe(elm);
}
