document.addEventListener('DOMContentLoaded', () => {
  function shuffleElements(container) {
      let elementsArray = Array.from(container.children);
      elementsArray.sort(() => Math.random() - 0.5);
      container.innerHTML = '';
      elementsArray.forEach(element => {
          container.appendChild(element);
      });
  }

  $('#work-design a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
      const targetId = e.target.getAttribute('href').substring(1);
      const container = document.querySelector(`#${targetId} .row`);
      if (container) {
          shuffleElements(container);
      }
  });
  const allTabContent = document.querySelectorAll('.tab-pane');
  allTabContent.forEach(tab => {
      shuffleElements(tab.querySelector('.row'));
  });
});


let hero_image = document.getElementById('hero');
console.log(hero_image);
let count = 1;

setInterval(() => {
  hero_image.src = `/renders/ren_image${count}.jpeg`;
  console.log(hero_image.src);
  count++;
  if (count > 8) {
    count = 1;
  }
}, 2000);

