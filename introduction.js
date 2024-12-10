document.addEventListener('DOMContentLoaded', () => {
  const featureList = document.querySelectorAll('#features li');

  featureList.forEach((item) => {
      item.addEventListener('click', () => {
          alert(`You clicked on: ${item.textContent}`);
      });
  });
});