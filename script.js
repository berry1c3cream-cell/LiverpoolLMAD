document.querySelector('.arrow.right').onclick = () => {
  document.querySelector('.carousel').scrollBy({
    left: 320,
    behavior: 'smooth'
  });
};

document.querySelector('.arrow.left').onclick = () => {
  document.querySelector('.carousel').scrollBy({
    left: -320,
    behavior: 'smooth'
  });
};