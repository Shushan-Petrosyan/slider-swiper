const showAllBrands = document.querySelector(".show-more");
const brands = document.querySelector(".brands-container");
const showBrandText = document.querySelector("#show-brand-text");

showAllBrands.addEventListener("click", () => {
  console.log("qaq");
  if (brands.style.height === "100%") {
    brands.style.height = "180px";
    showBrandText.textContent = "Показать все";
  } else {
    brands.style.height = "100%";
    showBrandText.textContent = "Скрыть";
  }
});

const container = document.querySelector(".brands-container");

const dots = document.querySelectorAll(".dots-item");

let currentIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    container.scrollTo({ left: 256 * index, behavior: "smooth" });
    updateDots();
  });
});

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("dots-item-active", index === currentIndex);
  });
}
