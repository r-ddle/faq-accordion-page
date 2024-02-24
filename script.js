const toggleIcons = document.querySelectorAll(".toggle-icon");

toggleIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const targetId = icon.dataset.target;
    const targetElement = document.getElementById(targetId);
    const image = icon.querySelector("img");

    targetElement.classList.toggle("active");

    if (targetElement.classList.contains("active")) {
      image.src = "assets/images/icon-minus.svg";
    } else {
      image.src = "assets/images/icon-plus.svg";
    }
  });
});
