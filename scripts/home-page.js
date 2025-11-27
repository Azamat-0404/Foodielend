
// array [] -- object {}
const categories = [
  {
    image: "../img/image 25.png",
    name: "Breakfast"
  },
  {
    image: "../img/Group 879.png",
    name: "Vegan"
  },
  {
    image: "../img/image 21.png",
    name: "Meat"
  },
  {
    image: "../img/image 22.png",
    name: "Dessert"
  },
  {
    image: "../img/image 24.png",
    name: "Lunch"
  },


]
//  DOM
const categoriesBottom = document.querySelector(".categories-bottom");
categoriesBottom.innerHTML = "";
for (const category of categories) {
  categoriesBottom.innerHTML += `
      <div class="category-card">
        <img src="${category.image}" alt="">
        <p>${category.name}</p>
      </div>`
}