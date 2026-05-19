const menuBtn = document.querySelector("#menu-btn i");
const navLinks = document.querySelector("#nav-links");

menuBtn.addEventListener("click", (e) => {
  // Add/remove "open" class to NavLinks.
  navLinks.classList.toggle("open");

  //  If open class is added, convert to closeBtn.
  const isOpen = navLinks.classList.contains("open");

  // Determine the content of MenuBtn.
  menuBtn.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
