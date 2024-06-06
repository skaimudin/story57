// Toggle class active untuk humberger menu
const navbarNav = document.querySelector(".navbar-nav");

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// Toggle class active untuk shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");

//ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Ketika Tombol Search diklik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active"); //diklik hilang diklik lagi muncul
  searchBox.focus(); // agar focus
  e.preventDefault(); //agar ketika diklik halamannya tidak naik keatas
};

// Ketiak ShoppingCart diklik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active"); //diklik hilang diklik lagi muncul
  e.preventDefault();
};

// Modal BOX
const itemDetailModal = document.querySelector("#item-detail-modal");

// Query Selector All untuk mencari semua class
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

// Untuk menampilkan detail di semua elemen maka harus dilopping
itemDetailButtons.forEach((btn) => {
  // Ketika diklik untuk membuat jadi flex
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault(e);
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

//klik diluar modal untuk menghilangkan
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
