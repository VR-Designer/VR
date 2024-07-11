let hero_image = document.getElementById('hero');
console.log(hero_image);
let count = 1;

setInterval(() => {
  hero_image.src = `renders/ren_image${count}.jpeg`;
  console.log(hero_image.src);
  count++;
  if (count > 8) {
    count = 1;
  }
}, 2000);
