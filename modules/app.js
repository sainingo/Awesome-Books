const section = document.querySelectorAll(".section");
const addNew = document.querySelector(".list-books");

function makeActive(className) {
  section.forEach((item) => {
    if (item.classList.contains(className)) {
      item.classList.add("show");
      addNew.classList.toggle("show");
    } else {
      item.classList.remove("show");
    }
  });
}